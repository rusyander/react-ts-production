import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <Page>
      <div>{t('Главная cтраница')}</div>
    </Page>
  );
}
