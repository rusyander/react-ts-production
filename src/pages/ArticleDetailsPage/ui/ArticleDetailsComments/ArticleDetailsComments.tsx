import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import {
  getArticleCommentsIsLoading,
  getArticleCommentsError,
} from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slice/articleDetailCommentsSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Texts } from '@/shared/ui/Text';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    const onSendComment = useCallback(
      (text) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );
    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(String(id)));
    });
    return (
      <div className={classNames('comments', {}, [className])}>
        <Texts size="sizeL" title={t('Коментарии')} />
        <AddCommentForm onSendComments={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    );
  }
);
