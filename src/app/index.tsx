import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "../pages/main-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
]);

export const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}