import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Approved from "~/pages/approved";
import Communities from "~/pages/communities";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Lists from "~/pages/lists";
import Marking from "~/pages/marking";
import Messages from "~/pages/messages";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";
import Premium from "~/pages/premium";
import Profile from "~/pages/profile";



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
                path: 'messages',
                element: <Messages/>
            },
            {
                path: 'lists',
                element: <Lists/>
            },
            {
                path: 'marking',
                element: <Marking/>
            },
            {
                path: 'communities',
                element: <Communities/>
            },
            {
                path: 'premium',
                element: <Premium/>
            },
            {
                path: 'approved',
                element: <Approved/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
            
        ]
    }

])

export default routes