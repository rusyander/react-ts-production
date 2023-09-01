import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputOld } from '@/shared/ui/Input/ui/Input';
import { Profile } from '../../model/types/profile';
import { Avatar as AvatarOld } from '@/shared/ui/Avatar/ui/Avatar';
import cls from './OldProfileCard.module.scss';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';

interface OldProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCountry?: (country: Country | any) => void;
    onChangeCurrency?: (currency: Currency | any) => void;

    readonly?: boolean;
}

export const ProfileCardOldSkeleton = () => {
    return (
        <VStack gap="32" max>
            <HStack max gap="16">
                <Skeleton width={'100%'} height={38} />
                <Skeleton width={'100%'} height={38} />
                <Skeleton width={'100%'} height={38} />
                <Skeleton width={'100%'} height={38} />
                <Skeleton width={'100%'} height={38} />
                <Skeleton width={'100%'} height={38} />
                <Skeleton width="300" height={38} />
                <Skeleton width="300" height={38} />
            </HStack>
        </VStack>
    );
};

export const OldProfileCard = memo((props: OldProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className],
                )}
            >
                <ProfileCardOldSkeleton />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.oldProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack max justify="center" className={cls.avatarWrapper}>
                    <AvatarOld src={data?.avatar} />
                </HStack>
            )}

            <InputOld
                className={cls.input}
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid={'ProfileCard.Firstname'}
            />

            <InputOld
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid={'ProfileCard.Lastname'}
            />

            <InputOld
                className={cls.input}
                value={data?.age}
                type="number"
                placeholder={t('Ваша возраст')}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid={'ProfileCard.Age'}
            />

            <InputOld
                className={cls.input}
                value={data?.city}
                placeholder={t('Город')}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid={'ProfileCard.City'}
            />

            <InputOld
                className={cls.input}
                value={data?.username}
                placeholder={t('Ваш никнейм')}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid={'ProfileCard.Username'}
            />

            <InputOld
                className={cls.input}
                value={data?.avatar}
                placeholder={t('Ваша аватарка')}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid={'ProfileCard.Avatar'}
            />

            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />

            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
});
