import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/RatingCard';
import {
  getarticleRating,
  rateArticleMutation,
} from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId = '0' } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = getarticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticle] = rateArticleMutation();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticle({
          articleId,
          rate: starsCount,
          feedback,
          userId: userData?.id || '',
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, rateArticle, userData?.id]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  const onCansel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];
  return (
    <RatingCard
      onAccept={onAccept}
      onCansel={onCansel}
      rate={rating?.rate}
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t(
        'Оставьте свой отзыв о статье, это поможет улучшить качество материала'
      )}
      hasFeedback
    />
  );
});

export default ArticleRating;
