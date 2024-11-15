import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
          path:'/',
          element:<Navigate to={"/category/01"}></Navigate>
        },
        {
          path:'category/:id',
          element:<CategoryNews></CategoryNews>,
          loader: ({ params })=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
      ]
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