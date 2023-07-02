import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox } from 'shared/ui/ListBox/ListBox';
interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value?: Country) => void;
  readonly?: boolean;
}
const options = [
  { value: Country.Argentina, content: Country.Argentina },
  { value: Country.Australia, content: Country.Australia },
  { value: Country.Brazil, content: Country.Brazil },
  { value: Country.Canada, content: Country.Canada },
  { value: Country.China, content: Country.China },
  { value: Country.France, content: Country.France },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.India, content: Country.India },
  { value: Country.Italy, content: Country.Italy },
  { value: Country.Japan, content: Country.Japan },
  { value: Country.Mexico, content: Country.Mexico },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Spain, content: Country.Spain },
  { value: Country.Switzerland, content: Country.Switzerland },
  { value: Country.Turkey, content: Country.Turkey },
  { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChageHandler = useCallback(
      (value: string | any) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <ListBox
        className={classNames('', {}, [className])}
        defaultValue={t('Укажите страну')}
        label={t('Укажите страну')}
        onChange={onChageHandler}
        value={value}
        items={options}
        readonly={readonly}
      />
    );
  }
);
