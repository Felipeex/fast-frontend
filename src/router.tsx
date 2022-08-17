/* libs*/
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

/* config */
import { RoutesAll } from "./constants/routesConfig";

/* components */
import { Header } from "./components/Header";
import { PrivateRoute } from "./components/PrivateRoute";
import Loading from "./components/Loading";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {RoutesAll.map(({ path, Component, isAuth }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<Loading />}>
                {isAuth ? (
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                ) : (
                  <Component />
                )}
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}
