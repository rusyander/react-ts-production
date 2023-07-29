import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export default function ForbiddenPage() {
  const { t } = useTranslation();
  return (
    <Page data-testid={'ForbiddenPage'}>
      <div>{t('У вас нет доступа к этой странице')}</div>
    </Page>
  );
}
