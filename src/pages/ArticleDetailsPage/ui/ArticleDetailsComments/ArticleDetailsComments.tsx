import { CommentList, Comments } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import {
    getArticleCommentsIsLoading,
    getArticleCommentsError,
    getArticleCommentsData,
} from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
// import { getArticleComments } from '../../model/slice/articleDetailCommentsSlice';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ToggleFeatures } from '@/shared/lib/features';
import { Texts } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation('articleDetails');
        const dispatch = useAppDispatch();
        const [commentsData, setCommentsData] = useState<Comments[]>([]);

        const isLoading = useSelector(getArticleCommentsIsLoading);
        const error = useSelector(getArticleCommentsError);

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id)).then((res: any) => {
                setCommentsData(res?.payload);
            });
        });
        // const comments = useSelector(getArticleComments.selectAll);
        const comments = useSelector(getArticleCommentsData);

        return (
            <VStack max className={classNames('', {}, [className])}>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Texts size="l" title={t('Коментарии')} />}
                    off={<TextsOld size="sizeL" title={t('Коментарии')} />}
                />

                <AddCommentForm onSendComments={onSendComment} />
                {commentsData && (
                    <CommentList
                        comments={commentsData}
                        isLoading={isLoading}
                    />
                )}
            </VStack>
        );
    },
);
