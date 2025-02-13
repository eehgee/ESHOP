import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav className="md:justify-self-center">
          <h6 className="footer-title">Services</h6>
          <Link to="/fashion" className="link link-hover">
            패션
          </Link>
          <Link to="/digital" className="link link-hover">
            디지털
          </Link>
          <Link to="jewelery" className="link link-hover">
            쥬얼리
          </Link>
        </nav>
        <nav className="md:justify-self-center">
          <h6 className="footer-title">Company</h6>
          <Link to="/board" className="link link-hover">
            FAQ
          </Link>
        </nav>
        <nav className="md:justify-self-center">
          <div className="grid grid-flow-col gap-4">
            <Link to="">
              <svg
                height="30"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="st0"
                  d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 md:justify-center">
        <aside className="grid-flow-col items-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} EEHGEE
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
