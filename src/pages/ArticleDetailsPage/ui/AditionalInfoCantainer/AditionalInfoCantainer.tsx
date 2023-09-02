import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AditionalInfoCantainer.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAditionalInfo } from '@/widgets/ArticleAditionalInfo';
import { getArticlesDetailsDataSelectors } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { getRouteArticle_edit } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';

interface AditionalInfoCantainerProps {
    className?: string;
}

export const AditionalInfoCantainer = memo(
    (props: AditionalInfoCantainerProps) => {
        const { className } = props;
        const article = useSelector(getArticlesDetailsDataSelectors);

        const navigate = useNavigate();

        const onEditArticle = useCallback(() => {
            navigate(getRouteArticle_edit(article?.id || ''));
        }, [article?.id, navigate]);

        if (!article) return null;

        return (
            <Card
                className={classNames(cls.aditionalInfoCantainer, {}, [
                    className,
                ])}
                padding="24"
                border="round"
            >
                <ArticleAditionalInfo
                    author={article.user}
                    createdAt={article?.createdAt || ''}
                    views={article?.views || 0}
                    onEdit={onEditArticle}
                />
            </Card>
        );
    },
);
