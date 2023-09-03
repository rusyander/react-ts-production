import { AppRoute, AppRouteByPathPattern } from '@/shared/const/router';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export function useRouteChange() {
    const location = useLocation();
    const [appRoute, setAppRoute] = useState<AppRoute>(AppRoute.MAIN);

    useEffect(() => {
        Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
            if (matchPath(pattern, location.pathname)) {
                setAppRoute(route);
            }
        });
    }, [location.pathname]);

    return appRoute;
}
