import { Link } from "react-router-dom";

const Join = (): JSX.Element => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8 mt-36">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight">
            회원가입
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="name" className="block text-sm/6">
                  이름
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="current-password"
                  className="block w-full border-b border-gray-400 focus:border-black bg-white px-3 py-1.5 text-base placeholder:text-gray-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6">
                이메일 주소(아이디)
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
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
                  autoComplete="current-password"
                  className="block w-full border-b border-gray-400 focus:border-black bg-white px-3 py-1.5 text-base placeholder:text-gray-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="verifypassword" className="block text-sm/6">
                  비밀번호 확인
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="verifypassword"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full border-b border-gray-400 focus:border-black bg-white px-3 py-1.5 text-base placeholder:text-gray-400 sm:text-sm/6"
                />
              </div>
            </div>

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
