import { Fragment, ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Listbox as HListbox } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '../../../Button';

import ArrowIcon from '@/shared/assets/redesigned/arrow-bottom.svg';
import { Icon } from '../../../Icon';

interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem[];
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void;

    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom right',
    } = props;
    const { t } = useTranslation();

    const optionsClasses = [mapDirectionClass[direction]];
    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);
    return (
        <HStack max gap="8">
            {/* {label && (
                <span
                    className={classNames(
                        popupCls.label,
                        {
                            [popupCls.labelActive]: !readonly,
                            [popupCls.labelDeact]: readonly,
                        },
                        [popupCls.popup],
                    )}
                >{`${label}>`}</span>
            )} */}
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={cls.trigger}>
                    <Button
                        variant="filled"
                        disabled={readonly}
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((option) => (
                        <HListbox.Option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]:
                                                option.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && (
                                        <span className={cls.checkmark}>✓</span>
                                    )}
                                    {option.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
