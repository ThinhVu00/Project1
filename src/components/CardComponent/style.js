import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 200px;
  &img {
    height: 200px;
    width: 200px;
  }
`;

export const StyleNameBook = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgb (56, 56, 61);
  text-align: center;
`;

export const WrapperReportText = styled.div`
  font-size: 12px;
  color: rgb (128, 128, 137);
  text-align: center;
  alignitems: center;
`;
