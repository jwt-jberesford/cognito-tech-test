import { useSelector } from "react-redux";
import React from "react";
import Header from "../components/Header/Header";
import "./PrimaryLayout.scss";
import { RootState } from "../store/store";

type PrimaryLayoutProps = {
  children: React.ReactNode;
};

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`outer-wrapper ${theme}`}>
      <div className="inner-wrapper">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default PrimaryLayout;
