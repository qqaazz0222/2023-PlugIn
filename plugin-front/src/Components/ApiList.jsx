import "./Styles/ApiList.css";
import Sample from "./Images/imgSample.png";

const ApiList = ({ title, data }) => {
    return (
        <div id="apiList">
            <div className="title">{title}</div>
            <div className="content">
                {data.col1 ? (
                    <div className="categoryWrap">
                        <div className="title" href="">
                            {data.col1.title}
                            <span className="amount">{data.col1.amount}</span>
                        </div>
                        <div className="itemList">
                            {data.col1.data.map((item, idx) => (
                                <ApiItem
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {data.col2 ? (
                    <div className="categoryWrap">
                        <div className="title" href="">
                            {data.col2.title}
                            <span className="amount">{data.col2.amount}</span>
                        </div>
                        <div className="itemList">
                            {data.col2.data.map((item, idx) => (
                                <ApiItem
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {data.col3 ? (
                    <div className="categoryWrap">
                        <div className="title" href="">
                            {data.col3.title}{" "}
                            <span className="amount">{data.col3.amount}</span>
                        </div>
                        <div className="itemList">
                            {data.col3.data.map((item, idx) => (
                                <ApiItem
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

const ApiItem = ({ img, title, desc }) => {
    return (
        <div className="item">
            <div className="imgWrap">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="infoWrap">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
};

export default ApiList;
