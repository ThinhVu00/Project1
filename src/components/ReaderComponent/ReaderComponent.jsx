import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const ReaderComponent = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const pdfFileUrl = "/pdf/testingread.pdf";

  return (
    <div style={{ marginTop: "20px" }}>
      {/* Sử dụng Worker để hỗ trợ PDF */}
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfFileUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default ReaderComponent;
