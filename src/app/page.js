import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import ServiceSlider from "./components/ServiceSlider";
import ServiceSliderClient from "./components/ServiceSliderClient";

export default function Page() {
  return (
    <>
    <About/>
    <ServiceSlider/>
    <Testimonials/> 

    <Team/>
    </>
  );
}
