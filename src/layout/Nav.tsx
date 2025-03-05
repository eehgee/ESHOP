import { Link } from "react-router-dom";
import Search from "../components/common/Search";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../components/cart/cart";

interface NavProps {
  openToggle: () => void;
}

const Nav = ({ openToggle }: NavProps): JSX.Element => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(false);
  const cart = useRecoilValue(cartState);
  const cartItemCount = cart.length;

  useEffect(() => {
    const loginState = localStorage.getItem("login");
    const kakaoState = localStorage.getItem("kakaoLogin");
    if (loginState === "true" || kakaoState === "true") {
      setIsLogin(true);
    }

    const handleLoginStateChange = () => {
      const updatedLoginState = localStorage.getItem("login") === "true" || localStorage.getItem("kakaoLogin") === "true";
      setIsLogin(updatedLoginState);
    };
    
    window.addEventListener("loginStateChanged", handleLoginStateChange);

    return () => {
      window.removeEventListener("loginStateChanged", handleLoginStateChange);
    };
  }, []);

  const handleLogout = () => {
    if (localStorage.getItem("kakaoLogin") === "true") {
      if (!window.Kakao) {
        console.error("Kakao SDK가 로드되지 않았습니다.");
        return;
    }

    if (!window.Kakao.isInitialized()) {
      console.warn("Kakao SDK가 초기화되지 않아 초기화 진행");
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY); // 🔹 여기에 본인의 JavaScript 키 입력
    }

    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.API.request({
        url: "/v1/user/unlink", // 연결 끊기 API 호출
        success: () => {
          console.log("카카오 계정 연결 해제 성공");
          localStorage.removeItem("login");
          localStorage.removeItem("user");
          window.dispatchEvent(new Event("loginStateChanged"));
          setIsLogin(false);
        },
        fail: (error: any) => {
          console.error("카카오 계정 연결 해제 실패", error);
        },
      });

      // 액세스 토큰 삭제
      window.Kakao.Auth.setAccessToken(null);
    }
  }
  localStorage.removeItem("login");
    window.dispatchEvent(new Event("loginStateChanged"));
    setIsLogin(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prevToggle) => !prevToggle);
  };

  return (
    <div className="flex flex-col fixed top-12 md:top-10 left-0 right-0 z-10">
      <div className="h-10 mt-4 md:m-0 md:h-14 flex items-center bg-white">
        <button
          className="btn btn-square btn-ghost md:hidden"
          onClick={openToggle}
        >
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
        <Link to="/" className="m-4 text-2xl text-3xl">
          ESHOP
        </Link>
      </div>
      <div className="h-12 flex items-center text-sm shadow-md p-2 md:p-4 z-10 bg-white">
        <div className="flex-1 flex justify-center space-x-12 cursor hidden sm:flex">
          <Link to="/fashion" className="md:text-lg">
            패션
          </Link>
          <Link to="/digital" className="md:text-lg">
            디지털
          </Link>
          <Link to="/Jewelery" className="md:text-lg">
            악세서리
          </Link>
          <Link to="/board" className="md:text-lg">
            FAQ
          </Link>
        </div>
        <div className="flex items-center ml-auto cursor">
          <div className="btn btn-ghost btn-circle hover:bg-gray-200">
            <button onClick={toggleSearch}>
              <svg
                className="h-6 w-6 cursor-pointer "
                fill="enable-background:new 0 0 512 512;"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
              </svg>
            </button>
          </div>
          {isSearchOpen && <Search toggleSearch={toggleSearch} />}
          {!isLogin ? (
            <>
              <Link to="/login" className="md:text-md">
                로그인
              </Link>
              <Link to="/join" className="md:text-md pl-2">
                회원가입
              </Link>
            </>
          ) : (
            <div className="flex justify-center items-center">
              <Link to="cartlist">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle hover:bg-gray-200"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {cartItemCount > 0 && (

                      <span className="badge badge-sm indicator-item">{cartItemCount}</span>
                      )}
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                  ></div>
                </div>
              </Link>
              <button onClick={handleLogout} className="md:text-md pl-2">
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
