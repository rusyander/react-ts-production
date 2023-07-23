import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.DARK;
        break;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.DARK,
    toggleTheme,
  };
}
