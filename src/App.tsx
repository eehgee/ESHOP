import { BrowserRouter } from "react-router-dom";
import "./assets/css/tailwind.css";
import Layout from "./layout/Layout";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
