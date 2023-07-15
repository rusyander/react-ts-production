import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Popover } from '@headlessui/react';
import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
  className?: string;
  trigger?: React.ReactNode;
  direction?: DropdownDirection;
  children: React.ReactNode;
}

export const Popovers = memo((props: PopoverProps) => {
  const { className, trigger, direction = 'bottom right', children } = props;
  const { t } = useTranslation();
  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <Popover
      className={classNames(popupCls.dropdown, {}, [className, popupCls.popup])}
    >
      <Popover.Button className={popupCls.trigger}>{trigger}</Popover.Button>

      <Popover.Panel className={classNames(cls.panel, {}, optionsClasses)}>
        {children}
      </Popover.Panel>
    </Popover>
  );
});
