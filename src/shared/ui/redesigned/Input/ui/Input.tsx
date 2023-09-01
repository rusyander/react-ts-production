import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Texts } from '../../Text';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readonly?: boolean;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
    size?: InputSize;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        label,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        addonLeft,
        addonRight,
        size = 'm',
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            ref.current?.focus();
        }
    }, [autoFocus, ref]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocus(false);
    };

    const onFocus = () => {
        setIsFocus(true);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.isFocus]: isFocus,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const inputFild = (
        <div
            className={classNames(cls.InputWrapper, mods, [
                className,
                cls[size],
            ])}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                ref={ref}
                type={type}
                onChange={onChangeHandler}
                value={value}
                className={cls.input}
                onBlur={onBlur}
                onFocus={onFocus}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Texts text={label} />
                {inputFild}
            </HStack>
        );
    }

    return <>{inputFild}</>;
});
