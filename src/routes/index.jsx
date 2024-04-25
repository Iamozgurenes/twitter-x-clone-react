import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            
            {
                path: 'Explore',
                element: <Explore/>
            },
            {
                path: 'Notifications',
                element: <Notifications/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
            
        ]
    }

])

export default routes