import { DropdownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
};
