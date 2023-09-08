import { useEffect, useState } from "react";
import "./Styles/Input.css";

const TextInput = () => {
    return (
        <div className="inputWrap">
            <input type="text" className="textInput" />;
        </div>
    );
};
const EmailInput = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState(true);
    const [isFocus, setIsFocus] = useState(false);
    useEffect(() => {
        if ((email.includes("@") && email.includes(".")) || email === "") {
            setConfirmEmail(true);
        } else {
            setConfirmEmail(false);
        }
    }, [email]);
    return (
        <>
            <div className={isFocus ? "inputWrap active" : "inputWrap"}>
                <input
                    type="email"
                    className="emailInput"
                    placeholder="이메일을 입력해주세요."
                    onInput={(e) => {
                        setEmail(e.target.value);
                    }}
                    onFocus={() => {
                        setIsFocus(true);
                    }}
                    onBlur={() => {
                        setIsFocus(false);
                    }}
                />
            </div>
            {confirmEmail ? (
                <></>
            ) : (
                <div className="errMsg">이메일 형식이 올바르지 않습니다.</div>
            )}
        </>
    );
};
const PasswordInput = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    return (
        <div
            className={isFocus ? "inputWrap active" : "inputWrap"}
            onFocus={() => {
                setIsFocus(true);
            }}
            onBlur={() => {
                setIsFocus(false);
            }}
        >
            <input
                type={isVisible ? "text" : "password"}
                className="passwordInput"
                placeholder="비밀번호를 입력해주세요."
            />
            <div
                className="iconWrap"
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
            >
                {isVisible ? (
                    <svg
                        x="0px"
                        y="0px"
                        viewBox="0 0 512.19 512.19"
                        width="16"
                        height="16"
                    >
                        <g>
                            <circle cx="256.095" cy="256.095" r="85.333" />
                            <path d="M496.543,201.034C463.455,147.146,388.191,56.735,256.095,56.735S48.735,147.146,15.647,201.034   c-20.862,33.743-20.862,76.379,0,110.123c33.088,53.888,108.352,144.299,240.448,144.299s207.36-90.411,240.448-144.299   C517.405,277.413,517.405,234.777,496.543,201.034z M256.095,384.095c-70.692,0-128-57.308-128-128s57.308-128,128-128   s128,57.308,128,128C384.024,326.758,326.758,384.024,256.095,384.095z" />
                        </g>
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" width="16" height="16">
                        <path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" />
                    </svg>
                )}
            </div>
        </div>
    );
};

export { TextInput, EmailInput, PasswordInput };
