import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comments } from '../../model/types/comment';
import { VStack } from '@/shared/ui/Stack';
import { Texts } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

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
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames('', {}, [className])}
            data-testid={'CommentList'}
        >
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        key={comment.id}
                        comment={comment}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Texts text={t('Комментариев нет')} />}
                    off={<TextsOld text={t('Комментариев нет')} />}
                />
            )}
        </VStack>
    );
});
