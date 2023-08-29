import { ChangeEvent, useCallback, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}
/**
 * @deprecated
 */

export const Select = <T extends string>({
    className,
    label = 'Укажи значение',
    options,
    value,
    onChange,
    readonly,
}: SelectProps<T>) => {
    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value as T);
        },
        [onChange],
    );

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option key={opt.value} className={cls.option} value={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options]);
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                onChange={onChangeHandler}
                value={value}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    );
};
