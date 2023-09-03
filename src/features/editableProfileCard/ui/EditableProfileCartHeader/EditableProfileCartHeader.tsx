import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { Button as ButtonOld } from '@/shared/ui/Button/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { useParams } from 'react-router-dom';
import { HStack } from '@/shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ProfileActions } from '../../model/slice/profileSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Texts } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCartHeaderProps {
    className?: string;
}

export const EditableProfileCartHeader = ({
    className,
}: EditableProfileCartHeaderProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const { id } = useParams<{ id: string }>();

    const hasEdit = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const onCancelEdit = useCallback(() => {
        dispatch(ProfileActions.cancelEdit());
    }, [dispatch]);

    const onSave = () => {
        if (id) {
            dispatch(updateProfileData());
        }
    };

    return (
        <HStack
            max
            justify="between"
            className={classNames('max', {}, [className])}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card max padding="16" border="medium">
                        <HStack max justify="between">
                            <Texts title={t('Профиль')} />
                            {readonly && authData?.id === profileData?.id ? (
                                <Button
                                    onClick={hasEdit}
                                    variant="outline"
                                    data-testid={
                                        'EditableProfileCartHeader.EditButton'
                                    }
                                >
                                    {t('Редактировать')}
                                </Button>
                            ) : (
                                <>
                                    {authData?.id === profileData?.id && (
                                        <HStack gap="8">
                                            <Button
                                                onClick={onCancelEdit}
                                                variant="outline"
                                                color="error"
                                                data-testid={
                                                    'EditableProfileCartHeader.CancelButton'
                                                }
                                            >
                                                {t('Отменить')}
                                            </Button>
                                            <Button
                                                onClick={onSave}
                                                variant="outline"
                                                color="success"
                                                data-testid={
                                                    'EditableProfileCartHeader.SaveButton'
                                                }
                                            >
                                                {t('Сохранить')}
                                            </Button>{' '}
                                        </HStack>
                                    )}
                                </>
                            )}
                        </HStack>
                    </Card>
                }
                off={
                    <>
                        <TextsOld title={t('Профиль')} />
                        {readonly && authData?.id === profileData?.id ? (
                            <ButtonOld
                                onClick={hasEdit}
                                theme="outline"
                                data-testid={
                                    'EditableProfileCartHeader.EditButton'
                                }
                            >
                                {t('Редактировать')}
                            </ButtonOld>
                        ) : (
                            <>
                                {authData?.id === profileData?.id && (
                                    <HStack gap="8">
                                        <ButtonOld
                                            onClick={onCancelEdit}
                                            theme="outline_red"
                                            data-testid={
                                                'EditableProfileCartHeader.CancelButton'
                                            }
                                        >
                                            {t('Отменить')}
                                        </ButtonOld>
                                        <ButtonOld
                                            onClick={onSave}
                                            theme="outline"
                                            data-testid={
                                                'EditableProfileCartHeader.SaveButton'
                                            }
                                        >
                                            {t('Сохранить')}
                                        </ButtonOld>{' '}
                                    </HStack>
                                )}
                            </>
                        )}
                    </>
                }
            />
        </HStack>
    );
};
