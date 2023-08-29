import { memo, type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button as ButtonOld } from '@/shared/ui/Button/ui/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(
    ({ className, short }: LanguageSwitcherProps) => {
        const { t, i18n } = useTranslation();

        const toggle = () => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Button
                        variant="clear"
                        onClick={toggle}
                        className={classNames('', {}, [className])}
                    >
                        {t(short ? 'Короткий Язык' : 'Язык')}
                    </Button>
                }
                off={
                    <ButtonOld
                        theme="clear"
                        onClick={toggle}
                        className={classNames('', {}, [className])}
                    >
                        {t(short ? 'Короткий Язык' : 'Язык')}
                    </ButtonOld>
                }
            />
        );

        // (
        //   <Button
        //     theme="clear"
        //     onClick={toggle}
        //     className={classNames('', {}, [className])}
        //   >
        //     {t(short ? 'Короткий Язык' : 'Язык')}
        //   </Button>
        // );
    },
);
