import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { Profile } from '../../model/types/profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { OldProfileCard } from '../OldProfileCard/OldProfileCard';
import { RedesignedProfileCard } from '../RedesignedProfileCard/RedesignedProfileCard';

interface ProfileCardProps {
    className?: string;
    error?: string;
    isLoading?: boolean;
    data?: Profile;
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

export const ProfileCard = memo(
    ({
        className,
        error,
        isLoading,
        data,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    }: ProfileCardProps) => {
        const { t } = useTranslation('profile');
        if (error) {
            return (
                <HStack
                    justify="center"
                    max
                    className={classNames(cls.ProfileCard, {}, [
                        className,
                        cls.error,
                    ])}
                >
                    <TextsOld
                        align="center"
                        theme="error"
                        title={t('Произошла ошибка')}
                        text={t('Попробуйте обновить страницу')}
                    />
                </HStack>
            );
        }

        return (
            <div className={cls.max}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <RedesignedProfileCard
                            data={data}
                            error={error}
                            isLoading={isLoading}
                            onChangeAge={onChangeAge}
                            onChangeAvatar={onChangeAvatar}
                            onChangeCity={onChangeCity}
                            onChangeCountry={onChangeCountry}
                            onChangeCurrency={onChangeCurrency}
                            onChangeFirstName={onChangeFirstName}
                            onChangeLastName={onChangeLastName}
                            onChangeUsername={onChangeUsername}
                            readonly={readonly}
                        />
                    }
                    off={
                        <OldProfileCard
                            data={data}
                            error={error}
                            isLoading={isLoading}
                            onChangeAge={onChangeAge}
                            onChangeAvatar={onChangeAvatar}
                            onChangeCity={onChangeCity}
                            onChangeCountry={onChangeCountry}
                            onChangeCurrency={onChangeCurrency}
                            onChangeFirstName={onChangeFirstName}
                            onChangeLastName={onChangeLastName}
                            onChangeUsername={onChangeUsername}
                            readonly={readonly}
                        />
                    }
                />
            </div>
        );
    },
);
