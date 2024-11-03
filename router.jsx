import { createBrowserRouter } from "react-router-dom";

import Categories from "./src/pages/Cateogries";
import Home from "./src/pages/Home";
import Makers from "./src/pages/Makers";
import Products from "./src/pages/Products";
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
        path: "/makers",
        element: <Makers />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

export default router;
