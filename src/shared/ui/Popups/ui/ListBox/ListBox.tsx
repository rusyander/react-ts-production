import { Fragment, ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Listbox as HListbox } from '@headlessui/react';
import { Button } from '../../../Button/ui/Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange?: <T extends string>(value: T) => void;
  readonly?: boolean;
  label?: string;
  direction?: DropdownDirection;
}

export const ListBox = memo((props: ListBoxProps) => {
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
  return (
    <HStack max gap="8">
      {label && (
        <span
          className={classNames(
            popupCls.label,
            {
              [popupCls.labelActive]: !readonly,
              [popupCls.labelDeact]: readonly,
            },
            [popupCls.popup]
          )}
        >{`${label}>`}</span>
      )}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(popupCls.dropdown, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={popupCls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(popupCls.options, {}, optionsClasses)}
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
                      [popupCls.disabled]: option.disabled,
                    },
                    []
                  )}
                >
                  {selected && <span className={cls.checkmark}>✓</span>}
                  {option.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
});
