import "./Styles/ApiGrid.css";
import KO from "./Svg/flags/kr.svg";
import US from "./Svg/flags/us.svg";

const ApiGrid = ({ type, data }) => {
    return (
        <div id="apiGrid" className={type}>
            {data.map((item, idx) => (
                <div className="apiItem">
                    <div className="thumb"></div>
                    <div className="infoWrap">
                        <div className="titleWrap">
                            <div className="name">{item.name}</div>
                            <div className="like">
                                <svg viewBox="0 0 24 24" width="12" height="12">
                                    <path d="M22.773,7.721A4.994,4.994,0,0,0,19,6H15.011l.336-2.041A3.037,3.037,0,0,0,9.626,2.122L8,5.417V21H18.3a5.024,5.024,0,0,0,4.951-4.3l.705-5A4.994,4.994,0,0,0,22.773,7.721Z" />
                                    <path d="M0,11v5a5.006,5.006,0,0,0,5,5H6V6H5A5.006,5.006,0,0,0,0,11Z" />
                                </svg>
                                {item.like}
                            </div>
                        </div>
                        <div className="desc">{item.desc}</div>
                        <div className="price pKO">
                            <img src={KO} alt="" />
                            <strong>{item.pKO}</strong>원/건
                        </div>
                        <div className="price pUS">
                            <img src={US} alt="" />
                            <strong>{item.pUS}</strong>$/건
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ApiGrid;
