import React from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./Style";
import InputForm1 from "../../components/InputForm1/InputForm";
import ButtonComponentSignIn from "../../components/ButtonComponentSignIn/ButtonComponentSignIn";
import sigIn from "../../assets/images/signIn.png";
import { Image } from "antd";
import InputForm2 from "../../components/InputForm2/InputForm2";

const SignInPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "90vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin Chao</h1>
          <p>Dang nhap va tao tai khoan</p>
          <InputForm1></InputForm1>
          <InputForm2></InputForm2>
          <ButtonComponentSignIn text="Dang Nhap" />
          <p>
            <WrapperTextLight>Quen mat khau</WrapperTextLight>
          </p>
          <p>
            Chua co tai khoan ?{" "}
            <WrapperTextLight>Tao Tai Khoan</WrapperTextLight>{" "}
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={sigIn}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Doc Sach Tai Trang ....</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
