import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import ProductList from "../components/ProductList";

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
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);

  export default routes;