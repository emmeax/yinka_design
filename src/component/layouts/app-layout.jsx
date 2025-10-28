import GetInTouch from "@/component/GetInTouch";
import Navbar from "@/component/Navbar";
import { Outlet } from "react-router";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <GetInTouch />
        </>
    );
};

export default AppLayout;
