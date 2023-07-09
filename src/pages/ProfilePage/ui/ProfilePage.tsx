import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Texts } from 'shared/ui/Text';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Texts text={t('Профиль не найден')} />;
  }

  return (
    <Page>
      <VStack gap="16" max={true}>
        <EditableProfileCard id={id || ''} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
