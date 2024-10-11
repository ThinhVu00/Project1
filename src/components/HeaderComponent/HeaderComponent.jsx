import { Button, Col, Input, Space } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6} style={{ display: "flex", alignItems: "center" }}>
          <WrapperTextHeader>THUVIENDIENTU</WrapperTextHeader>
        </Col>
        <Col span={12} style={{ display: "flex", alignItems: "center" }}>
          <Space.Compact style={{ width: "90%" }}>
            <Input placeholder="nhap text" />
            <Button type="primary">Tìm Kiếm</Button>
          </Space.Compact>
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "100px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "27.5px" }} />
            <div>
              <WrapperTextHeaderSmall>
                Đăng nhập / Đăng ký
              </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <PhoneOutlined style={{ fontSize: "27.5px", color: "#fff" }} />
            <WrapperTextHeaderSmall> 0837.369.839</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};
export default HeaderComponent;
