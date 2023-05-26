import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";

const routerSettings = createBrowserRouter([
  { path: "/", element: <Layout /> },
]);

function App() {
  return <RouterProvider router={routerSettings} />;
}

export default App;
