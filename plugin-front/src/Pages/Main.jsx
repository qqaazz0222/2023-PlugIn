import Promotion from "../Components/Promotion";

import "./Styles/Main.css";

const Main = () => {
    return (
        <div id="main">
            <Promotion
                mainText={"디자인 첫걸음"}
                subTexts={[
                    "새로운 분야에서 첫발을 내디딜때 누구나 막연하기 두렵죠",
                    "358개의 영상을 통해 디자인을 배워보세요.",
                ]}
                btnTexts={["플러그인 소개", "사용해보기"]}
                btnTypes={["btn btn-sub", "btn"]}
            />
        </div>
    );
};

export default Main;
