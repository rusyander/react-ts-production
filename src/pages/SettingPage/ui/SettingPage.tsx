import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Texts } from '@/shared/ui/redesigned/Text';
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher';
import { VStack } from '@/shared/ui/Stack';

export default function SettingPage() {
    const { t } = useTranslation('settings');
    return (
        <Page data-testid={'SettingsPage'}>
            <VStack max gap="16">
                <Texts title={t('Настройки')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
}
