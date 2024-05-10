"use client";
import React from "react";
import star from "./../../../public/star.svg";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

export default function Banner() {
  const animation = { duration: 5000, easing: (t: number) => t };

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
    },
    mode: "snap",
    loop: true,
    renderMode: "performance",
    // drag: false,
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
      <div className="overflow-hidden bg-blue-banner py-5 font-open">
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
      </div>
    </>
  );
}
