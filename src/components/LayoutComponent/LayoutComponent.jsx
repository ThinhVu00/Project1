import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const LayoutComponent = ({ children, isShowHeader }) => {
  return (
    <div>
      {isShowHeader && <HeaderComponent />}
      <main>{children}</main>
    </div>
  );
};

export default LayoutComponent;
