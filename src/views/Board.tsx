const Board = (): JSX.Element => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-center m-10">Q&A</h2>

          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Q</div>
            <div className="collapse-content">
              <p>A.답변</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Q</div>
            <div className="collapse-content">
              <p>A.답변</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Q</div>
            <div className="collapse-content">
              <p>A.답변</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
