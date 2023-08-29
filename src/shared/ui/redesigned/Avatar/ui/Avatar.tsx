import { CSSProperties, memo, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import NotLoadUserImage from '../../../../assets/icons/notLoadUserImage.svg';
// import { Icon } from '../../Icon';
import { AppImage } from '@/shared/ui/AppImage';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = memo(
    ({
        className,
        src,
        size = 100,
        alt = 'Avatar',
        fallbackInverted,
    }: AvatarProps) => {
        const styles = useMemo<CSSProperties>(() => {
            return {
                width: size,
                height: size,
            };
        }, [size]);
        const mods: Mods = {};
        const errorFallback = <Icon width={size} Svg={NotLoadUserImage} />;
        const fallback = <Skeleton width={size} height={size} border="50%" />;

        return (
            <AppImage
                fallback={fallback}
                errorFallback={errorFallback}
                style={styles}
                src={src}
                alt={alt}
                className={classNames(cls.Avatar, mods, [className])}
            />
        );
    },
);
