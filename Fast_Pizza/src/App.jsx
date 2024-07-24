import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./../Features/Cart/Cart";
import Menu, { loader as menuLoader } from "./../Features/Menu/Menu";
import Order from "./../Features/Order/Order";
import Home from "../ui/Home";

import AppLayout from "../ui/AppLayout";
import Error from "../ui/Error";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "/order", element: <Order /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
