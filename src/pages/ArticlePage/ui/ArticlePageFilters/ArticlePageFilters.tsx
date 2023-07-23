import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePageFilters.module.scss';
import { ArticleSortFields, ArticleType } from '@/entities/Article';
import {
  articlesPageOrder,
  articlesPageSearch,
  articlesPageSort,
  articlesPageType,
  articlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticlePageSliceActions } from '../../model/slice/articlePageSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card/ui/Card';
import { Input } from '@/shared/ui/Input/ui/Input';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { SortOrder } from '@/shared/types';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/ui/Tabs/ui/Tabs';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSections } from '@/features/ArticleViewSections';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const views = useSelector(articlesPageView);

  const orders = useSelector(articlesPageOrder);
  const sort = useSelector(articlesPageSort);
  const search = useSelector(articlesPageSearch);
  const type = useSelector(articlesPageType);

  const onChangeViews = useCallback(
    (view: 'SMALL' | 'BIG') => {
      dispatch(ArticlePageSliceActions.setView(view));
    },
    [dispatch]
  );

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const debounsedFetchData = useDebounce(fetchData, 500);

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(ArticlePageSliceActions.setOrder(newOrder));
      dispatch(ArticlePageSliceActions.setPage(1));
      debounsedFetchData();
    },
    [dispatch, debounsedFetchData]
  );
  const onChangeSort = useCallback(
    (newSort: ArticleSortFields) => {
      dispatch(ArticlePageSliceActions.setSort(newSort));
      dispatch(ArticlePageSliceActions.setPage(1));
      debounsedFetchData();
    },
    [dispatch, debounsedFetchData]
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(ArticlePageSliceActions.setSearch(search));
      dispatch(ArticlePageSliceActions.setPage(1));
      debounsedFetchData();
    },
    [dispatch, debounsedFetchData]
  );

  const onTabClick = useCallback(
    (tabs: TabItem) => {
      dispatch(ArticlePageSliceActions.setType(tabs.value as ArticleType));
      dispatch(ArticlePageSliceActions.setPage(1));
      fetchData();
    },
    [fetchData, dispatch]
  );

  return (
    <div className={classNames(cls.articlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={orders}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSections view={views} onViewClick={onChangeViews} />
      </div>
      <Card className={cls.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск')}
        />
      </Card>
      <ArticleTypeTabs value={type} onChangeType={onTabClick} />
    </div>
  );
});
