import React from "react";
import { Layout } from "antd";
import ReaderComponent from "../../components/ReaderComponent/ReaderComponent";

const { Content } = Layout;

const ReaderPage = () => {
  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        {/* Reader Component */}
        <ReaderComponent />
      </Content>
    </Layout>
  );
};

export default ReaderPage;
