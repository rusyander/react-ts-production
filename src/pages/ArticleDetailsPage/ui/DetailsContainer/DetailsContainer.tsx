import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DetailsContainer.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    return (
        <Card
            className={classNames(cls.detailsContainer, {}, [className])}
            padding="24"
            max
            fullHeight
        >
            <ArticleDetails id={id} />
        </Card>
    );
});
