import { Link } from "react-router-dom";
import Search from "./Search";
import Banner from "./Banner";

interface NavProps {
  openToggle: () => void;
}

const Nav = ({ openToggle }: NavProps): JSX.Element => {
  return (
    <div>
      <Banner />
      <div className="navbar fixed top-12 md:top-10 left-0 right-0 z-20 bg-white">
        <div className="flex-none md:hidden">
          <button className="btn btn-square btn-ghost" onClick={openToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <Link to="/" className="m-4 text-3xl">
            ESHOP
          </Link>
        </div>
      </div>

      <div className="navbar flex items-center text-sm shadow-md p-4 fixed top-28 left-0 right-0 z-10 bg-white">
        <div className="flex-1 flex justify-center space-x-12 cursor hidden sm:flex">
          <Link to="" className="md:text-lg">
            BEST
          </Link>
          <Link to="" className="md:text-lg">
            패션
          </Link>
          <Link to="" className="md:text-lg">
            디지털
          </Link>
          <Link to="" className="md:text-lg">
            악세서리
          </Link>
          <Link to="" className="md:text-lg">
            Q&A
          </Link>
        </div>
        <div className="flex items-center ml-auto space-x-6 cursor">
          <Search />
          <svg
            className="h-6 w-6 cursor-pointer"
            fill="enable-background:new 0 0 512 512;"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
          </svg>
          <Link to="" className="md:text-lg">
            로그인
          </Link>
          <Link to="" className="md:text-lg">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
