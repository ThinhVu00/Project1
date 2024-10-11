import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
  padding: 20px 165px;
  background-color: rgb(26, 148, 255);
  allign-items: center;
  gap: 16px;
  flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  text-allign: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  allign-items: center;
  color: #fff;
  gap: 10px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 13.5px;
  color: #fff;
  white-space: nowrap;
`;
