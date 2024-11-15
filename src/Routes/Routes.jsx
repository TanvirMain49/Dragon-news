import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/news",
      element: <div>News Page!</div>,
    },
    {
      path: "/auth",
      element: <div>Auth Page!</div>,
    },
    {
      path: "*",
      element: <div>Error Page!</div>,
    },
  ]);

  export default router;