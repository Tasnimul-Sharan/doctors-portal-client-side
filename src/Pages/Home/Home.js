import React from "react";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import Info from "./Info";
import MakeApoinment from "./MakeApoinment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeApoinment />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
