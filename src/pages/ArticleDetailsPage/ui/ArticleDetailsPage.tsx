import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function ArticleDetailsPage() {
  const { t } = useTranslation('article');

  return <div>Article details page</div>;
}
export default memo(ArticleDetailsPage);
