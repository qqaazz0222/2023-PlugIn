import ApiList from "../Components/ApiList";
import Banner from "../Components/Banner";
import Promotion from "../Components/Promotion";
import Slider from "../Components/Slider";

import Sample from "./Images/imgSample.png";

import "./Styles/Main.css";

const Main = () => {
    const slideData = [
        {
            category: "국내발송",
            desc: "카테고리에 대한 설명입니다.",
            amount: 10,
            bg: "https://i.pinimg.com/564x/f8/3e/89/f83e8929374ff46fd92704ec90247e2b.jpg",
        },
        {
            category: "해외발송(미국)",
            desc: "카테고리에 대한 설명입니다.",
            amount: 10,
            bg: "https://i.pinimg.com/564x/c4/0a/e8/c40ae84608852b444cec542a480305ad.jpg",
        },
        {
            category: "해외발송(일본)",
            desc: "카테고리에 대한 설명입니다.",
            amount: 10,
            bg: "https://i.pinimg.com/736x/5a/6c/8f/5a6c8f4f1a9a1571721807f67df5d7a8.jpg",
        },
        {
            category: "해외발송(중국)",
            desc: "카테고리에 대한 설명입니다.",
            amount: 10,
            bg: "https://i.pinimg.com/736x/77/2b/d1/772bd19de0cc73c5dd1eeffc9d494131.jpg",
        },
        {
            category: "해외발송(베트남)",
            desc: "카테고리에 대한 설명입니다.",
            amount: 10,
            bg: "https://i.pinimg.com/564x/12/ff/8e/12ff8e4a106632c93fe80b62d940fe27.jpg",
        },
        {
            category: "해외발송(영국)",
            desc: "카테고리에 대한 설명입니다.",
            amount: 10,
            bg: "https://i.pinimg.com/736x/ce/47/af/ce47afaf7632cae907eff9dcbb607e7a.jpg",
        },
        {
            category: "해외발송(캐나다)",
            desc: "카테고리에 대한 설명입니다.",
            amount: 10,
            bg: "https://i.pinimg.com/564x/34/da/30/34da30701ec5f55a8589203e3ec29255.jpg",
        },
        {
            category: "해외발송(러시아)",
            desc: "카테고리에 대한 설명입니다.",
            amount: 10,
            bg: Sample,
        },
    ];
    const topApiData = {
        col1: {
            title: "국내발송",
            amount: 10,
            data: [
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
            ],
        },
        col2: {
            title: "해외발송",
            amount: 10,
            data: [
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
            ],
        },
        col3: {
            title: "전체",
            amount: 10,
            data: [
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
            ],
        },
    };
    const newApiData = {
        col1: {
            title: "국내발송",
            amount: 10,
            data: [
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
            ],
        },
        col2: {
            title: "해외발송",
            amount: 10,
            data: [
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
            ],
        },
        col3: {
            title: "전체",
            amount: 10,
            data: [
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
                {
                    img: Sample,
                    title: "API이름입니다.",
                    desc: "API설명입니다.",
                },
            ],
        },
    };
    const BannerData = [
        { title: "배너제목입니다.", desc: "배너설명입니다.", img: Sample },
        { title: "배너제목입니다.", desc: "배너설명입니다.", img: Sample },
        { title: "배너제목입니다.", desc: "배너설명입니다.", img: Sample },
    ];
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
            <Slider data={slideData} />
            <ApiList title={"인기 API 목록"} data={topApiData} />
            <Banner data={BannerData} />
            <ApiList title={"신규 API 목록"} data={newApiData} />
        </div>
    );
};

export default Main;
