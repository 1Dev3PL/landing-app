import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "pages/main-page";
import {NotFoundPage} from "pages/not-found";
import { AboutCompanyPage } from "pages/about-company-page";

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
    path: "/about-company",
    element: <AboutCompanyPage />
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
