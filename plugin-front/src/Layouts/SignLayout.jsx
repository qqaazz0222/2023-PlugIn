import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "./../Images/logo64.png";
import "./Styles/SignLayout.css";

const SignLayout = () => {
    const location = useLocation();
    return (
        <>
            <div id="signLayout">
                <div id="headerWrap">
                    <div className="logo">
                        <img src={Logo} alt="" srcset="" />
                    </div>
                    <div className="siteName">PlugInSMS</div>
                    <div className="pageName">
                        {location.pathname === "/signin"
                            ? "로그인"
                            : "회원가입"}
                    </div>
                </div>
                <div id="content">
                    <Outlet />
                </div>
                <div className="footerWrap">
                    {location.pathname === "/signin" ? (
                        <>
                            <p>비밀번호를 잊어버렸어요</p>
                            <p>
                                아직 회원이 아니신가요?{" "}
                                <Link to={"/signup"}>회원가입</Link>
                            </p>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
};

export default SignLayout;
