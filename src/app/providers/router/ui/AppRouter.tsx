import { getUserAuthData } from 'entities/User';
import { Suspense, useMemo, memo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return isAuth;
      }
      return true;
    });
  }, [isAuth]);
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">
        <Routes>
          {routes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </div>
    </Suspense>
  );
};

export default memo(AppRouter);
