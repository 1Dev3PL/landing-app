import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "pages/main-page";
import { NotFoundPage } from "pages/not-found";
import { Layout } from "pages/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
