import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import SecondLayout from "../layouts/SecondLayout";
import BLogs from "../pages/Blogs/Blogs";
import Categories from "../pages/Categories/Categories";
import CategoryProducts from "../pages/Categories/CategoryCard/CategoryProducts/CategoryProducts";
import ProductDetails from "../pages/Categories/ProductDetails/ProductDetails";
import MyWishlist from "../pages/Dashboard/MyWishlist/MyWishlist";
import Payment from "../pages/Dashboard/MyWishlist/Payment/Payment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DisplayError from "../shared/DisplayError";
import PrivateRoute from "./PrivateRoute";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard/wishlist",
        element: <MyWishlist></MyWishlist>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: async ({ params }) =>
          fetch(`http://localhost:1000/booking/${params.id}`),
      },
    ],
  },
]);
