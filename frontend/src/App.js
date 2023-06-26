import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Pizzas from "./pages/Pizzas";

const routerSettings = createBrowserRouter([
  { path: "/", element: <Layout />, children: [
    {path: "/pizzas", element: <Pizzas />}
  ] },
]);

function App() {
  return <RouterProvider router={routerSettings} />;
}

export default App;
