import { useRecoilValueLoadable } from "recoil";
import { productsItem } from "../../store/products";
import { Link } from "react-router-dom";

const CartList = (): JSX.Element => {
  const loaddata = useRecoilValueLoadable(productsItem);

  if (loaddata.state === "loading") {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8 mt-36">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10">
            {Array(2)
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
    const cartItem = loaddata.contents;

    if (cartItem.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center py-32 m-32">
          <h2 className="text-4xl text-center">장바구니</h2>
          <p className="mt-4 text-lg">장바구니에 상품이 없습니다.</p>
          <button className="btn btn-outline btn-secondary">
            상품 담으러가기
          </button>
        </div>
      );
    }
    return (
      <>
        <div className="flex flex-col justify-center items-center py-16 mt-32 md:m-32">
          <h2 className="text-3xl md:text-4xl text-center m-10">장바구니</h2>

          <div className="hidden w-full md:grid md:grid-cols-5 gap-4 text-lg mt-28 mb-4 shadow-md">
            <div className="flex justify-center">상품</div>
            <div className="flex justify-center">상품명</div>
            <div className="flex justify-center">가격</div>
            <div className="flex justify-center">수량</div>
            <div className="flex justify-center">총합</div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="grid-cols-1 grid md:grid-cols-5 gap-4 p-4 border-b-2 items-center"
              >
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32"
                  />
                </div>

                <div className="flex justify-center">
                  <p className="text-md">{item.title}</p>
                </div>

                <div className="flex justify-center">
                  <p className="text-xl">${item.price}</p>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <button className="btn btn-outline btn-sm"> - </button>
                  <p className="mx-2">숫자</p>
                  <button className="btn btn-outline btn-sm"> + </button>
                </div>

                <div className="flex justify-center">
                  <p className="text-xl">$</p>
                </div>
              </div>
            ))}
          </div>

          {/* 할인쿠폰 적용 */}

          <div className="w-full mt-16">
            <select className="w-100 text-lg font-bold p-1 border border-black outline-none">
                <option value="">--- 할인 쿠폰 적용 ---</option>
                <option value="">웰컴쿠폰 10%</option>
                <option value="">시즌 할인쿠폰 5,000원</option>

            </select>
            <div className="bg-orange-100 rounded-3xl h-32 mt-4 p-8">
                <p className="text-lg">총 주문금액</p>
                <span className="block text-right mt-4">총{}의 상품 금액 - 할인 {}원 = 합계 {}원</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div>Unexpected state</div>;
};

export default CartList;
