import React from "react";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import Info from "./Info";
import MakeApoinment from "./MakeApoinment";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeApoinment />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
