import { createBrowserRouter } from "react-router-dom";
import AuthApp from "./pages/AuthApp";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <AuthApp />,
  },
]);
