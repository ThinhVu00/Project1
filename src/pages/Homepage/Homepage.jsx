import React from "react";
import { Link } from "react-router-dom"; // Thêm dòng này
import TypeBooks from "../../components/TypeBooks/TypeBooks";
import { WrapperBooks, WrapperTypeBooks } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const Homepage = () => {
  const arr = [
    { name: "Homepage", path: "/" }, // Cập nhật để thêm đường dẫn
    { name: "SignInPage", path: "/sign-in" },
    { name: "SignUpPage", path: "/sign-up" },
    { name: "TypeBookPage", path: "/type" },
  ];

  return (
    <div style={{ padding: "20px 120px" }}>
      <WrapperTypeBooks>
        {arr.map((item) => {
          return (
            <Link to={item.path} key={item.name}>
              {" "}
              <TypeBooks name={item.name} />
            </Link>
          );
        })}
      </WrapperTypeBooks>

      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          pading: "0 120px",
          height: "1500px",
          width: "100%",
        }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />

        <WrapperBooks>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperBooks>

        <div>
          <ButtonComponent text="Xem Them" />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
