import React from "react";
import "./Button.scss";

type ButtonProps = {
  primary: boolean;
  text: string;
  size: "small" | "medium" | "large";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ primary, text, size, onClick }) => {
  const buttonClass = primary ? "primary" : "secondary";
  return (
    <button className={`${buttonClass} button ${size}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
