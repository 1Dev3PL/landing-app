import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "pages/main-page";
import {NotFoundPage} from "pages/not-found";
import { ProductionPage } from "pages/production-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: "/production",
    element: <ProductionPage />
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
