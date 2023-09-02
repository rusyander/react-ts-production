import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextSize = 's' | 'm' | 'l';
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: 'primary' | 'error' | 'accent';
    align?: 'left' | 'center' | 'right';
    size?: TextSize;
    bold?: boolean;

    'data-testid'?: string;
}
type HeadersTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeadersTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const Text = memo(
    ({
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold = false,
        'data-testid': dataTestId = 'Text',
    }: TextProps) => {
        const HeaderTag = mapSizeToHeaderTag[size];

        return (
            <div
                className={classNames(cls.Text, { [cls.bold]: bold }, [
                    className,
                    cls[variant],
                    cls[align],
                    cls[size],
                ])}
            >
                {title && (
                    <HeaderTag
                        data-testid={`${dataTestId}.Header`}
                        className={cls.title}
                    >
                        {title}
                    </HeaderTag>
                )}
                {text && (
                    <p
                        data-testid={`${dataTestId}.Paragraph`}
                        className={cls.text}
                    >
                        {text}
                    </p>
                )}
            </div>
        );
    },
);
