import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input as InputOld } from '@/shared/ui/Input/ui/Input';
import { Button as ButtonOld } from '@/shared/ui/Button/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import {
    AddCommentFormActions,
    AddCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    addComentFormSelectorsText,
    addComentFormSelectorsError,
} from '../../model/selectors/addComentFormSelectors';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { ToggleFeatures } from '@/shared/lib/features';
// import SendIcon from '@/shared/assets/redesigned/main-20-20.svg';
// import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Button } from '@/shared/ui/redesigned/Button';

export interface AddCommentFormProps {
    className?: string;
    onSendComments?: (text: string) => void;
}
const reducers: ReducersList = {
    addCommentForm: AddCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComments = () => {
            return null;
        },
    } = props;
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();

    const commentText = useSelector(addComentFormSelectorsText);
    const commentError = useSelector(addComentFormSelectorsError);

    const onCommentTextChange = useCallback(
        (text: string) => {
            dispatch(AddCommentFormActions.setText(text || ''));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComments(commentText);
        dispatch(AddCommentFormActions.setText(''));
    }, [commentText, onSendComments, dispatch]);

    // const onSendComment = useCallback(() => {
    //   dispatch(sendComments());
    // }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmaunt={true}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card
                        max
                        padding="24"
                        border="round"
                        className={cls.Margin}
                    >
                        <HStack
                            justify="between"
                            max
                            className={classNames(
                                cls.addCommentFormRedesigned,
                                {},
                                [className],
                            )}
                            data-testid={'AddCommentForm'}
                            gap="16"
                        >
                            <Input
                                data-testid={'AddCommentForm.Input'}
                                className={cls.input}
                                onChange={onCommentTextChange}
                                placeholder={t('Введите текст коментарий')}
                            />
                            <Button
                                data-testid={'AddCommentForm.Button'}
                                onClick={onSendHandler}
                            >
                                {t('Отправить')}
                            </Button>
                            {/* <Icon
                                data-testid={'AddCommentForm.Button'}
                                onClick={onSendHandler}
                                Svg={SendIcon}
                            /> */}
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        justify="between"
                        max
                        className={classNames(cls.addCommentForm, {}, [
                            className,
                        ])}
                        data-testid={'AddCommentForm'}
                    >
                        <InputOld
                            data-testid={'AddCommentForm.Input'}
                            className={cls.input}
                            onChange={onCommentTextChange}
                            placeholder={t('Введите текст коментарий')}
                        />
                        <ButtonOld
                            data-testid={'AddCommentForm.Button'}
                            onClick={onSendHandler}
                        >
                            {t('Отправить')}
                        </ButtonOld>
                    </HStack>
                }
            />
            {/* <HStack
        justify="between"
        max
        className={classNames(cls.addCommentForm, {}, [className])}
        data-testid={'AddCommentForm'}
      >
        <Input
          data-testid={'AddCommentForm.Input'}
          className={cls.input}
          onChange={onCommentTextChange}
          placeholder={t('Введите текст коментарий')}
        />
        <Button data-testid={'AddCommentForm.Button'} onClick={onSendHandler}>
          {t('Отправить')}
        </Button>
      </HStack> */}
        </DynamicModuleLoader>
    );
});
export default AddCommentForm;
