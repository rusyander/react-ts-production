import { ArticleSortFields, ArticleType } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from '@/shared/types';
import { TabItem } from '@/shared/ui/Tabs/ui/Tabs';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    articlesPageView,
    articlesPageOrder,
    articlesPageSort,
    articlesPageSearch,
    articlesPageType,
} from '../../model/selectors/articlesPageSelectors';
import { ArticlePageSliceActions } from '../../model/slice/articlePageSlice';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';

export function useArticleFilters() {
    const dispatch = useAppDispatch();
    const views = useSelector(articlesPageView);

    const orders = useSelector(articlesPageOrder);
    const sort = useSelector(articlesPageSort);
    const search = useSelector(articlesPageSearch);
    const type = useSelector(articlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const debounsedFetchData = useDebounce(fetchData, 500);

    const onChangeViews = useCallback(
        (view: 'SMALL' | 'BIG') => {
            dispatch(ArticlePageSliceActions.setView(view));
        },
        [dispatch],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(ArticlePageSliceActions.setOrder(newOrder));
            dispatch(ArticlePageSliceActions.setPage(1));
            debounsedFetchData();
        },
        [dispatch, debounsedFetchData],
    );
    const onChangeSort = useCallback(
        (newSort: ArticleSortFields) => {
            dispatch(ArticlePageSliceActions.setSort(newSort));
            dispatch(ArticlePageSliceActions.setPage(1));
            debounsedFetchData();
        },
        [dispatch, debounsedFetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(ArticlePageSliceActions.setSearch(search));
            dispatch(ArticlePageSliceActions.setPage(1));
            debounsedFetchData();
        },
        [dispatch, debounsedFetchData],
    );

    const onTabClick = useCallback(
        (tabs: TabItem) => {
            dispatch(
                ArticlePageSliceActions.setType(tabs.value as ArticleType),
            );
            dispatch(ArticlePageSliceActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

    return {
        views,
        orders,
        sort,
        search,
        type,
        onChangeViews,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onTabClick,
    };
}
