import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './components/Layout.jsx'
import Homepage from "./pages/Homepage.jsx";
import Projecten from "./pages/Projecten.jsx";
import Skills from "./pages/Skills.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/projecten',
                element: <Projecten/>
            },
            {
                path: '/skills',
                element: <Skills/>

            }
        ]

    },
    {basename: "/portfolio"}
]);

function App() {

    return <RouterProvider router={router}/>
}

export default App
