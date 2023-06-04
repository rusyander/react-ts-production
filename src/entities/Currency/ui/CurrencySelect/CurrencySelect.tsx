import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value?: Currency) => void;
  readonly?: boolean;
}
const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChageHandler = useCallback(
      (value: string | any) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <Select
        className={classNames('', {}, [className])}
        options={options}
        label={t('Укажите валюту')}
        value={value}
        onChange={onChageHandler}
        readonly={readonly}
      />
    );
  }
);
