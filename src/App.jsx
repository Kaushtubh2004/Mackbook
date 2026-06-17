import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <ProductViewer />
          <Showcase />
          <Performance />
          <Features />
          <Highlights />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;