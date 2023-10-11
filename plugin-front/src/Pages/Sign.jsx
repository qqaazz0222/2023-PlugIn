import { useState } from "react";
import Button from "../Components/Button";
import { EmailInput, PasswordInput } from "../Components/Input";
import "./Styles/Sign.css";

const SignIn = () => {
    return (
        <div id="signIn" className="signWrap">
            <EmailInput />
            <PasswordInput />
            <Button type={"btn"} text={"로그인"} />
        </div>
    );
};

const SignUp = () => {
    const [account, setAccount] = useState({})

    const userData = () => {

    }

    return (
        <div id="signUp" className="signWrap">
            <EmailInput setaccount={setAccount} />
            <PasswordInput setaccount={setAccount} />
            <PasswordInput setaccount={setAccount} />
            <Button type={"btn"} text={"회원가입"} onclick={userData} />
        </div>
    );
};

export { SignIn, SignUp };
