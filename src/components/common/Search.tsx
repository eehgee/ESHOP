import { useState } from "react";
import { useRecoilValue } from "recoil";
import { productsItem } from "../../store/products";
import { Link, useNavigate } from "react-router-dom";

const Search = ({
  toggleSearch,
}: {
  toggleSearch: () => void;
}): JSX.Element => {
  const [itemsSearch, setitemsSearch] = useState("");
  const products = useRecoilValue(productsItem);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const filteredItems = itemsSearch
    ? products.filter((item) =>
        item.title.toLowerCase().startsWith(itemsSearch.toLowerCase())
      )
    : [];

  const handleSearchIcon = () => {
    if (filteredItems.length > 0) {
      const firstItemId = filteredItems[0].id;
      navigate(`/item/${firstItemId}`);
    }
  };
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20 z-70">
        <div className="relative bg-white rounded-lg shadow-lg bottom-40 md:p-6">
          <form method="" onSubmit={handleSubmit}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={toggleSearch}
              type="button"
            >
              ✕
            </button>
            <div className="p-8 md:p-14 gap-2 relative">
              <div className="flex items-center">
                <label>
                  <input
                    type="text"
                    name="text"
                    className="py-2 pl-4 w-60 md:py-4 md:w-80 border-2 search-st rounded"
                    placeholder="상품을 검색하세요."
                    value={itemsSearch}
                    onChange={(e) => setitemsSearch(e.target.value)}
                  ></input>
                </label>

                <svg
                  className="h-6 w-6 md:h-9 md:w-9 cursor-pointer"
                  fill="enable-background:new 0 0 512 512;"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleSearchIcon}
                >
                  <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
                </svg>
              </div>
              {itemsSearch && (
                <div className="absolute border rounded-md bg-white max-h-60 overflow-y-auto w-60 md:w-80">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <Link
                        key={item.id}
                        to={`/item/${item.id}`}
                        className="block p-2 hover:bg-gray-200"
                        onClick={toggleSearch}
                      >
                        {item.title}
                      </Link>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500">
                      검색 결과가 없습니다.
                    </div>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
