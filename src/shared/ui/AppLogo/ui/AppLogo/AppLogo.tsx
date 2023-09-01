import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AppLogo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppImage from '../../../../assets/redesigned/app-image.svg';
import { HStack } from '@/shared/ui/Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;
    const { t } = useTranslation();

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <AppImage
                width={size}
                height={size}
                color="black"
                className={cls.appLogo}
            />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});
