import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { Texts } from '@/shared/ui/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleTextBlockComponent, {}, [className])}
      >
        {block?.title && (
          <Texts size="sizeL" title={block?.title} className={cls.title} />
        )}

        {block?.paragraphs?.map((paragraph, idx) => (
          <Texts key={idx} title={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  }
);
