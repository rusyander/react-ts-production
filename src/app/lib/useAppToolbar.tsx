import { AppRoute } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange/useRouteChange';
import { ScroolToolbar } from '@/widgets/ScroolToolbar';
import { ReactElement } from 'react';

export function useAppToolbar() {
    const appRoute = useRouteChange();
    // @ts-ignore
    const toolbarByAppRoute: Record<AppRoute, ReactElement> = {
        [AppRoute.ARTICLE_DETAILS]: <ScroolToolbar />,
        [AppRoute.ARTICLES]: <ScroolToolbar />,
        [AppRoute.ABOUT]: <h3>ABOUT</h3>,
        [AppRoute.MAIN]: <h3>MAIN</h3>,
    };
    return toolbarByAppRoute[appRoute];
}
