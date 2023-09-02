import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './UiDesignSwitcher.module.scss';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Texts } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation('settings');
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const authUsers = useSelector(getUserAuthData);

    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const items = [
        {
            content: t('Новый дизайн'),
            value: 'new',
        },
        {
            content: t('Классический дизайн'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authUsers) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authUsers.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack max>
            <Texts text={t('Выберите дизайн')} />
            {isLoading ? (
                <Skeleton width={100} height={30} />
            ) : (
                <ListBox
                    items={items}
                    defaultValue=""
                    value={isAppRedesigned ? 'new' : 'old'}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onChange={onChange}
                    className={classNames(cls.uiDesignSwitcher, {}, [
                        className,
                    ])}
                />
            )}
        </HStack>
    );
});
