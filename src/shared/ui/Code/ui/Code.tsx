import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from '../../Button/ui/Button';
import { Icon } from '../../Icon';
import CopyImage from '@/shared/assets/icons/copy.svg';

interface CodeProps {
    className?: string;
    text: string;
}
/**
 * @deprecated
 */

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const copyCode = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button onClick={copyCode} className={cls.copyBtn} theme="clear">
                <Icon Svg={CopyImage} className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
