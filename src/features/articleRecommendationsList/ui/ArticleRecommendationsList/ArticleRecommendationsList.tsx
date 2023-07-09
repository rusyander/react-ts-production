import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Texts } from 'shared/ui/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { getArticleRecommendationsList } from '../../api/articleRecomendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('articleDetails');
    const {
      data: articles,
      isLoading,
      error,
    } = getArticleRecommendationsList(3);

    return (
      <VStack gap="8">
        <Texts size="sizeL" title={t('Рекомендуем')} />
        <ArticleList article={articles} isLoading={isLoading} target="_blank" />
      </VStack>
    );
  }
);
