import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function ArticlePage() {
  const { t } = useTranslation('article');

  return <div>{t('Статьи')}</div>;
}

export default memo(ArticlePage);
