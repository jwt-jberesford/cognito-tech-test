import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./Button.scss";

type ButtonProps = {
  primary: boolean;
  text: string;
  size: "small" | "medium" | "large";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ primary, text, size, onClick }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const buttonClass = primary ? "primary" : "secondary";
  const themeClass = theme === "light" ? "light" : "dark";

  return (
    <button
      className={`${buttonClass} button ${size} ${themeClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
