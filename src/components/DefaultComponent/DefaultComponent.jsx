import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const DefaultComponent = () => {
  return (
    <div>
      <HeaderComponent>{children}</HeaderComponent>
    </div>
  );
};

export default DefaultComponent;
