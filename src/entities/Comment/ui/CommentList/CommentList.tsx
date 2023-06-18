import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { Texts } from 'shared/ui/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comments } from '../../model/types/comment';
import { Loader } from 'shared/ui/Loader/Loader';

interface CommentListProps {
  className?: string;
  comments?: Comments[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Texts text={t('Комментариев нет')} />
      )}
    </div>
  );
});
