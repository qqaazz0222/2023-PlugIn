import "./Styles/ApiDetail.css";
import { API_IdInput, API_PwInput, API_TypeInput, API_ToInput, API_FromInput, API_MessageInput } from "../Components/Input";
import Button from "../Components/Button";
import { sendBulkSMS } from "../Api/Send";
import { useState } from "react";

const ApiDetail = () => {
    const [data, setData] = useState({})


    const send = () => {
        sendBulkSMS(data)
    }

    return (
        <div id="apiDetail">
            <div className="titleWrap">API 이름</div>
            <div className="tagsWrap"></div>
            <div className="funcWrap"></div>
            <div className="imgWrap"></div>
            <div className="textWrap">
                <API_IdInput setdata={setData} />
                <API_PwInput setdata={setData} />
                <API_TypeInput setdata={setData} />
                <API_ToInput setdata={setData} />
                <API_FromInput setdata={setData} />
                <API_MessageInput setdata={setData} />
            </div>
            <div className="api_btn">
                <Button type={"btn"} text={"취소"} />
                <Button onclick={send} type={"btn"} text={"전송"} />
            </div>

        </div>
    );
};

export default ApiDetail;
