import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export default function AdminPanelPage () {
  const { t } = useTranslation();
  return (
    <Page>
      <div>{t('Админ панель')}</div>
    </Page>
  );
}
