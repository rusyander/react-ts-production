import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size?: number;
}

interface NoClickIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NoClickIconProps | ClickIconProps;

export const Icon = memo((props: IconProps) => {
    const { className, Svg, size = 32, clickable, ...other } = props;
    const svg = (
        <Svg
            width={size}
            height={size}
            className={classNames(cls.icon, {}, [className])}
            {...other}
        />
    );

    if (clickable) {
        return (
            <button
                onClick={props.onClick}
                type="button"
                className={cls.button}
                style={{ width: size, height: size }}
            >
                {svg}
            </button>
        );
    }

    return svg;
});
