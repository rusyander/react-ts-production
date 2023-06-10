import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockCompenent.module.scss';

interface ArticleImageBlockCompenentProps {
  className?: string;
}

export const ArticleImageBlockCompenent = memo(
  (props: ArticleImageBlockCompenentProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleImageBlockCompenent, {}, [className])}
      ></div>
    );
  }
);
