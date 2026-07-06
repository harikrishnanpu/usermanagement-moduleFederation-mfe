import { createBrowserRouter } from "react-router-dom";
import ProfileApp from "./pages/ProfileApp";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <ProfileApp />,
  },
]);
