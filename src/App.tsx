import { FC } from "react";
import DataViewer from "./components/DataViwer/DataViewer";
import Layout from "./components/Layout/Layout";


const App:FC = () => {
  return (
      <Layout>
        <DataViewer />
      </Layout>
  );
};

export default App;
