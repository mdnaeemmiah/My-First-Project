import { Outlet } from "react-router-dom";
import Navbar from "../Componeets/Navbar";

import Footer from "../Componeets/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
            <Navbar></Navbar>
            </div>
          <div className="min-h-[calc(100vh-116px)]">
          <Outlet></Outlet>
          </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;