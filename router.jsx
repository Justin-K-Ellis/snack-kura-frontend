import { createBrowserRouter } from "react-router-dom";

import Categories from "./src/pages/Cateogries";
import Home from "./src/pages/Home";
import Makers from "./src/pages/Makers";
import MakerInfo from "./src/pages/MakerInfo";
import Products from "./src/pages/Products";
import NewProduct from "./src/pages/NewProduct";
import Root from "./src/layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "products/new",
        element: <NewProduct />,
      },
      {
        path: "makers",
        element: <Makers />,
      },
      {
        path: "makers/:makerId",
        element: <MakerInfo />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

export default router;
