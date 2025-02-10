import { Link } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}
const Drawer = ({ isOpen, closeDrawer }: DrawerProps): JSX.Element => {
  return (
    <>
      <div
        className={`drawer fixed inset-0 z-50 bg-black bg-opacity-50 flex transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-60 bg-white min-h-full p-4 shadow-lg flex flex-col transform transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button className="btn btn-sm btn-ghost w-20" onClick={closeDrawer}>
              <svg
                enableBackground="new 0 0 256 256"
                height="20px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 256 256"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M137.051,128l75.475-75.475c2.5-2.5,2.5-6.551,0-9.051s-6.551-2.5-9.051,0L128,118.949L52.525,43.475  c-2.5-2.5-6.551-2.5-9.051,0s-2.5,6.551,0,9.051L118.949,128l-75.475,75.475c-2.5,2.5-2.5,6.551,0,9.051  c1.25,1.25,2.888,1.875,4.525,1.875s3.275-0.625,4.525-1.875L128,137.051l75.475,75.475c1.25,1.25,2.888,1.875,4.525,1.875  s3.275-0.625,4.525-1.875c2.5-2.5,2.5-6.551,0-9.051L137.051,128z" />
              </svg>
            </button>
          </div>
          <ul className="menu mt-4 gap-4">
            <li>
              <Link to="/fashion">패션</Link>
            </li>
            <li>
              <Link to="/digital">디지털</Link>
            </li>
            <li>
              <Link to="jewelery">악세서리</Link>
            </li>
            <li>
              <Link to="/board">Q&A</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
