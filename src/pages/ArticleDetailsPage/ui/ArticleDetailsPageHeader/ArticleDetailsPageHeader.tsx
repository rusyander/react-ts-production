import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { getUserAuthData } from './../../../../entities/User';
import { useSelector } from 'react-redux';
import { getArticlesDetailsDataSelectors } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('articleDetails');
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticlesDetailsDataSelectors);
    const canEdit = useSelector(getCanEditArticle);
    const navigate = useNavigate();

    const backToList = useCallback(() => {
      window.history.back();
    }, []);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article}/${article?.id || ''}/edit`);
    }, [article?.id, navigate]);
    return (
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Button onClick={backToList} theme="outline">
          {t('Назад')}
        </Button>

        {canEdit && (
          <Button onClick={onEditArticle} theme="outline">
            {t('Редактировать')}
          </Button>
        )}
      </HStack>
    );
  }
);
