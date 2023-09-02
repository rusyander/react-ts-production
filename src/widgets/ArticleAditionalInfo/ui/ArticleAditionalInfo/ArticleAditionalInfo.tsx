import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleAditionalInfo.module.scss';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Texts } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit?: () => void;
}

export const ArticleAditionalInfo = memo((props: ArticleAditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props;

    const { t } = useTranslation('articleDetails');

    return (
        <VStack
            className={classNames(cls.articleAditionalInfo, {}, [className])}
            gap="16"
            max
        >
            <HStack max gap="8">
                <Avatar src={author?.avatar} size={32} />
                <Texts text={author?.username} bold />
                <Texts text={createdAt} />
            </HStack>
            <Button onClick={onEdit}>{t('Редактировать')}</Button>
            <Texts text={t('{{count}} просмотров', { count: views })} />
            {/* <Texts text={t('{{count}} просмотров', { count: 1 })} />
            <Texts text={t('{{count}} просмотров', { count: 2 })} />
            <Texts text={t('{{count}} просмотров', { count: 5 })} />
            <Texts text={t('{{count}} просмотров', { count: 10 })} /> */}
        </VStack>
    );
});
