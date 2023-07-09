import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Texts } from 'shared/ui/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';

interface ArticleListProps {
  className?: string;
  article: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualization?: boolean;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'SMALL' ? 9 : 6)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    article,
    view = 'SMALL',
    isLoading,
    target,
    virtualization = true,
  } = props;
  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        {new Array(view === 'SMALL' ? 9 : 6).fill(0).map((_, index) => (
          <ArticleListItemSkeleton
            view={view}
            key={index}
            className={cls.card}
          />
        ))}
      </div>
    );
  }

  if (!isLoading && article.length === 0) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Texts size="sizeL" text={t('Статьи не найдены')} />
      </div>
    );
  }

  const isBig = view === 'BIG';

  const itemsPerRow = isBig ? 1 : 6;
  const rowCount = isBig
    ? article.length
    : Math.ceil(article.length / itemsPerRow);

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
      target={target}
    />
  );

  const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, article.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={article[i]}
          view={view}
          target={target}
          key={`str${i}`}
          className={cls.card}
        />
      );
    }

    return (
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
    );
  };

  return (
    // <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
    //   {({
    //     height,
    //     width,
    //     registerChild,
    //     onChildScroll,
    //     isScrolling,
    //     scrollTop,
    //   }) => (
    //     <div
    //       ref={registerChild}
    //       className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    //     >
    //       {virtualization ? (
    //         <List
    //           height={height ?? 700}
    //           rowCount={rowCount}
    //           rowHeight={isBig ? 700 : 330}
    //           rowRenderer={rowRender}
    //           width={width ? width - 80 : 700}
    //           autoHeight
    //           onScroll={onChildScroll}
    //           isScrolling={isScrolling}
    //           scrollTop={scrollTop}
    //         />
    //       ) : (
    //         article.map(renderArticle)
    //       )}

    //       {isLoading && (
    //         <div
    //           className={classNames(cls.articleList, {}, [
    //             className,
    //             cls[view],
    //           ])}
    //         >
    //           {new Array(view === 'SMALL' ? 9 : 6).fill(0).map((_, index) => (
    //             <ArticleListItemSkeleton
    //               view={view}
    //               key={index}
    //               className={cls.card}
    //             />
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </WindowScroller>

    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {article.length > 0 ? article.map(renderArticle) : null}
      {isLoading && (
        <div
          className={classNames(cls.articleList, {}, [className, cls[view]])}
        >
          {new Array(view === 'SMALL' ? 9 : 6).fill(0).map((_, index) => (
            <ArticleListItemSkeleton
              view={view}
              key={index}
              className={cls.card}
            />
          ))}
        </div>
      )}
    </div>
  );
});
