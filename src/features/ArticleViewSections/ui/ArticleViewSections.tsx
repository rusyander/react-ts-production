import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSections.module.scss';
import IconsBig from '../../../shared/assets/icons/big.svg';
import IconsSmall from '../../../shared/assets/icons/small.svg';
import { Icon as IconOld } from '@/shared/ui/Icon';
import { Button as ButtonOld } from '@/shared/ui/Button';

import ListIcons from '../../../shared/assets/redesigned/burger.svg';
import TileIcons from '../../../shared/assets/redesigned/tile.svg';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/Stack';

interface ArticleViewSectionsProps {
    className?: string;
    view: 'SMALL' | 'BIG';
    onViewClick?: (view: 'SMALL' | 'BIG') => void;
}

const viewTypes = [
    {
        view: 'SMALL',
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TileIcons,
            off: () => IconsSmall,
        }),
        //  IconsSmall,
    },
    {
        view: 'BIG',
        // icon: IconsBig,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcons,
            off: () => IconsBig,
        }),
    },
];

export const ArticleViewSections = memo((props: ArticleViewSectionsProps) => {
    const {
        className,
        view,
        onViewClick = () => {
            return null;
        },
    } = props;

    const onClick = (newView: 'SMALL' | 'BIG') => {
        return () => {
            onViewClick(newView);
        };
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card className={cls.redesigned} border="round">
                    <HStack max gap="8">
                        {viewTypes.map((item) => (
                            <Icon
                                key={item.view}
                                onClick={onClick(item.view as 'SMALL' | 'BIG')}
                                Svg={item.icon}
                                className={classNames('', {
                                    [cls.isSelected]: view === item.view,
                                    [cls.notSelected]: view !== item.view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <>
                    {viewTypes.map((item) => (
                        <ButtonOld
                            onClick={onClick(item.view as 'SMALL' | 'BIG')}
                            theme="clear"
                            key={item.view}
                            className={cls.buttons}
                        >
                            <IconOld
                                Svg={item.icon}
                                className={classNames(cls.button, {
                                    [cls.isSelected]: view !== item.view,
                                })}
                            />
                        </ButtonOld>
                    ))}
                </>
            }
        />
    );
    // (
    //     <div className={classNames(cls.articleViewSections, {}, [className])}>
    //         {viewTypes.map((item) => (
    //             <ButtonOld
    //                 onClick={onClick(item.view as 'SMALL' | 'BIG')}
    //                 theme="clear"
    //                 key={item.view}
    //                 className={cls.buttons}
    //             >
    //                 <IconOld
    //                     Svg={item.icon}
    //                     className={classNames(cls.button, {
    //                         [cls.isSelected]: view !== item.view,
    //                     })}
    //                 />
    //             </ButtonOld>
    //         ))}
    //     </div>
    // );
});
