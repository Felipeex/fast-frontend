/* libs*/
import React, { Suspense } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

/* components */
import Loading from "./components/Loading";

/* pages */
const Home = React.lazy(() =>
  import("./pages/Home").then(({ Home }) => ({ default: Home }))
);

const Auth = React.lazy(() =>
  import("./pages/Auth").then(({ Auth }) => ({ default: Auth }))
);

type AppRoute = RouteProps & { isAuth: boolean };

const RoutesAll: AppRoute[] = [
  {
    path: "/",
    Component: () => <Home />,
    isAuth: false,
  },
  {
    path: "/login",
    Component: () => <Auth />,
    isAuth: false,
  },
];

export function Router() {
  return (
    <Routes>
      {RoutesAll.map(({ path, Component }) => (
        <Route
          path={path}
          key={path}
          element={
            <Suspense fallback={<Loading />}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
