import { ArticleDetails } from 'entities/Article';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

function ArticleDetailsPage() {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return (
      <div>
        <h1>{t('Статья не найдена')}</h1>
      </div>
    );
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
}
export default memo(ArticleDetailsPage);
