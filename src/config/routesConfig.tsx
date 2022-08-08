import React from "react";

/* pages */
const Home = React.lazy(() =>
  import("../pages/Home").then(({ Home }) => ({ default: Home }))
);

const Auth = React.lazy(() =>
  import("../pages/Auth").then(({ Auth }) => ({ default: Auth }))
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
