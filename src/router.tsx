import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";

const Home = React.lazy(() =>
  import("./pages/Home").then(({ Home }) => ({ default: Home }))
);
const Auth = React.lazy(() =>
  import("./pages/Auth").then(({ Auth }) => ({ default: Auth }))
);

const RoutesAll = [
  {
    path: "/",
    Component: () => <Home />,
  },
  {
    path: "/login",
    Component: () => <Auth />,
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
