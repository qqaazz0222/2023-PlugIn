import ApiList from "../Components/ApiList";
import Banner from "../Components/Banner";
import Promotion from "../Components/Promotion";
import Slider from "../Components/Slider";
import {
    SlideData,
    TopApiData,
    BannerData,
    NewApiData,
    TestApiData,
} from "./Data/MainData";

import "./Styles/Main.css";

const Main = () => {
    return (
        <div id="main">
            <Promotion
                mainText={"SMS 발송의 첫걸음"}
                subTexts={[
                    "새로운 분야에서 첫발을 내디딜때 누구나 막연하기 두렵죠",
                    "358개의 영상을 통해 디자인을 배워보세요.",
                ]}
                btnTexts={["플러그인 소개", "사용해보기"]}
                btnTypes={["btn btn-sub", "btn"]}
            />
            <Slider data={SlideData} />
            <ApiList title={"인기 API 목록"} data={TopApiData} />
            <Banner data={BannerData} />
            <ApiList title={"신규 API 목록"} data={NewApiData} />
            <ApiList title={"신규 API 목록"} data={TestApiData} />
        </div>
    );
};

export default Main;
