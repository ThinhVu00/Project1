import React from "react";
import { WrapperContent, WrapperLabelText, WrapperTextValue } from "./Style";

const NavBarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((options) => {
          return <WrapperTextValue>{options}</WrapperTextValue>;
        });

      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLabelText>Loai sach xem nhieu</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", [
          "sach hoc",
          "sach ky nang",
          "sach thieu nhi",
          "sach lich su",
        ])}
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
