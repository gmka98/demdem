import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Footer from "./components/Footer";


export default function Page() {
  return (
    <>
    <About/>
    <Services/>
    <Testimonials/>  

    <Team/>
    <Footer/>
    </>
  );
}
