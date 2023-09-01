import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RedesignedProfileCard.module.scss';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface RedesignedProfileCardProps {
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

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding="24" max>
            <VStack gap="32" max>
                <HStack max align="center" justify="center">
                    <Skeleton width={128} height={128} border={'100%'} />
                </HStack>
                <HStack gap="32" max>
                    <VStack max gap="16">
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                    </VStack>
                    <VStack max gap="16">
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={300} height={38} />
                        <Skeleton width={300} height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export const RedesignedProfileCard = memo(
    (props: RedesignedProfileCardProps) => {
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
                    <ProfileCardRedesignedSkeleton />
                </HStack>
            );
        }

        return (
            <Card
                max
                padding="24"
                className={classNames(cls.redesignedProfileCard, {}, [
                    className,
                ])}
            >
                <VStack max gap="32">
                    {data?.avatar && (
                        <HStack
                            max
                            justify="center"
                            className={cls.avatarWrapper}
                        >
                            <Avatar size={128} src={data?.avatar} />
                        </HStack>
                    )}

                    <HStack gap="24" max>
                        <VStack gap="16" max>
                            <Input
                                className={cls.input}
                                value={data?.first}
                                onChange={onChangeFirstName}
                                readonly={readonly}
                                data-testid={'ProfileCard.Firstname'}
                                label={t('Ваше имя')}
                            />

                            <Input
                                className={cls.input}
                                value={data?.lastname}
                                onChange={onChangeLastName}
                                readonly={readonly}
                                data-testid={'ProfileCard.Lastname'}
                                label={t('Ваша фамилия')}
                            />

                            <Input
                                className={cls.input}
                                value={data?.age}
                                type="number"
                                onChange={onChangeAge}
                                readonly={readonly}
                                data-testid={'ProfileCard.Age'}
                                label={t('Ваша возраст')}
                            />

                            <Input
                                className={cls.input}
                                value={data?.city}
                                onChange={onChangeCity}
                                readonly={readonly}
                                data-testid={'ProfileCard.City'}
                                label={t('Город')}
                            />
                        </VStack>
                        <VStack gap="16" max>
                            <Input
                                className={cls.input}
                                value={data?.username}
                                onChange={onChangeUsername}
                                readonly={readonly}
                                data-testid={'ProfileCard.Username'}
                                label={t('Ваш никнейм')}
                            />

                            <Input
                                className={cls.input}
                                value={data?.avatar}
                                onChange={onChangeAvatar}
                                readonly={readonly}
                                data-testid={'ProfileCard.Avatar'}
                                label={t('Ваша аватарка')}
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
                    </HStack>
                </VStack>
            </Card>
        );
    },
);
