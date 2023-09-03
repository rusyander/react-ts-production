import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScroolToolbar.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { ScrollTop } from '@/features/ScrollTop';

interface ScroolToolbarProps {
    className?: string;
}

export const ScroolToolbar = memo((props: ScroolToolbarProps) => {
    const { className } = props;

    return (
        <VStack
            justify="center"
            align="center"
            className={classNames(cls.scroolToolbar, {}, [className])}
        >
            <ScrollTop />
        </VStack>
    );
});
