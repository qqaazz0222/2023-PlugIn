import "./Styles/Slider.css";
import Sample from "./Images/imgSample.png";
import { useEffect, useState } from "react";

const Slider = ({ data }) => {
    const slideWidth = 304;
    const [sliderX, setSliderX] = useState(0);
    const preSlide = () => {
        const target = document.getElementById("sliderContent");
        console.log(sliderX);
        if (sliderX < 0) {
            setSliderX(sliderX + slideWidth);
        } else {
            setSliderX(window.screenX - target.clientWidth - slideWidth - 32);
        }
    };
    const nxtSlide = () => {
        const target = document.getElementById("sliderContent");
        if (window.screenX - target.clientWidth - slideWidth >= sliderX) {
            setSliderX(0);
        } else {
            setSliderX(sliderX - slideWidth);
        }
    };
    useEffect(() => {
        const target = document.getElementById("sliderContent");
        target.style.translate = `${sliderX}px 0`;
    }, [sliderX]);
    return (
        <div id="slider">
            <div className="slideBtn preBtn" onClick={preSlide}>
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z" />
                </svg>
            </div>
            <div className="slideBtn nxtBtn" onClick={nxtSlide}>
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z" />
                </svg>
            </div>
            <div id="sliderContent" className="content">
                {data.map((item, idx) => (
                    <Slide
                        category={item.category}
                        desc={item.desc}
                        amount={item.amount}
                        bg={item.bg}
                    />
                ))}
            </div>
        </div>
    );
};

const Slide = ({ category, desc, amount, bg }) => {
    return (
        <div className="slide">
            <img src={bg} alt="" srcset="" />
            <div className="infoWrap">
                <div className="category">{category}</div>
                <div className="desc">{desc}</div>
                <button className="moreBtn">{amount}개의 API</button>
            </div>
        </div>
    );
};

export default Slider;
