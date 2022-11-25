import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SecondLayout from "../layouts/SecondLayout";
import BLogs from "../pages/Blogs/Blogs";
import Categories from "../pages/Categories/Categories";
import CategoryProducts from "../pages/Categories/CategoryCard/CategoryProducts/CategoryProducts";
import ProductDetails from "../pages/Categories/ProductDetails/ProductDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DisplayError from "../shared/DisplayError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
          fetch(
            `http://localhost:1000/categories/products?cat_id=${params.id}`
          ),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:1000/product/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <SecondLayout></SecondLayout>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
