import React from "react";
import SideBar from "../components/SideNav"
import { ToastContainer } from "react-toastify";
const Layout = (props: any) => {
    return (
        <React.Fragment>
            <ToastContainer />
            <div className="d-flex w-100">
                <SideBar></SideBar>
                <div className="main_body_content">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
