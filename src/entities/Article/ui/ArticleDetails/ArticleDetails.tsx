import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { ArticleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesDetailsDataSelectors,
    getArticlesDetailsLoadingSelectors,
    getArticlesDetailsErrorSelectors,
} from '../../model/selectors/getArticlesDetailsSelectors/getArticlesDetailsSelectors';
import { useSelector } from 'react-redux';

import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsOld } from './ArticleDetailsOld/ArticleDetailsOld';
import { ArticleDetailsNew } from './ArticleDetailsNew/ArticleDetailsNew';
import { RenderArticleBlock } from './RenderBlock';

const reducers = {
    articleDetails: ArticleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticlesDetailsLoadingSelectors);
    const error = useSelector(getArticlesDetailsErrorSelectors);
    const articleData = useSelector(getArticlesDetailsDataSelectors);

    useInitialEffect(() => {
        dispatch(fetchArticlesById(id || ''));
    });

    return (
        <DynamicModuleLoader removeAfterUnmaunt={true} reducers={reducers}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <ArticleDetailsNew
                        articleData={articleData}
                        isLoading={isLoading}
                        renderBlock={RenderArticleBlock}
                        error={error}
                    />
                }
                off={
                    <ArticleDetailsOld
                        articleData={articleData}
                        isLoading={isLoading}
                        renderBlock={RenderArticleBlock}
                        error={error}
                    />
                }
            />
        </DynamicModuleLoader>
    );
});
