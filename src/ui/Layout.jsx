import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from './footer/Footer';

function Layout() {
    return <>
        <Navbar />
        <main>
            <Outlet /> 
        </main>
        <Footer />
    </>
}

export default Layout;