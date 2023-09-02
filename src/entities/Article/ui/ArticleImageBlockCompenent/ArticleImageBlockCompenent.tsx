import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockCompenent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { Texts } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

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
                className={classNames(cls.articleImageBlockCompenent, {}, [
                    className,
                ])}
            >
                <img src={block.src} alt={block.title} className={cls.image} />
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Texts
                                title={block.title}
                                align="center"
                                className={cls.title}
                            />
                        }
                        off={
                            <TextsOld
                                title={block.title}
                                align="center"
                                className={cls.title}
                            />
                        }
                    />
                )}
            </div>
        );
    },
);
