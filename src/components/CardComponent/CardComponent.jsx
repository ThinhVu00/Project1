import React from "react";
import { StyleNameBook, WrapperCardStyle, WrapperReportText } from "./style";
import { StarFilled } from "@ant-design/icons";
const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 200 }}
      cover={
        <img
          style={{ height: "240px", width: "200px" }}
          alt="example"
          src="https://bizbooks.vn/uploads/images/2024/thang-3/1-nghe-thuat-hung-bien-mt.jpg"
        />
      }
    >
      <StyleNameBook>Nghe Thuat Hung Bien</StyleNameBook>
      <WrapperReportText>
        <span>
          <span> 4.96 </span>
          <StarFilled style={{ fontSize: "10px", color: "red" }} />
        </span>
        <span> | Da xem : 1000+</span>
      </WrapperReportText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
