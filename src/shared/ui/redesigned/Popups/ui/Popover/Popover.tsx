import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Popover } from '@headlessui/react';
import { mapDirectionClass } from '../../styles/consts';
import { DropdownDirection } from '@/shared/types/ui';

interface PopoverProps {
    className?: string;
    trigger?: React.ReactNode;
    direction?: DropdownDirection;
    children: React.ReactNode;
}

export const Popovers = memo((props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;
    const { t } = useTranslation();
    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <Popover
            className={classNames(popupCls.dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Popover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </Popover.Button>

            <Popover.Panel
                className={classNames(cls.panel, {}, optionsClasses)}
            >
                {children}
            </Popover.Panel>
        </Popover>
    );
});
