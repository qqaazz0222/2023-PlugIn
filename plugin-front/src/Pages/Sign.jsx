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
    return (
        <div id="signUp" className="signWrap">
            <EmailInput />
            <PasswordInput />
            <Button type={"btn"} text={"로그인"} />
        </div>
    );
};

export { SignIn, SignUp };
