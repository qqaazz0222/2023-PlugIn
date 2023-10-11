import "./Styles/Button.css";
const Button = ({ type, text, onclick }) => {
    return <button className={type} onClick={onclick}>{text}</button>;
};

export default Button;
