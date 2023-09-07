import "./Styles/Promotion.css";

const Promotion = ({ mainText, subTexts, btnTexts, btnTypes }) => {
    return (
        <div id="promotion">
            <div className="mainText">{mainText}</div>
            <div className="subText">
                {subTexts.map((text, idx) => (
                    <p>{text}</p>
                ))}
            </div>
            <div className="btnWrap">
                {btnTexts.map((text, idx) => (
                    <button className={btnTypes[idx]}>{text}</button>
                ))}
            </div>
        </div>
    );
};

export default Promotion;
