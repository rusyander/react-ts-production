import { useJsonSettings } from '@/entities/User';
import ThemeProvider from './ThemeProvider';

export const WithTheme = (Component: React.ComponentType) => {
    const { theme: defaultTheme } = useJsonSettings();
    return (
        <ThemeProvider inititialTheme={defaultTheme}>
            <Component />
        </ThemeProvider>
    );
};
