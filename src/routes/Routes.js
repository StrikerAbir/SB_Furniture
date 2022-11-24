import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import BLogs from "../pages/Blogs/Blogs";
import Categories from "../pages/Categories/Categories";
import CategoryProducts from "../pages/Categories/CategoryCard/CategoryProducts/CategoryProducts";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <BLogs></BLogs>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/categories/products/:id",
        element: <CategoryProducts></CategoryProducts>,
        loader: async ({ params }) =>
          fetch(`http://localhost:1000/categories/products?cat_id=${params.id}`),
      },
    ],
  },
]);
