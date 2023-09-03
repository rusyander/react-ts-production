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
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div
                    id="app"
                    className={classNames('app_redesigned', {}, [theme])}
                >
                    <Suspense fallback={''}>
                        <MainLayout
                            content={<AppRouter />}
                            header={<Navbar />}
                            sidebar={<Sidebar />}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback={''}>
                        <Navbar />

                        <div className="content-page">
                            <Sidebar />
                            {initedUser && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
}
