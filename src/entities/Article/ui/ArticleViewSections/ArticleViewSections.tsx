import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSections.module.scss';
import IconsBig from '../../../../shared/assets/icons/big.svg';
import IconsSmall from '../../../../shared/assets/icons/small.svg';
import { Button } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

interface ArticleViewSectionsProps {
  className?: string;
  view: 'SMALL' | 'BIG';
  onViewClick?: (view: 'SMALL' | 'BIG') => void;
}

const viewTypes = [
  {
    view: 'SMALL',
    icon: IconsSmall,
  },
  {
    view: 'BIG',
    icon: IconsBig,
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
    <div className={classNames(cls.articleViewSections, {}, [className])}>
      {viewTypes.map((item) => (
        <Button
          onClick={onClick(item.view as 'SMALL' | 'BIG')}
          theme="clear"
          key={item.view}
          className={cls.buttons}
        >
          <Icon
            Svg={item.icon}
            className={classNames(cls.button, {
              [cls.isSelected]: view !== item.view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
