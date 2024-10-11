import React from "react";
import InputForm1 from "../../components/InputForm1/InputForm";
import InputForm2 from "../../components/InputForm2/InputForm2";
import { WrapperContainerLeft, WrapperTextLight } from "./Style";
import { WrapperContainerRight } from "../SignInPage/Style";
import ButtonComponentSignIn from "../../components/ButtonComponentSignIn/ButtonComponentSignIn";
import { Image } from "antd";
import sigIn from "../../assets/images/signIn.png";
import InputForm3 from "../../components/InputForm3/InputForm3";

const SignUpPage = () => {
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
          <h1>Xin chao</h1>
          <p>ba lung tung</p>
          <InputForm1></InputForm1>
          <InputForm2></InputForm2>
          <InputForm3></InputForm3>
          <ButtonComponentSignIn text="Dang Ky" />

          <p>
            Ban chua co tai khoan ? <WrapperTextLight>Dang Ky</WrapperTextLight>{" "}
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

export default SignUpPage;
