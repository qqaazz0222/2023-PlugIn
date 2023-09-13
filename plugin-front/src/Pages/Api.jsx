import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getApiList } from "../Api/Data";
import ApiFilter from "../Components/ApiFilter";
import ApiGrid from "../Components/ApiGrid";
import ApiSearch from "../Components/ApiSearch";
import SideBar from "../Components/SideBar";
import "./Styles/Api.css";

const Api = () => {
    const dispatch = useDispatch();
    const [viewType, setViewType] = useState("card");
    const getData = async () => {
        const data = await getApiList();
        console.log(data);
        dispatch({ type: "SET_LOADING_END" });
    };
    useEffect(() => {
        dispatch({ type: "SET_LOADING_START" });
        getData();
    }, []);
    const data = [
        {
            name: "API이름1",
            desc: "API설명입니다.",
            pKO: "8.6",
            pUS: "0.0065",
            like: "999",
            grade: "10",
        },
        {
            name: "API이름2",
            desc: "API설명입니다.",
            pKO: "8.6",
            pUS: "0.0065",
            like: "999",
            grade: "10",
        },
        {
            name: "API이름3",
            desc: "API설명입니다.",
            pKO: "8.6",
            pUS: "0.0065",
            like: "999",
            grade: "10",
        },
        {
            name: "API이름4",
            desc: "API설명입니다.",
            pKO: "8.6",
            pUS: "0.0065",
            like: "999",
            grade: "10",
        },
        {
            name: "API이름5",
            desc: "API설명입니다.",
            pKO: "8.6",
            pUS: "0.0065",
            like: "999",
            grade: "10",
        },
        {
            name: "API이름6",
            desc: "API설명입니다.",
            pKO: "8.6",
            pUS: "0.0065",
            like: "999",
        },
        {
            name: "API이름7",
            desc: "API설명입니다.",
            pKO: "8.6",
            pUS: "0.0065",
            like: "999",
        },
    ];
    return (
        <div id="api">
            <div className="sideWrap">
                <SideBar />
            </div>
            <div className="contentWrap">
                <ApiSearch />
                <ApiFilter type={viewType} setType={setViewType} />
                <ApiGrid type={viewType} data={data} />
            </div>
        </div>
    );
};

export default Api;
