import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "pages/main-page";
import {NotFoundPage} from "pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
