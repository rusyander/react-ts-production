import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockCompenent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { Texts } from 'shared/ui/Text';

interface ArticleImageBlockCompenentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockCompenent = memo(
  (props: ArticleImageBlockCompenentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleImageBlockCompenent, {}, [className])}
      >
        <img src={block.src} alt={block.title} className={cls.image} />
        {block.title && (
          <Texts title={block.title} align="center" className={cls.title} />
        )}
      </div>
    );
  }
);
