import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { ArticlePageSliceReducer } from '../../model/slice/articlePageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlePage.module.scss';
import { useArticleById } from '../../model/selectors/articlesPageSelectors';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FilterContainer } from '../FilterContainer/FilterContainer';

const reducers: ReducersList = {
    articlesPage: ArticlePageSliceReducer,
};
function ArticlePage() {
    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);
    const articleId = useArticleById('2');
    // console.log(articleId);

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    content={
                        <Page
                            data-testid={'ArticlePage'}
                            onScrollEnd={onLoadNextPage}
                            className={cls.pageRedesigned}
                        >
                            <div className={cls.listRedesigned}>
                                <ArticleInfiniteList />
                            </div>
                        </Page>
                    }
                    // left={<ArticlePageFilters />}

                    right={<FilterContainer />}
                />
            }
            off={
                <Page data-testid={'ArticlePage'} onScrollEnd={onLoadNextPage}>
                    <div className={cls.list}>
                        <ArticlePageFilters />
                        <ArticleInfiniteList />
                    </div>
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmaunt={false}>
            {content}

            {/* <ArticleList
            view={views}
            isLoading={isLoading}
            // article={new Array(2).fill(articleMock).map((item, index) => {
            //   return { ...item, id: index.toString() };
            // })}
            article={articles}
            className={cls.list}
          /> */}
        </DynamicModuleLoader>
    );
}

export default memo(ArticlePage);
