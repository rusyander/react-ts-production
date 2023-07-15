import { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextSize = 'sizeS' | 'sizeM' | 'sizeL';
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: 'primary' | 'error' | 'inverted';
  align?: 'left' | 'center' | 'right';
  size?: TextSize;

  'data-testid'?: string;
}
type HeadersTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeadersTagType> = {
  sizeS: 'h3',
  sizeM: 'h2',
  sizeL: 'h1',
};

export const Text = memo(
  ({
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
    size = 'sizeM',
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];
    const mods: Mods = {
      [cls[theme]]: true,
      [cls[align]]: true,
      [cls[size]]: true,
    };
    return (
      <div className={classNames(cls.Text, mods, [className])}>
        {title && (
          <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
            {text}
          </p>
        )}
      </div>
    );
  }
);
