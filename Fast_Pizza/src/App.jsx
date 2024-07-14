import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./../Features/Cart/Cart";
import Menu from "./../Features/Menu/Menu";
import Home from "./../ui/Home";

import AppLayout from "../ui/AppLayout";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        { path: "/menu", element: <Menu /> },
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
