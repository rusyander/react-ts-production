import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

import { memo } from 'react';
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

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(String(id)));
  });

  if (!id) {
    return (
      <div>
        <h1>{t('Статья не найдена')}</h1>
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={redusers} removeAfterUnmaunt={true}>
      <div>
        <ArticleDetails id={id} />
        <Texts className={cls.title} title={t('Коментарии')} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
}
export default memo(ArticleDetailsPage);
