import { Suspense, useEffect } from 'react';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useSelector } from 'react-redux';
import { getUserInitedSelectors, initAuth } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';

export default function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const initedUser = useSelector(getUserInitedSelectors);

    useEffect(() => {
        dispatch(initAuth());
    }, [dispatch]);

    if (!initedUser) {
        return <PageLoader />;
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    {initedUser && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
