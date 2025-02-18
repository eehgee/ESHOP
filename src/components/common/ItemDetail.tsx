import { useRecoilValueLoadable } from "recoil";
import { productsItem } from "../../store/products";
import { Link, useParams } from "react-router-dom";
import NotPage from "./NotPage";

const ItemDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const loaddata = useRecoilValueLoadable(productsItem);

  if (loaddata.state === "loading") {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8 mt-36">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Array(1)
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
    const product = products.find((item) => item.id.toString() === id);

    if (!product) {
      return <NotPage />;
    }

    return (
      <>
        <div className="flex flex-col lg:flex-row p-8 justify-center items-center py-32 mt-32">
          {/* 이미지 */}
          <div className="w-full lg:w-1/4 bg-white rounded-2xl shadow-md overflow-hidden mb-6 lg:mb-0 h-64 relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain p-6"
            />
          </div>
          {/* 상세정보 */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <div className="mb-4">
              <p className="text-md">{product.description}</p>
              <p className="text-2xl">${product.price.toFixed()}</p>
            </div>

            <div className="flex">
            <button className="btn btn-outline btn-secondary"> 장바구니에 담기</button>
              <Link to="/cartlist" className="btn btn-outline btn-info ml-2">
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <div>Unexpected state</div>;
};

export default ItemDetail;
