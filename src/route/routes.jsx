import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATHS } from "./routesPaths";
import { Pages } from "../pages/Pages";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import { UseRefExample } from "../pages/UseRefExample";
import { Shop } from "../pages/Shop";
import { Lookbook } from "../pages/Lookbook";
import { Features } from "../pages/Features";
import { Home } from "../pages/Home";
import { Blog } from "../pages/Blog";
import { Cart } from "../pages/Cart";
import { Layout } from "../layout/Layout";

export const routes = createBrowserRouter([
  {
    path: ROUTER_PATHS.home,
    element: <Home />,
  },
  {
    path: ROUTER_PATHS.shop,
    element: <Shop />,
  },
  {
    path: ROUTER_PATHS.lookbook,
    element: <Lookbook />,
  },
  {
    path: ROUTER_PATHS.features,
    element: <Features />,
  },
  {
    path: ROUTER_PATHS.pages,
    element: <Pages />,
  },
  {
    path: ROUTER_PATHS.blog,
    element: <Blog />,
  },
  {
    path: ROUTER_PATHS.Product,
    element: <ProductDetail />,
  },
  {
    path: ROUTER_PATHS.cart,
    element: <Cart />,
  },
  {
    path: ROUTER_PATHS.home,
    element: <UseRefExample />,
  },
  // {
  //   path: ROUTER_PATHS.error,
  //       element: < {<h1> Такой страницы не существует</h1>}
  //     />,
  // },
]);
