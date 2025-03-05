import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../cart/cart";
import { useState } from "react";

const CartList = (): JSX.Element => {
  const cartItems = useRecoilValue(cartState);
  const [coupon, setCoupon] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  const total = cartItems.reduce((total, item) => total + item.price, 0);

  const applyCoupon = (coupon: string) => {
    switch (coupon) {
      case "Welcom10":
        setDiscount(total * 0.1);
        break;

      case "Season2000":
        setDiscount(2000);
        break;

      default:
        setDiscount(0);
        break;
    }
  };

  const handleCouponChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCoupon = e.target.value;
    setCoupon(selectedCoupon);
    applyCoupon(selectedCoupon);
  };
  const finalAmount = total - discount;

  if (cartItems.length === 0) {
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
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid-cols-1 grid md:grid-cols-5 gap-4 p-4 border-b-2 items-center"
            >
              <div className="flex justify-center">
                <img src={item.image} alt={item.title} className="w-32 h-32" />
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
                <p className="text-xl">${(item.price * 1).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 할인쿠폰 적용 */}

        <div className="w-full mt-16">
          <select
            className="w-100 text-lg font-bold p-1 border border-black outline-none"
            value={coupon}
            onChange={handleCouponChange}
          >
            <option value="">--- 할인 쿠폰 적용 ---</option>
            <option value="Welcom10">웰컴쿠폰 10%</option>
            <option value="Season2000">시즌 할인쿠폰 2,000원</option>
          </select>
          <div className="bg-orange-100 rounded-3xl h-32 mt-4 p-8">
            <p className="text-lg">총 주문금액</p>
            <span className="block text-right mt-4">
              총 {total}원 - 할인 {discount}원 = {finalAmount}원
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
