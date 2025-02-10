import { Route, Routes } from "react-router-dom";
import BestItem from "../components/common/BestItem";
import Fashion from "../views/Fashion";
import Digital from "../views/Digital";
import Jewelery from "../views/Jewelery";
import Board from "../views/Board";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<BestItem />} />
      <Route path="fashion" element={<Fashion />} />
      <Route path="digital" element={<Digital />} />
      <Route path="Jewelery" element={<Jewelery />} />
      <Route path="board" element={<Board />} />
    </Routes>
  );
};

export default Router;
