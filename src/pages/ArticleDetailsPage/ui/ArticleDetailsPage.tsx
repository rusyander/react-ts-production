import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Texts } from 'shared/ui/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import {
  ArticleDetailCommentsReducer,
  getArticleComments,
} from '../model/slice/articleDetailCommentsSlice';
import { useSelector } from 'react-redux';
import {
  getArticleCommentsIsLoading,
  getArticleCommentsError,
} from '../model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { Button } from 'shared/ui/Button/Button';
import { Page } from 'shared/ui/Page/Page';

const redusers: ReducersList = {
  articleDetailsComments: ArticleDetailCommentsReducer,
};

function ArticleDetailsPage() {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);

  const backToList = useCallback(() => {
    window.history.back();
  }, []);

  const onSendComment = useCallback(
    (text) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(String(id)));
  });

  if (!id) {
    return (
      <Page>
        <h1>{t('Статья не найдена')}</h1>
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={redusers} removeAfterUnmaunt={true}>
      <Page>
        <div>
          <Button onClick={backToList} theme="outline">
            {t('Назад')}
          </Button>
          <ArticleDetails id={id} />
          <Texts className={cls.title} title={t('Коментарии')} />
          <AddCommentForm onSendComments={onSendComment} />
          <CommentList comments={comments} isLoading={isLoading} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
}
export default memo(ArticleDetailsPage);
