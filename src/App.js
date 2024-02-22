import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./AppLayout";
import Form from "./pages/Form";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Form />,
        path: "/new",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
