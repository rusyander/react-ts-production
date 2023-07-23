import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTypeTabs.module.scss';
import { TabItem, Tabs } from '@/shared/ui/Tabs/ui/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: string;
  onChangeType: (value: TabItem) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation('article');

  const typeTabs = useMemo(() => {
    return [
      {
        value: 'ALL',
        content: t('Все'),
      },
      {
        value: 'IT',
        content: t('Айти'),
      },
      {
        value: 'SCIENCE',
        content: t('Наука'),
      },
      {
        value: 'ECONOMICS',
        content: t('Экономика'),
      },
    ];
  }, [t]);

  const onTabClick = useCallback(
    (tabs: TabItem) => {
      onChangeType(tabs);
    },
    [onChangeType]
  );

  return (
    <Tabs
      className={cls.tabs}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
});
