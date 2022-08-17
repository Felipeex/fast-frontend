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
    title: "Home",
    path: "/",
    Component: () => <Home />,
    isRouteVisible: true,
    isAuth: false,
    isEmailVerified: false,
  },
  {
    title: "Login",
    path: "/login",
    Component: () => <Auth />,
    isRouteVisible: false,
    isAuth: false,
    isEmailVerified: false,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    Component: () => <h1>Dashboard</h1>,
    isRouteVisible: true,
    isAuth: true,
    isEmailVerified: true,
  },
];
