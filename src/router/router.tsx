import { Route, Routes } from "react-router-dom";
import ItemList from "../components/common/ItemList";
import BestItem from "../components/common/BestItem";
import Drawer from "../components/common/Drawer";
import Banner from "../components/common/Banner";

const Router = (): JSX.Element => {
  return (
    <Routes>
      {/* <Route path="drawer" element={<Drawer />} /> */}
      {/* <Route path="banner" element={<Banner />} /> */}
      <Route path="bestitem" element={<BestItem />} />
      <Route path="/" element={<ItemList />} />
    </Routes>
  );
};

export default Router;
