"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import SmallSectionHeading from "../(global)/SmallSectionHeading";
import Check from "../(About-page)/Check";
import man from "@/../../public/services/man.jpeg";
import Image from "next/image";
import ReactCurvedText from "react-curved-text";
import Circle from "./DC/Circle";

export default function Choose() {
  return (
    <>
      <section className="py-16">
        <div className="container ">
          <div className="md:grid md:grid-cols-2">
            <div className="text">
              <SmallSectionHeading title="WHY CHOOSE US" />
              <h4 className="font-open text-2xl md:text-3xl font-bold">
                Providing The <span className="text-blue-main"> Best </span>
                <span className="md:block">Services</span>
              </h4>
              <div className="checks mt-10">
                <Check check={false} head="We think differently" />
                <Check check={false} head="Cutting-Edge Technology" />
                <Check check={false} head="Expertise and Experience" />
              </div>
            </div>

            <div className="image ">
              <div className="blue bg-[#615EDF] w-full mx-auto sm:w-1/2 mt-3  md:w-[90%] md:h-[95%] h-[300px] rounded-[100%] relative">
                <div className="bg-[#eee] w-[92%] md:w-[93%] h-[98%] rounded-[100%] absolute left-2 top-1  flex justify-center items-center">
                  <Image
                    src={man}
                    alt={"man"}
                    className="w-9/12 md:w-10/12 rounded-[100%] "
                  />
                  <div className="group vedio w-32 h-32 md:w-52 md:h-52  bg-white absolute flex justify-center items-center rounded-full -bottom-10 left-0">
                    <div className="absolute ">
                      <Circle/>
                    </div>
                    <div className="bg-[#615EDF]  rounded-[100%]">
                      <i className="text-black fa-solid fa-arrow-circle-up text-6xl md:text-8xl w-full h-full group-hover:rotate-90 transition-all duration-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
