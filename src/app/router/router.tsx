import { createBrowserRouter } from "react-router-dom";
import { Login } from "@/pages/login";
import { App } from "../App";

export const router = createBrowserRouter([
  { path: "/login", element: <Login></Login>, index: true },
  {
    path: "/",
    element: <App></App>,
    children: [{ path: "profile", element: <div>Profile</div> }],
  },
]);
