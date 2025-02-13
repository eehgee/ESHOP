const Search = ({
  toggleSearch,
}: {
  toggleSearch : () => void;
}): JSX.Element => {
  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20 z-70">
        <div className="relative bg-white rounded-lg shadow-lg bottom-40">
          <form method="" onSubmit={handleSubmit}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={toggleSearch}
              type="button"
            >
              ✕
            </button>
            <div className="p-8 md:p-14 flex justify-center items-center gap-2">
              <label>
                <input
                  type="text"
                  name="text"
                  className="py-2 pl-4 w-60 md:py-4 md:w-80 border-2 search-st rounded"
                  placeholder="상품을 검색하세요."
                ></input>
              </label>
              <svg
                className="h-6 w-6 md:h-9 md:w-9 cursor-pointer"
                fill="enable-background:new 0 0 512 512;"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
