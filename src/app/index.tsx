import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "pages/main-page";
import { DeliveryAndPaymentPage } from "pages/delivery-and-payment-page";
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
      {
        path: "/delivery",
        element: <DeliveryAndPaymentPage />
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
