import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState} from "react";

import "./App.css";
import HomePage from "./pages/HomePage";

import Order from "./pages/Order";
import DishPage from "./pages/DishPage";
import Header from "./components/Header";
function App() {
  const [cart, setCart] = useState([]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage newCart={cart} updateCart={(item) => setCart(item)} />,
    },
    { path: "/:dishid", element: <DishPage newCart={cart} /> },
    { path: "/order", element: <Order newCart={cart} /> },
  ]);

  return (
    <>
      <Header  />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
