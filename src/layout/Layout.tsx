import { useState } from "react";
import Banner from "../components/common/Banner";
import Nav from "../layout/Nav";
import Router from "../router/router";
import Footer from "./Footer";
import Drawer from "./Drawer";
import { useLocation } from "react-router-dom";
import Carousel from "../components/common/Carousel";

const Layout = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Nav openToggle={() => setIsDrawerOpen(true)} />
      {location.pathname === "/" && <Carousel />}
      <section className="flex-grow">
        <Router />
      </section>
      <Footer />
      <Drawer
        isOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default Layout;
