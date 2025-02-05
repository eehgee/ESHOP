import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { productsItem } from "../../store/products";
import { Link } from "react-router-dom";

const ItemList = (): JSX.Element => {
  const loaddata = useRecoilValueLoadable(productsItem);

  // 로딩 중일 때
  if (loaddata.state === "loading") {
    return <div>Loading...</div>;
  }

  // 에러가 발생했을 때
  if (loaddata.state === "hasError") {
    return <div>Error : {(loaddata.contents as Error).message}</div>;
  }

  // 성공적으로 로드 되었을 때
  if (loaddata.state === "hasValue") {
    const products = loaddata.contents;

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-center m-10">BESTITEM</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to="" key={product.id} className="group">
                <img
                  src={product.image}
                  className="aspect-square w-full rounded-lg object-contain group-hover:opacity-75 xl:aspect-7/8 p-4 border-2"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <div>Unexpected state</div>;
};

export default ItemList;
