import { memo, useState } from 'react';
import cls from './StarRating.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIconOld from '@/shared/assets/icons/star.svg';
import { Icon as IconOld } from '../../Icon';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';
import StarIconNew from '@/shared/assets/redesigned/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStarts?: number;
}

const start = [1, 2, 3, 4, 5];

/**
 * @deprecated
 */

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, selectedStarts = 0, size = 30 } = props;
    const [currentStartsCount, setCurrentStartsCount] =
        useState(selectedStarts);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStarts));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            setIsSelected(true);
            setCurrentStartsCount(starsCount);
            onSelect?.(starsCount);
        }
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.starRatingRedesigned,
                    off: () => cls.starRating,
                }),
                {},
                [className],
            )}
        >
            {start.map((starNumber) => {
                const commonProps = {
                    width: size,
                    height: size,
                    className: classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [
                            currentStartsCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    ),
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStartsCount >= starNumber,
                };
                return (
                    <ToggleFeatures
                        key={starNumber}
                        feature="isAppRedesigned"
                        on={
                            <Icon
                                {...commonProps}
                                Svg={StarIconNew}
                                // className={classNames(
                                //     cls.starIcon,
                                //     { [cls.selected]: isSelected },
                                //     [
                                //         currentStartsCount >= starNumber
                                //             ? cls.hovered
                                //             : cls.normal,
                                //     ],
                                // )}
                            />
                        }
                        off={
                            <IconOld
                                {...commonProps}
                                Svg={StarIconOld}
                                // className={classNames(
                                //     cls.starIcon,
                                //     { [cls.selected]: isSelected },
                                //     [
                                //         currentStartsCount >= starNumber
                                //             ? cls.hovered
                                //             : cls.normal,
                                //     ],
                                // )}
                            />
                        }
                    />
                );

                // (
                //     <Icon
                //         key={starNumber}
                //         width={size}
                //         height={size}
                //         Svg={StarIcon}
                //         className={classNames(
                //             cls.starIcon,
                //             { [cls.selected]: isSelected },
                //             [
                //                 currentStartsCount >= starNumber
                //                     ? cls.hovered
                //                     : cls.normal,
                //             ],
                //         )}
                //         onMouseLeave={onLeave}
                //         onMouseEnter={onHover(starNumber)}
                //         onClick={onClick(starNumber)}
                //         data-testid={`StarRating.${starNumber}`}
                //         data-selected={currentStartsCount >= starNumber}
                //     />
                // );
            })}
        </div>
    );
});
