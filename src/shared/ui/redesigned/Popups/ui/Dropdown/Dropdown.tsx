import { Fragment, memo } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItems {
    content: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItems[];
    trigger?: React.ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
    const { className, trigger, items, direction = 'bottom right' } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];
    return (
        <Menu
            as="div"
            className={classNames(popupCls.dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, optionsClasses)}>
                {items?.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            disabled={item.disabled}
                            type="button"
                            onClick={item.onClick}
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={index}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            as={Fragment}
                            key={index}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}

                {/* <Menu.Item as={Fragment}>
          {({ active }) => (
            <li className={classNames(cls.item, { [cls.active]: active }, [])}>
              Account settings
            </li>
          )}
        </Menu.Item> */}
            </Menu.Items>
        </Menu>
    );
});
