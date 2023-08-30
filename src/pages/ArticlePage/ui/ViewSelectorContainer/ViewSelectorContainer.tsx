import { memo } from 'react';
import cls from './ViewSelectorContainer.module.scss';
import { ArticleViewSections } from '@/features/ArticleViewSections';
import { useArticleFilters } from '../../lib/hooks/useArticleFilter';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { onChangeViews, views } = useArticleFilters();

        return (
            <ArticleViewSections
                className={cls.viewSelectorContainer}
                view={views}
                onViewClick={onChangeViews}
            />
        );
    },
);
