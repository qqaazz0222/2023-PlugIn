import { useEffect, useState } from "react";
import Button from "./Button";
import "./Styles/Header.css";

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
                <div className="logo">PlugInSMS</div>
                <div className="nav">
                    <div className="link">API 목록</div>
                    <div className="link">소식</div>
                    <div className="link">북마크</div>
                </div>
                <div className="func">
                    <Button type={"btn btn-sm"} text={"로그인"} />
                </div>
            </div>
        </div>
    );
};

export default Header;
