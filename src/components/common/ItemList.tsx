import { useRecoilValueLoadable } from "recoil";
import { productsItem } from "../../store/products";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../common/Pagination";

interface ItemCategoryProps {
  category: string[];
  title: string;
}

const ItemList = ({ category, title }: ItemCategoryProps): JSX.Element => {
  const loaddata = useRecoilValueLoadable(productsItem);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 페이지당 8개 아이템 보여줌

  if (loaddata.state === "loading") {
    const skeletonCount = Math.max(category.length * 4, 8);

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8 mt-36">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Array(skeletonCount)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  if (loaddata.state === "hasError") {
    return <div>Error : {(loaddata.contents as Error).message}</div>;
  }

  if (loaddata.state === "hasValue") {
    const products = loaddata.contents;

    const filteredItems = products.filter((item) =>
      category.includes(item.category)
    );

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // 현재 페이지에 해당하는 아이템만 선택
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, endIndex);

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8 mt-36">
          <h2 className="text-3xl md:text-4xl text-center m-10">
            {title}
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {currentItems.map((item) => (
              <Link to={`/item/${item.id}`} key={item.id} className="group">
                <img
                  src={item.image}
                  className="aspect-square w-full rounded-lg object-contain group-hover:opacity-75 xl:aspect-7/8 p-4 border-2"
                />
                <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${item.price.toFixed()}
                </p>
              </Link>
            ))}
          </div>

          {totalPages >= 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    );
  }
  return <div>Unexpected state</div>;
};

export default ItemList;
