import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";

export default function Layout() {
    return (
        <div className="bg-primary text-white w-full h-full">
            <Navbar />
            <Outlet />
        </div >
    );
};