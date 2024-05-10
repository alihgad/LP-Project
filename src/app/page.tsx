import React from "react";

import Banner from "@/components/(Home page)/Banner";
import About from "@/components/(Home page)/About";
import Hero from "@/components/(Home page)/Hero";
import Services from "@/components/(Home page)/Services";
import Work from "@/components/(Home page)/Work";
import Comments from "@/components/(Home page)/Comments";
import EmblaCarousel from "@/components/(Home page)/EmplaCarousal";
import { EmblaOptionsType } from 'embla-carousel'
import Comment from "@/components/(Home page)/Comment";

export default function Home() {
  const SLIDES = [<Comment  className="md:mx-0"/>,<Comment className="md:mx-0"/>, <Comment className="md:mx-0"/>]
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
  return (
    <>
      <Hero>
        <Banner />
      </Hero>
      <About />
      <Services/>
      <Work/>
      <EmblaCarousel slides={SLIDES}  options={OPTIONS}/>
    </>
  );
}
