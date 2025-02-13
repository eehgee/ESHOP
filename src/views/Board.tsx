const Board = (): JSX.Element => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-sm mt-36">
          <h2 className="text-3xl md:text-4xl text-center m-10">FAQ</h2>

          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm md:text-lg font-medium">
              <span>Q1. 주문을 변경하거나 취소할 수 있나요?</span>
            </div>
            <div className="collapse-content">
              <p>
                A. 주문 상태에 따라 변경 또는 취소가 가능합니다.
                <br />
                <br />
                결제 완료 이전 : 마이페이지 - 주문내역에서 직접 취소 가능합니다.
                <br />
                결제 완료 후 : 고객센터로 문의해주세요.
                <br />
                배송 준비 중 이후 : 변경 및 취소가 어렵습니다.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm md:text-lg font-medium">
              <span>Q2. 주문 확인은 어디서 할 수 있나요?</span>
            </div>
            <div className="collapse-content">
              <p>
                A. 마이페이지 - 주문내역에서 주문 상태를 확인할 수 있습니다.
                주문 확인 이메일도 함께 발송됩니다.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm md:text-lg font-medium">
              <span>Q3. 배송은 얼마나 걸리나요?</span>
            </div>
            <div className="collapse-content">
              <p>
                A. 결제 완료 후 평균 2~3일(영업일 기준) 내에 배송됩니다.
                도서산간 지역은 추가 배송일이 소요될 수 있습니다.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm md:text-lg font-medium">
              <span>Q4. 배송비는 얼마인가요?</span>
            </div>
            <div className="collapse-content">
              <p>
                A. 기본 배송비는 3,000원이며, 5만원 이상 구매 시 무료
                배송입니다.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm md:text-lg font-medium">
              <span>Q5. 배송 조회는 어떻게 하나요?</span>
            </div>
            <div className="collapse-content">
              <p>
                A. 마이페이지 - 주문내역에서 송장번호를 확인하시면, 택배사
                사이트에서 실시간 조회가 가능합니다.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm md:text-lg font-medium">
              <span>
                Q6. 상품을 교환 또는 반품하고 싶어요. 어떻게 해야 하나요?
              </span>
            </div>
            <div className="collapse-content">
              <p>
                A. 상품 수령 후 7일 이내에 고객센터 또는 마이페이지에서
                교환/반품 신청이 가능합니다.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm md:text-lg font-medium">
              <span>Q7. 반품 시 배송비는 누가 부담하나요?</span>
            </div>
            <div className="collapse-content">
              <p>
                A. 단순 변심일 경우 고객님 부담(왕복 배송비 6,000원), 상품
                불량이나 오배송의 경우 쇼핑몰에서 부담합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
