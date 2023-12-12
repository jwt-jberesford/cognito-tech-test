import React from "react";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setTheme } from "../../store/slices/themeSlice";
import { BasketIcon, CrossIcon, StoreIcon } from "../Icons/Icons";
import { setBasketActive } from "../../store/slices/basketSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const basketActive = useSelector((state: RootState) => state.basket.active);

  // const themeHandler = () => {
  //   dispatch(setTheme(theme === "light" ? "dark" : "light"));
  // };

  const basketActiveHandler = () => {
    dispatch(setBasketActive(!basketActive));
  };

  return (
    <header className="header-wrapper">
      <div className="header-left">
        <div className="svg-container store-logo">
          <StoreIcon />
        </div>
        <h1 id="logo">iStore</h1>
      </div>
      <div className="header-right">
        {/* <button onClick={themeHandler}>Theme toggle</button> */}
        <button
          onClick={basketActiveHandler}
          className="svg-container basket-icon-button"
        >
          {!basketActive ? <BasketIcon theme={theme} /> : <CrossIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
