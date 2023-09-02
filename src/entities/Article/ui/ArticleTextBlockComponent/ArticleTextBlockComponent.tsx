import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Texts } from '@/shared/ui/redesigned/Text';

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
                className={classNames(cls.articleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block?.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Texts
                                size="l"
                                title={block?.title}
                                className={cls.title}
                                bold
                            />
                        }
                        off={
                            <TextsOld
                                size="sizeL"
                                title={block?.title}
                                className={cls.title}
                            />
                        }
                    />
                )}

                {block?.paragraphs?.map((paragraph, idx) => (
                    <ToggleFeatures
                        key={idx}
                        feature="isAppRedesigned"
                        on={
                            <Texts
                                title={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        off={
                            <TextsOld
                                title={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
