"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  CarouselContext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Comment from "./Comment";

export default function CommentsCarousal() {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext?.state?.currentSlide
  );
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext?.state?.currentSlide);
    }
    carouselContext?.subscribe(onChange);
    return () => carouselContext?.unsubscribe(onChange);
  }, [carouselContext]);

  var settings = {
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    isPlaying: true,
  };
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        // isPlaying={true}
        interval={5000}
        step={1}
        playDirection={"forward"}
        infinite={true}
        className="relative"
      >
        <Slider id="slider" className="mt-5 " moveThreshold={0.1}>
          <Slide index={0}>
            <Comment />
          </Slide>

          <Slide index={1}>
            <Comment />
          </Slide>

          <Slide index={2}>
            <Comment />
          </Slide>
        </Slider>
        <DotGroup  showAsSelectedForCurrentSlideOnly={true} className="absolute right-1/2 translate-x-1/2 bottom-1 md:bottom-5 ">
        <Dot slide={0} className="w-3 h-3 rounded-full mx-1 bg-[#666666]"/>
        <Dot slide={1} className="w-3 h-3 rounded-full mx-1 bg-[#666666]"/>
        <Dot slide={2} className="w-3 h-3 rounded-full mx-1 bg-[#666666]"/>
        </DotGroup>
      </CarouselProvider>
    </>
  );
}

export function MyComponentUsingContext() {
  // return `The current slide is: ${currentSlide}`;
}
