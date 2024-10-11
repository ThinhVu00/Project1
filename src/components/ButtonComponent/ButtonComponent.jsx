import React from "react";
import { Button } from "antd";
import styled from "styled-components";

// Container để căn giữa Button
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;

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
`;

const ButtonComponent = ({ text, onClick }) => {
  return (
    <CenteredContainer>
      <CustomButton onClick={onClick}>{text}</CustomButton>
    </CenteredContainer>
  );
};

export default ButtonComponent;
