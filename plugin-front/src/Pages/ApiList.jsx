import "./Styles/ApiList.css";
import Sample from "./Images/imgSample.png";

const ApiList = () => {
    return (
        <div id="apiList">
            <div className="sideWrap">
                <div id="sideBar">
                    <div className="group">
                        <div className="title">테스트</div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="title">테스트</div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="title">테스트</div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">테스트</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contentWrap"></div>
        </div>
    );
};

export default ApiList;
