/* libs*/
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

/* components */
import Loading from "./components/Loading";

/* pages */
const Home = React.lazy(() =>
  import("./pages/Home").then(({ Home }) => ({ default: Home }))
);

const Auth = React.lazy(() =>
  import("./pages/Auth").then(({ Auth }) => ({ default: Auth }))
);

export const RoutesAll = [
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
  {
    path: "/dashboard",
    Component: () => <h1>Dashboard</h1>,
    isAuth: true,
    isEmailVerified: true,
  },
];

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
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
      </Route>
    </Routes>
  );
}
