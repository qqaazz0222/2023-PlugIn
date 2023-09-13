import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import "./Styles/Header.css";

const Header = () => {
    const location = useLocation();
    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    };
    return (
        <div id="header" className={isTop ? "" : "active"}>
            <div className="contentArea">
                <Link to="/" className="logo">
                    PlugInSMS
                </Link>
                <div className="nav">
                    <Link
                        to="/api"
                        className={
                            location.pathname === "/api"
                                ? "link active"
                                : "link"
                        }
                    >
                        API 목록
                    </Link>
                    <Link
                        to="/notice"
                        className={
                            location.pathname === "/notice"
                                ? "link active"
                                : "link"
                        }
                    >
                        소식
                    </Link>
                    <Link
                        to="/bookmark"
                        className={
                            location.pathname === "/bookmark"
                                ? "link active"
                                : "link"
                        }
                    >
                        북마크
                    </Link>
                </div>
                <div className="func">
                    <Link to="/signin">
                        <Button type={"btn btn-sm"} text={"로그인"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
