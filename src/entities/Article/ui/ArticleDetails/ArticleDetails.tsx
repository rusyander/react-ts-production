import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { ArticleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { fetchArticlesById } from 'entities/Article/model/services/fetchArticlesById/fetchArticlesById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getArticlesDetailsDataSelectors,
  getArticlesDetailsLoadingSelectors,
  getArticlesDetailsErrorSelectors,
} from 'entities/Article/model/selectors/getArticlesDetailsSelectors/getArticlesDetailsSelectors';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import { Texts } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

const reducers = {
  articleDetails: ArticleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('articleDetails');
  const dispatch = useAppDispatch();

  const article = useSelector(getArticlesDetailsDataSelectors);
  const isLoading = useSelector(getArticlesDetailsLoadingSelectors);
  const error = useSelector(getArticlesDetailsErrorSelectors);

  useEffect(() => {
    dispatch(fetchArticlesById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          className={cls.avatar}
          height="200px"
          width="200px"
          border="50%"
        />
        <Skeleton className={cls.title} height="40px" width="400px" />
        <Skeleton className={cls.skeleton} height="30px" width="200px" />
        <Skeleton className={cls.skeleton} height="220px" width="100%" />
        <Skeleton className={cls.skeleton} height="220px" width="100%" />
      </div>
    );
  } else if (error) {
    content = (
      <Texts
        align="center"
        title={t('Произошла ошибка при загрузке статьи')}
        theme="error"
      />
    );
  } else {
    content = <h1>Article details</h1>;
  }

  return (
    <DynamicModuleLoader removeAfterUnmaunt={true} reducers={reducers}>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
