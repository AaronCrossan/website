import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';

import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Layout from './ui/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
]);

function App() {
    
    return <>
        <title>Aaron Crossan</title>
        <RouterProvider router={router} />
    </>
}

export default App;