import React from "react";
import "./icons.scss";

interface IconProps {
  theme?: string;
  disabled?: boolean;
}

const iconStyle = { transition: "all .5s ease-in-out" };

const getThemeClass = (theme?: string, disabled?: boolean) => {
  const themeClass = theme === "light" ? "icon-light" : "icon-dark";
  return `${themeClass} ${disabled ? "disabled" : ""}`;
};

export const BasketIcon: React.FC<IconProps> = ({ theme, disabled }) => {
  const iconClass = `basket-icon icon-transition ${getThemeClass(
    theme,
    disabled
  )}`;

  return (
    <svg
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={iconStyle}
    >
      <path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2z" />
    </svg>
  );
};

export const StoreIcon: React.FC<IconProps> = ({ theme, disabled }) => {
  const iconClass = `store-icon icon-transition ${getThemeClass(
    theme,
    disabled
  )}`;

  return (
    <svg
      className={iconClass}
      width="364"
      height="438"
      viewBox="0 0 364 438"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M279.21 102.446C239.644 102.446 222.983 121.276 195.574 121.276C167.306 121.276 145.813 102.531 111.699 102.531C78.0997 102.531 42.369 122.944 19.81 157.729C-12.104 206.751 -6.66972 298.966 44.9663 377.615C63.4503 405.625 88.0898 437.264 120.279 437.522C148.943 437.797 157.075 419.26 195.97 419.123C234.864 418.796 242.242 437.727 270.871 437.469C294.138 437.32 314.193 418.998 330.472 398.229C320.915 385.249 315.785 369.884 315.753 354.143C315.757 333.085 324.878 312.92 341.05 298.211C290.343 246.318 318.33 198.84 363.224 146.842C340.665 118.712 309.025 102.446 279.21 102.446Z"
        fill={"#50c878"}
      />
      <path
        d="M147.333 70.997C132.958 52.599 122.091 26.531 125.977 0C149.482 1.616 176.891 16.593 192.951 35.937C245.715 98.4019 188.131 121.669 147.333 70.997Z"
        fill={"#50c878"}
      />
    </svg>
  );
};

export const NextIcon: React.FC<IconProps> = ({ theme, disabled }) => {
  const iconClass = `next-icon icon-transition ${getThemeClass(
    theme,
    disabled
  )}`;

  return (
    <svg
      className={iconClass}
      width="31"
      height="54"
      viewBox="0 0 31 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.06427 52.9424C2.47844 54.3525 4.75843 54.3525 6.1726 52.9424L30.1558 29.0288C31.2814 27.9065 31.2814 26.0935 30.1558 24.9712L6.1726 1.05755C4.75843 -0.352518 2.47844 -0.352518 1.06427 1.05755C-0.349908 2.46763 -0.349908 4.74101 1.06427 6.15108L21.9594 27.0144L1.0354 47.8777C-0.349908 49.259 -0.349908 51.5612 1.06427 52.9424Z"
      />
    </svg>
  );
};

export const PrevIcon: React.FC<IconProps> = ({ theme, disabled }) => {
  const iconClass = `prev-icon icon-transition ${getThemeClass(
    theme,
    disabled
  )}`;

  return (
    <svg
      className={iconClass}
      width="31"
      height="54"
      viewBox="0 0 31 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.9357 52.9424C28.5216 54.3525 26.2416 54.3525 24.8274 52.9424L0.844174 29.0288C-0.281392 27.9065 -0.281392 26.0935 0.844174 24.9712L24.8274 1.05755C26.2416 -0.352518 28.5216 -0.352518 29.9357 1.05755C31.3499 2.46763 31.3499 4.74101 29.9357 6.15108L9.04061 27.0144L29.9646 47.8777C31.3499 49.259 31.3499 51.5612 29.9357 52.9424Z"
      />
    </svg>
  );
};

export const CrossIcon: React.FC<IconProps> = ({ theme, disabled }) => {
  const iconClass = `cross-icon icon-transition ${getThemeClass(
    theme,
    disabled
  )}`;

  return (
    <svg
      className={iconClass}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export const ThemeIcon: React.FC<IconProps> = ({ theme }) => {
  const iconClass = `theme-icon icon-transition ${getThemeClass(theme)}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={iconClass}
    >
      <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
    </svg>
  );
};
