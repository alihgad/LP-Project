"use client";
import React from "react";
import star from "./../../public/star.svg";
import Image from "next/image";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

export default function Banner() {
  const animation = { duration: 3000, easing: (t: number) => t };

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
    },
    mode: "snap",
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      {/* <section className="w-[1700px] -translate-x-20">
        <div className=" py-6 bg-blue-banner FONT-[600] text-[20px] text-white text-lg flex items-center justify-evenly">
          <p>WEB DEVELOPMENT</p>
          <Image height={50} src={star} alt="star" />
          <p>MOBILE APP DEVELOPMENT</p>
          <Image height={50} src={star} alt="star" />
          <p>AI INTEGRATION</p>
          <Image height={50} src={star} alt="star" />
          <p>UI/UX DESIGN</p>
          <Image height={50} src={star} alt="star" />
          <p>WEB DEVELOPMENT </p>
          <Image height={50} src={star} alt="star" />
          <p>CUSTOM SOFTWARE DEVELOPMENT </p>
          <Image height={50} src={star} alt="star" />
        </div>
      </section> */}
      <section className="overflow-hidden bg-blue-banner py-5">
        <div ref={ref} className="keen-slider slider items-center">
          <div className="keen-slider__slide number-slide1">web developer</div>
          <Image
            src={star}
            alt="star"
            className="keen-slider__slide number-slide2 star"
          />
          <div className="keen-slider__slide number-slide3">
            mobile app developer
          </div>
          <Image
            src={star}
            alt="star"
            className="keen-slider__slide number-slide4 star"
          />
          <div className="keen-slider__slide number-slide5">ai integration</div>
          <Image
            src={star}
            alt="star"
            className="keen-slider__slide number-slide6 star"
          />
          <div className="keen-slider__slide number-slide7">
            software development{" "}
          </div>
          <Image
            src={star}
            alt="star"
            className="keen-slider__slide number-slide8 star"
          />
          <div className="keen-slider__slide number-slide9">
            software development{" "}
          </div>
          <Image
            src={star}
            alt="star"
            className="keen-slider__slide number-slide10 star"
          />
          <div className="keen-slider__slide number-slide11">
            software development{" "}
          </div>
          <Image
            src={star}
            alt="star"
            className="keen-slider__slide number-slide12 star"
          />
        </div>
      </section>
    </>
  );
}
