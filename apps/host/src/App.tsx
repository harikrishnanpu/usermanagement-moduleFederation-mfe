import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";

const AuthApp = React.lazy(() => import("auth/AuthApp"));
const ProfileApp = React.lazy(() => import("profile/ProfileApp"));

function Layout() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>
      <nav style={{ marginBottom: "16px" }}>
        <Link to="/auth/login" style={{ marginRight: "10px" }}>
          Login
        </Link>
        <Link to="/auth/signup" style={{ marginRight: "10px" }}>
          Signup
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" replace />,
      },
      {
        path: "auth/*",
        element: (
          <Suspense fallback={<p>Loading auth...</p>}>
            <AuthApp />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<p>Loading profile...</p>}>
            <ProfileApp />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/auth/login" replace />,
      },
    ],
  },
]);
