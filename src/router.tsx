/* libs*/
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

/* config */
import { RoutesAll } from "./config/routesConfig";

/* components */
import { Header } from "./components/Header";
import Loading from "./components/Loading";

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
