import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/RatingCard';

export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <Page>
      <div>{t('Главная cтраница')}</div>
      <RatingCard feedbackTitle="Good" title="Spasibo" hasFeedback />
    </Page>
  );
}
