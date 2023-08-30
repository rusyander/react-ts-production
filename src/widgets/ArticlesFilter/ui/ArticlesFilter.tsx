import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilter.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/Stack';
import { ArticleSortFields, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { SortOrder } from '@/shared/types';
import { TabItem } from '@/shared/ui/Tabs/ui/Tabs';
import { Input } from '@/shared/ui/redesigned/Input';

import SearchIcon from '@/shared/assets/redesigned/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFilterProps {
    className?: string;
    sort: ArticleSortFields;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (sort: ArticleSortFields) => void;
    onChangeSearch: (search: string) => void;
    search: string;
    type: ArticleType;
    onTabClick: (tab: TabItem) => void;
}

export const ArticlesFilter = memo((props: ArticlesFilterProps) => {
    const {
        className,
        onChangeOrder,
        onChangeSort,
        order,
        sort,
        onChangeSearch,
        onTabClick,
        search,
        type,
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cls.articlesFilter, {}, [className])}
            padding="24"
        >
            <VStack max gap="32">
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <ArticleTypeTabs value={type} onChangeType={onTabClick} />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});
