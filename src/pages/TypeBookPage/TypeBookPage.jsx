import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperBooks, WrapperNavbar } from "./style";

const TypeBookPage = () => {
  const onChange = () => {};
  return (
    <div style={{ padding: "0 120px" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "20px",
        }}
      >
        <WrapperNavbar span={4}>
          <NavBarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperBooks>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperBooks>
          <Pagination
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            style={{ textAlign: "center", marginTop: "10px", display: "block" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeBookPage;
