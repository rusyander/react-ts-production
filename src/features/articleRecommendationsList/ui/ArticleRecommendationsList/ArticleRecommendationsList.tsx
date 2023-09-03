import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { getArticleRecommendationsList } from '../../api/articleRecomendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';
import { Texts } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('articleDetails');
        const limit: any = 8;
        const {
            data: articles,
            isLoading,
            error,
        } = getArticleRecommendationsList(limit);

        return (
            <VStack gap="8" data-testid={'ArticleRecommendationsList'}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Texts size="l" title={t('Рекомендуем')} />}
                    off={<TextsOld size="sizeL" title={t('Рекомендуем')} />}
                />
                <ArticleList
                    virtualization={false}
                    article={articles || []}
                    isLoading={isLoading}
                    target="_blank"
                />
            </VStack>
        );
    },
);
