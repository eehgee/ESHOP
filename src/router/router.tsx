import { Route, Routes } from "react-router-dom";
import BestItem from "../components/common/BestItem";
import Fashion from "../views/Fashion";
import Digital from "../views/Digital";
import Jewelery from "../views/Jewelery";
import Board from "../views/Board";
import Join from "../Member/Join";
import Login from "../Member/Login";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<BestItem />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="fashion" element={<Fashion />} />
      <Route path="digital" element={<Digital />} />
      <Route path="Jewelery" element={<Jewelery />} />
      <Route path="board" element={<Board />} />
    </Routes>
  );
};

export default Router;
