import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import ProductList from "../components/ProductList";
import Details from "../pages/Details";
import Wishlist from "../pages/wishList";
import Blogs from "../components/Blogs";



const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home>,
            loader: () => fetch('../categories.json'),
            children: [
                {
                    path: "/",
                    element: <ProductList></ProductList>,
                    loader: () => fetch('../products.json'),
                },
                {
                    path: "/category/:category",
                    element: <ProductList></ProductList>,
                    loader: () => fetch('../products.json'),
                },
            ],
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        },
        {
            path: "/products/:id",
            element: <Details></Details>,
            loader: () => fetch('../products.json'),
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
        },
        {
            path: "wishlist",
            element: <Wishlist></Wishlist>
        },
        {
            path: "/blog",
            element: <Blogs></Blogs>
        },
      ]
    },
  ]);

  export default routes;