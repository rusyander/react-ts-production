import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from '@/shared/ui/Input/ui/Input';
import { Button } from '@/shared/ui/Button/ui/Button';
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
    [dispatch]
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
      <HStack
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
      </HStack>
    </DynamicModuleLoader>
  );
});
export default AddCommentForm;
