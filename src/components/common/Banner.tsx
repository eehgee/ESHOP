import { useNavigate } from "react-router-dom";

const Banner = (): JSX.Element => {

  const navigate = useNavigate();
  
  const isLogIn = localStorage.getItem("currentUser") !== null || localStorage.getItem("kakaoUser") !== null;
  console.log(isLogIn); // 로그인 상태 출력 (확인용)
  const handleBannerClick = () => {
    if (isLogIn) {
      console.log("로그인 상태입니다. 메인 페이지로 이동"); // 로그 확인용
      navigate("/"); // 로그인 상태일 때는 메인 페이지로
    } else {
      console.log("비로그인 상태입니다. 회원가입 페이지로 이동"); // 로그 확인용
      navigate("/join"); // 비로그인 상태일 때는 회원가입 페이지로
    }
  };


  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm/6 text-gray-900">
            <strong className="font-semibold">ESHOP 2025</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <button onClick={handleBannerClick} >
              쇼핑은 ESHOP과 함께! 가입 후 특별한 혜택을 받아보세요!
            </button>
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          {/* <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
