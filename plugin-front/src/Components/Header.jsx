import "./Styles/Header.css";

const Header = () => {
    return (
        <div id="header">
            <div className="contentArea">
                <div className="logo">PlugInSMS</div>
                <div className="nav">
                    <div className="link">API 목록</div>
                    <div className="link">소식</div>
                    <div className="link">북마크</div>
                </div>
                <div className="func">
                    <button className="btn-sm">로그인</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
