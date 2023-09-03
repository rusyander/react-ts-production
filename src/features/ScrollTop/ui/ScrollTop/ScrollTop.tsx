import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollTop.module.scss';
import ScrollIcon from '@/shared/assets/redesigned/scrollTop.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ScrollTopProps {
    className?: string;
}

export const ScrollTop = memo((props: ScrollTopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const topHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Icon
            Svg={ScrollIcon}
            size={32}
            className={classNames(cls.scrollTop, {}, [className])}
            clickable
            onClick={topHandler}
        />
    );
});
