import React from "react";
import { Outlet } from "react-router-dom";
import "./Styles/RootLayout.css";
import Header from "../Components/Header";

const RootLayout = () => {
    return (
        <>
            <div id="rootLayout">
                <div id="headerWrap">
                    <Header />
                </div>
                <div id="content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default RootLayout;
