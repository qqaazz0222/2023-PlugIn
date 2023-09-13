import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import "./Styles/Banner.css";

const Banner = ({ data }) => {
    const [nowDisplay, setNowDisplay] = useState(0);
    const [ref, inView] = useInView();
    const [style, setStyle] = useState({});
    useEffect(() => {
        if (inView) {
            setStyle({
                animation: "FadeUp 1s .5s",
                animationFillMode: "forwards",
            });
        }
    }, [inView]);
    useEffect(() => {
        const bannerN =
            document.getElementsByClassName("bannerItem").length - 1;
        const timer = setInterval(() => {
            setNowDisplay((prev) => {
                if (prev >= bannerN) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    useEffect(() => {
        const target = document.getElementById("bannerList");
        const bannerX = document.getElementById("banner").clientWidth;
        target.style.translate = `-${nowDisplay * bannerX}px 0`;
    }, [nowDisplay]);
    return (
        <div id="banner" ref={ref} style={style}>
            <div id="bannerList" className="contentWrap">
                {data.map((item, idx) => (
                    <div className="bannerItem">
                        <img src={item.img} alt="" />
                        <div className="title">{item.title}</div>
                        <div className="desc">{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
