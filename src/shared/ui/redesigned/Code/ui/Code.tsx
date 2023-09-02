import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Icon } from '../../Icon';
import CopyImage from '@/shared/assets/redesigned/copy-20-20.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const copyCode = useCallback(() => {
        console.log('sdsds');

        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.codeRedesigned, {}, [className])}>
            <Icon Svg={CopyImage} className={cls.copyBtn} onClick={copyCode} />
            <code>{text}</code>
        </pre>
    );
});
