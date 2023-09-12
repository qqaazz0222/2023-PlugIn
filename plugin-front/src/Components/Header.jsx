import { useEffect, useState } from "react";
import Button from "./Button";
import "./Styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
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
                    <Link to="/api" className="link">
                        API 목록
                    </Link>
                    <Link to="/notice" className="link">
                        소식
                    </Link>
                    <Link to="/bookmark" className="link">
                        북마크
                    </Link>
                </div>
                <div className="func">
                    <Button type={"btn btn-sm"} text={"로그인"} />
                </div>
            </div>
        </div>
    );
};

export default Header;
