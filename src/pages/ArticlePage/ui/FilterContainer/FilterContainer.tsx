import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesFilter } from '@/widgets/ArticlesFilter';
import { useArticleFilters } from '../../lib/hooks/useArticleFilter';

interface FilterContainerProps {
    className?: string;
}

export const FilterContainer = memo((props: FilterContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onTabClick,
        orders,
        search,
        sort,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilter
            onTabClick={onTabClick}
            order={orders}
            search={search}
            sort={sort}
            type={type}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            className={className}
        />
    );
});
