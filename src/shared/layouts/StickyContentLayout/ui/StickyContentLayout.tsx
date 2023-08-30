import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    left?: React.ReactElement;
    right?: React.ReactElement;
    content?: React.ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.stickyContentLayout, {}, [className])}>
            {right && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {left && <div className={cls.right}>{right}</div>}
        </div>
    );
});
