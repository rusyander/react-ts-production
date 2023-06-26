import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleBlockType } from '../../model/types/article';
import { Texts } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { ArticleTextBlock } from './../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view = 'SMALL', target } = props;
  const { t } = useTranslation('article');
  // const navigate = useNavigate();
  const [isHover, bindHover] = useHover();
  // console.log('isHover', isHover);
  // const onOpenArticle = useCallback(() => {
  //   navigate(RoutePath.article_details + article.id);
  // }, [article.id, navigate]);

  const types = <Texts className={cls.types} text={article.type.join(', ')} />;
  const views = (
    <>
      <Texts className={cls.views} text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === 'BIG') {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
      <div
        {...bindHover}
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar src={article.user.avatar} size={30} />
            <Texts className={cls.username} text={article.user.username} />
            <Texts className={cls.date} text={article.createdAt} />
          </div>
          <Texts className={cls.title} title={article.title} />
          {types}
          <img src={article.img} alt={article.title} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={RoutePath.article_details + article.id}
            >
              <Button theme="outline">{t('Читать далее...')}</Button>
            </AppLink>
            <div className={cls.viewsEl}>{views}</div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      {...bindHover}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <AppLink target={target} to={RoutePath.article_details + article.id}>
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <img src={article.img} alt={article.title} className={cls.img} />
            <Texts className={cls.date} text={article.createdAt} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Texts className={cls.title} text={article.title} />
        </Card>
      </AppLink>
    </div>
  );
});
