import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './MainLayout.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MainLayoutProps {
    className?: string;
    header: React.ReactElement;
    content: React.ReactElement;
    sidebar: React.ReactElement;
    toolbar?: React.ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, content, header, sidebar, toolbar } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.mainLayout, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});
