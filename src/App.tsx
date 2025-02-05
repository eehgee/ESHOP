import { BrowserRouter } from "react-router-dom";
import "./assets/css/tailwind.css"; // tailwind css
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Router from "./router/router";
import Carousel from "./components/common/Carousel";
import Drawer from "./components/common/Drawer";
import Banner from "./components/common/Banner";
import { useState } from "react";

// import './App.css'

const App = (): JSX.Element => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Banner />
        <Nav openToggle={()=> setIsDrawerOpen(true)}/>
        <section className="flex-grow mt-44">
          <Carousel />
          <Router />
        </section>
        <Footer />
      </div>
      <Drawer isOpen={isDrawerOpen} closeDrawer={()=> setIsDrawerOpen(false)} />
    </BrowserRouter>
  );
};

export default App;
