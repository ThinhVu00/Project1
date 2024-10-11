import React from "react";
import { Button } from "antd";
import styled from "styled-components";

// Tùy chỉnh nút
const CustomButton = styled(Button)`
  background-color: #3688ec;
  color: white;
  padding: 20px 50px;
  font-size: 16px;
  &:hover {
    background-color: #fff;
    color: #fff;
  }
  &:active {
    background-color: #3688ec;
  }
  width: 100%;
  margin: 26px 0 10px;
`;

const ButtonComponentSignIn = ({ text, onClick }) => {
  return (
    <div>
      <CustomButton onClick={onClick}>{text}</CustomButton>
    </div>
  );
};

export default ButtonComponentSignIn;
