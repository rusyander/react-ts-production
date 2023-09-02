import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code as CodeOld } from '@/shared/ui/Code/ui/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import { HStack } from '@/shared/ui/Stack';
import { Code } from '@/shared/ui/redesigned/Code';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;

        return (
            <HStack
                justify="center"
                max
                className={classNames('', {}, [className])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Code text={block?.code} />}
                    off={<CodeOld text={block?.code} />}
                />
            </HStack>
        );
    },
);
