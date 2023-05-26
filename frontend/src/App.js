import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routerSettings = createBrowserRouter([{ path: "/", element: null }]);

function App() {
  return <RouterProvider router={routerSettings} />
}

export default App;