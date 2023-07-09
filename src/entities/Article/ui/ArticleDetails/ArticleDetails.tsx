import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { ArticleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getArticlesDetailsDataSelectors,
  getArticlesDetailsLoadingSelectors,
  getArticlesDetailsErrorSelectors,
} from '../../model/selectors/getArticlesDetailsSelectors/getArticlesDetailsSelectors';
import { useSelector } from 'react-redux';
import { Texts } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CreateDateIcon from 'shared/assets/icons/create-date.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockCompenent } from '../ArticleImageBlockCompenent/ArticleImageBlockCompenent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/consts';

const reducers = {
  articleDetails: ArticleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('articleDetails');
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticlesDetailsLoadingSelectors);
  const error = useSelector(getArticlesDetailsErrorSelectors);
  const articleData = useSelector(getArticlesDetailsDataSelectors);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );

      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );

      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockCompenent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );

      default:
        return null;
    }
  }, []);

  // useEffect(() => {
  //   if (__PROJECT__ !== 'storybook') {
  //     dispatch(fetchArticlesById(id));
  //   }
  // }, [dispatch, id]);
  useInitialEffect(() => {
    dispatch(fetchArticlesById(id || ''));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          height="200px"
          width="200px"
          border="50%"
        />
        <Skeleton className={cls.title} height="40px" width="400px" />
        <Skeleton className={cls.skeleton} height="30px" width="200px" />
        <Skeleton className={cls.skeleton} height="220px" width="100%" />
        <Skeleton className={cls.skeleton} height="220px" width="100%" />
      </>
    );
  } else if (error) {
    content = (
      <Texts
        align="center"
        title={t('Произошла ошибка при загрузке статьи')}
        theme="error"
      />
    );
  } else {
    content = (
      <>
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar size={200} src={articleData?.img} className={cls.avatar} />
        </HStack>
        <VStack gap="4" max>
          <Texts
            size="sizeL"
            className={cls.title}
            title={articleData?.title}
            text={articleData?.subtitle}
          />
          <HStack gap="8" className={cls.articleInfo}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Texts text={String(articleData?.views)} />
          </HStack>
          <HStack gap="8" className={cls.articleInfo}>
            <Icon Svg={CreateDateIcon} className={cls.icon} />
            <Texts text={articleData?.createdAt} />
          </HStack>
        </VStack>

        {articleData?.blocks.map((block) => renderBlock(block))}
      </>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmaunt={true} reducers={reducers}>
      <VStack
        gap="16"
        className={classNames(cls.articleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
