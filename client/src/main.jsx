import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AuthProvider}  from './context/auth.context.jsx'
import ProtectedRoute from './components/ProtectedRoute';

import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import AdsPage from "./pages/AdsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import "./index.css";
import Login from "./pages/LoginPage.jsx";
import Signup from "./pages/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/productpage",
        element: <ProductsPage />,
      },
      {
        path: "/adspage",
        element: <AdsPage />,
      },
      {
        path: "/aboutpage",
        element: <AboutPage />,
      },
      {
        path: "/cartpage",
        element: (
         
            <ProtectedRoute>
          <CartPage />
          </ProtectedRoute>
        
        ),
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
