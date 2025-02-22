import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Join = (): JSX.Element => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.verifyPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const isEmail = users.some((user: any) => user.email === formData.email);
    if (isEmail) {
      setError("이미 가입된 이메일입니다.");
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    alert("가입이 완료되었습니다!");
    navigate("/login");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8 mt-36">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight">
            회원가입
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm">
                이름
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full border-b border-gray-400 focus:border-black bg-white px-3 py-1.5 text-base placeholder:text-gray-400 sm:text-sm/6"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm">
                이메일 주소(아이디)
              </label>
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

            <div>
              <label htmlFor="password" className="block text-sm">
                비밀번호
              </label>
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

            <div>
              <label htmlFor="verifyPassword" className="block text-sm">
                비밀번호 확인
              </label>

              <input
                id="verifyPassword"
                name="verifyPassword"
                type="password"
                required
                value={formData.verifyPassword}
                onChange={handleChange}
                className="block w-full border-b border-gray-400 focus:border-black bg-white px-3 py-1.5 text-base placeholder:text-gray-400 sm:text-sm/6 "
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-3 text-sm/6 text-white"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
