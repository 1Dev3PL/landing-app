import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "pages/main-page";
import {NotFoundPage} from "pages/not-found";
import { DeliveryAndPaymentPage } from "pages/delivery-and-payment-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/delivery-and-payment",
    element: <DeliveryAndPaymentPage />
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
