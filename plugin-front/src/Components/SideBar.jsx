import "./Styles/SideBar.css";
import Sample from "./Images/imgSample.png";

const SideBar = () => {
    const data = [
        { title: "그룹1", items: ["테스트1-1"] },
        { title: "그룹2", items: ["테스트2-1", "테스트2-2"] },
        { title: "그룹3", items: ["테스트3-1", "테스트3-2", "테스트3-3"] },
    ];
    return (
        <div id="sideBar">
            {data.map((group, idx) => (
                <div className="group">
                    <div className="title">{group.title}</div>
                    {group.items.map((item, idx) => (
                        <div className="item">
                            <div className="icon">
                                <img src={Sample} alt="" srcset="" />
                            </div>
                            <div className="text">{item}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SideBar;
