import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { ListBox as ListBoxOld } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
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
            [onChange],
        );

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <ListBox
                        className={classNames('', {}, [className])}
                        defaultValue={t('Укажите валюту')}
                        label={t('Укажите валюту')}
                        onChange={onChageHandler}
                        value={value}
                        items={options}
                        readonly={readonly}
                        direction="top right"
                    />
                }
                off={
                    <ListBoxOld
                        className={classNames('', {}, [className])}
                        defaultValue={t('Укажите валюту')}
                        label={t('Укажите валюту')}
                        onChange={onChageHandler}
                        value={value}
                        items={options}
                        readonly={readonly}
                        direction="top right"
                    />
                }
            />
        );
        // (
        //   <ListBox
        //     className={classNames('', {}, [className])}
        //     defaultValue={t('Укажите валюту')}
        //     label={t('Укажите валюту')}
        //     onChange={onChageHandler}
        //     value={value}
        //     items={options}
        //     readonly={readonly}
        //     direction="top right"
        //   />
        // );
    },
);
