import React from "react";

import Banner from "@/components/Banner";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner />
      </Hero>
      <About />
    </>
  );
}
