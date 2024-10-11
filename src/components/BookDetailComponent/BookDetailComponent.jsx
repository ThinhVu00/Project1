import { Col, Row, Image } from "antd";
import React from "react";
import imageBook from "../../assets/images/test.webp";
import imageSmall from "../../assets/images/imagesmall.webp";
import { StarFilled } from "@ant-design/icons";
import {
  WrappeerStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameBook,
  WrapperStyleTextAuth,
  WrapperStyleTextDes,
  WrapperStyleTextSeen,
} from "./style";
const BookDetailComponent = () => {
  return (
    <Row style={{ padding: "16px", background: "#fff" }}>
      <Col span={10}>
        <Image src={imageBook} alt="image ok" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrappeerStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageSmall}
              alt="image ok small"
              preview={false}
            />
          </WrappeerStyleColImage>
          <WrappeerStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageSmall}
              alt="image ok small"
              preview={false}
            />
          </WrappeerStyleColImage>
          <WrappeerStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageSmall}
              alt="image ok small"
              preview={false}
            />
          </WrappeerStyleColImage>
          <WrappeerStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageSmall}
              alt="image ok small"
              preview={false}
            />
          </WrappeerStyleColImage>
          <WrappeerStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageSmall}
              alt="image ok small"
              preview={false}
            />
          </WrappeerStyleColImage>
          <WrappeerStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageSmall}
              alt="image ok small"
              preview={false}
            />
          </WrappeerStyleColImage>
        </Row>
      </Col>
      <Col span={14}>
        <WrapperStyleNameBook>Tieu De Sach</WrapperStyleNameBook>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "red" }} />
          <StarFilled style={{ fontSize: "12px", color: "red" }} />
          <StarFilled style={{ fontSize: "12px", color: "red" }} />
          <WrapperStyleTextSeen> | Luot xem 1000+</WrapperStyleTextSeen>
        </div>

        <WrapperStyleTextAuth>
          <p>Linh vuc : </p>
          <p>Loai sach : </p>
          <p>Tac gia : </p>
          <p>Nha Xuat Ban : </p>
        </WrapperStyleTextAuth>

        <WrapperStyleTextDes>
          Món quà tuyệt vời nhất mà bạn có thể dành tặng cho người khác chính là
          trở thành phiên bản tốt hơn của chính bản thân bạn. Và điều đó bắt đầu
          với việc trở thành một người lắng nghe hiệu quả hơn.
        </WrapperStyleTextDes>
      </Col>
    </Row>
  );
};

export default BookDetailComponent;
