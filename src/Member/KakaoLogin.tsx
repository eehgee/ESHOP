import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoLogin = (): JSX.Element => {
  const navigate = useNavigate();
  useEffect(() => {
    const waitForKakao = setInterval(() => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
        console.log("카카오 SDK 초기화 완료");
      }
    }, 100);

    return () => clearInterval(waitForKakao);
  }, []);

  const handleKakaoLogin = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("카카오 SDK가 로드되지 않았거나 초기화되지 않았습니다.");
      return;
    }

   // 기존 로그인 세션 종료
  if (window.Kakao.Auth.getAccessToken()) {
    window.Kakao.API.request({
      url : "/v1/user/unlink", 
      success : () => {
        console.log("기존 카카오 로그인 세션 종료");
        startKakaoLogin(); 
      },
      fail : (err: any) => {
        console.error("기존 세션 해제 실패", err);
        startKakaoLogin();
      },
    });
  } else {
    startKakaoLogin(); 
  }
};

const startKakaoLogin = () => {
  window.Kakao.Auth.login({
    success: (authObj: any) => {
      console.log("카카오 로그인 성공!", authObj);
      getUserInfo();
    },
    fail: (err: any) => {
      console.error("카카오 로그인 실패", err);
    },
  });
};

  const getUserInfo = () => {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: (res: any) => {
        console.log("사용자 정보", res);
        const { id } = res;
        localStorage.setItem("login", "true");
        localStorage.setItem("user", JSON.stringify({ id }));
        window.dispatchEvent(new Event("loginStateChanged"));
        navigate("/");
      },
      fail: (error: any) => {
        console.error("사용자 정보 요청 실패", error);
      },
    });
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={handleKakaoLogin}
          className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-3 text-sm/6 text-black"
        >
          카카오톡으로 로그인
        </button>
      </div>
    </>
  );
};

export default KakaoLogin;
