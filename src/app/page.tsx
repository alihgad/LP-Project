import React from "react";

import Banner from "@/components/(Home page)/Banner";
import About from "@/components/(Home page)/About";
import Hero from "@/components/(Home page)/Hero";
import Services from "@/components/(Home page)/Services";
import Work from "@/components/(Home page)/Work";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner />
      </Hero>
      <About />
      <Services/>
      <Work/>
    </>
  );
}
