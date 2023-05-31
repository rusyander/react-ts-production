import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: 'primary' | 'error';
}

export const Text: FC<TextProps> = memo(
  ({ className, title, text, theme = 'primary' }: TextProps) => {
    return (
      <div
        className={classNames(cls.Text, { [cls[theme]]: true }, [className])}
      >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);
