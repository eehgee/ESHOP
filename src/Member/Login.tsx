import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find((user: any) => user.email === formData.email);
    if (!user) {
      setError("등록되지 않은 이메일입니다.");
      return;
    }

    if (user.password !== formData.password) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    localStorage.setItem("login", "true");
    window.dispatchEvent(new Event("loginStateChanged"));
    navigate("/");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8 mt-36">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight">
            로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6">
                이메일 주소
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full border-b border-gray-400 focus:border-black bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6">
                  비밀번호
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full border-b border-gray-400 focus:border-black bg-white px-3 py-1.5 text-base placeholder:text-gray-400 sm:text-sm/6"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-3 text-sm/6 text-white"
              >
                로그인
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-3 text-sm/6 text-black"
              >
                카카오톡으로 로그인
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6">
            <Link to="/join" className="border-b border-gray-400">
              회원가입으로 이동하기
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
