import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReduser } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

const redusers: ReducersList = {
  articleDetailsPage: articleDetailsPageReduser,
};

function ArticleDetailsPage() {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams<{ id: string }>();

  // if (!id) {
  //   return (
  //     <Page>
  //       <h1>{t('Статья не найдена')}</h1>
  //     </Page>
  //   );
  // }

  return (
    <DynamicModuleLoader reducers={redusers} removeAfterUnmaunt={true}>
      <Page>
        <VStack max gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
}
export default memo(ArticleDetailsPage);
