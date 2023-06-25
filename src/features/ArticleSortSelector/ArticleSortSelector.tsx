import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { ArticleSortFields } from 'entities/Article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortFields;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortFields) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, onChangeOrder, onChangeSort, order } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOptions[]>(() => {
    return [
      { value: 'asc', content: t('возрастанию') },
      { value: 'desc', content: t('убыванию') },
    ];
  }, [t]);
  const sortFieldsOptions = useMemo<SelectOptions[]>(() => {
    return [
      { value: 'views', content: t('просмотрам') },
      { value: 'title', content: t('названию') },
      { value: 'createdAt', content: t('дате созданию') },
    ];
  }, [t]);

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        value={sort}
        onChange={onChangeSort}
        options={sortFieldsOptions}
        label={t('Сортировать ПО')}
      />
      <Select
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label={t('По')}
        className={cls.order}
      />
    </div>
  );
});
