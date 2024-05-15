import Choose from "@/components/(About-page)/Choose";
import Header from "@/components/(global)/Header";
import ServicesCards from "@/components/(services)/ServicesCards";
import EmblaCarousel from "@/components/(Home page)/EmplaCarousal";
import { EmblaOptionsType } from "embla-carousel";
import Comment from "@/components/(Home page)/Comment";
import React from "react";

export default function services() {
  const SLIDES = [
    <Comment key={0} className="md:mx-0" />,
    <Comment key={1} className="md:mx-0" />,
    <Comment key={2} className="md:mx-0" />,
    <Comment key={0} className="md:mx-0" />,
  ];

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  return (
    <>
      <header>
        <Header bread="Services" body="services" />
      </header>
      <div className="bg-[#eee] ">
        <ServicesCards />
        <Choose />
        <EmblaCarousel className="emblas  " slides={SLIDES} options={OPTIONS} />
      </div>
    </>
  );
}
