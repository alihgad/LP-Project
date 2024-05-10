import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import display from "./../../../public/Group1.svg";
import mobile from "./../../../public/Group2.svg";
import AI from "./../../../public/pngegg (5) copy 4 1.svg";
import SectionHeading from "./SectionHeading";
import world from './../../../public/LA icons/LA icons/site-alt.png'
import pen from './../../../public/LA icons/LA icons/pen-nib.png'
import ai from './../../../public/LA icons/LA icons/ai icon.png'
import mob from './../../../public/LA icons/LA icons/mobile-notch.png'

export default function Services() {
  return (
    <>
      <section className="bg-white py-28">
        <div className="container">
          <SectionHeading
            heading="OUR SERCIVES"
            body="Let’s work together with our us"
          />
          <div className="mt-5 ">
            <div className="grid md:grid-cols-9 gap-x-5 gap-y-5">
              <Card
                id="card"
                className="md:col-span-5  overflow-hidden hover ml-auto bg-[#262523] text-white  relative rounded-3xl h-fit group"
              >
                <div
                  id="layer"
                  className="absolute top-0 right-0 left-0 bottom-0  z-10 group-hover:bg-[#615edf] duration-1000"
                ></div>

                <CardContent className="grid md:grid-cols-2 py-[40px] pl-[32px] relative ">
                  <div className="text pr-5 font-open text-base font-light">
                    <div id="icon-bg" className=" w-12 h-12 rounded-full   flex justify-center items-center mb-5 z-20 relative  ">
                      <Image src={world} alt="world" className=" relative z-20 text-white w-1/2"></Image>
                    </div>
                    <h3 className="text-4xl font-bold mb-5 relative z-20 ">
                      Website Dev
                    </h3>
                    <p className=" mb-5 relative z-20">
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link
                      href={"/contact"}
                      target="_blank"
                      className="flex gap-x-2 items-center relative z-20 "
                    >
                      <p className="underline">Start with us</p>
                      <i className="fa-solid fa-arrow-up rotate-45"></i>
                    </Link>
                  </div>
                  <div className="hidden md:block   absolute right-0 top-10 z-20 ">
                    <Image
                      src={display}
                      alt="desktop"
                      className="w-full group-hover:bg-[#615edf] rounded-s-3xl transition-all duration-1000"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card
                id="card"
                className="md:col-span-4   overflow-hidden  ml-auto bg-[#262523] text-white  relative rounded-3xl group"
              >
                <div
                  id="layer"
                  className="absolute top-0 right-0 left-0 bottom-0  z-10 group-hover:bg-[#615edf] duration-1000"
                ></div>
                <CardContent className="md:grid py-[40px] pl-[32px] ">
                  <div className="text md:w-7/12 ">
                    <div id="icon-bg" className="w-12 h-12 rounded-full  flex justify-center items-center mb-5 relative z-20">
                      <Image src={pen} alt="pen" className=" relative z-20 w-1/2"></Image>
                    </div>
                    <h3 className="text-4xl font-bold mb-5 relative z-20">
                      UI/UX Design
                    </h3>
                    <p className="font-thin mb-5 relative z-20">
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link
                      href={"/contact"}
                      target="_blank"
                      className="flex gap-x-2 items-center relative z-20 "
                    >
                      <p className="underline">Start with us</p>
                      <i className="fa-solid fa-arrow-up rotate-45"></i>
                    </Link>
                  </div>
                  <div className=" hidden md:block absolute  right-0 top-15 z-20 ">
                    <Image src={mobile} alt="mobile" className="" />
                  </div>
                </CardContent>
              </Card>

              <Card
                id="card"
                className="md:col-span-4  overflow-hidden  ml-auto bg-[#262523] text-white   relative rounded-3xl group "
              >
                <div
                  id="layer"
                  className="absolute top-0 right-0 left-0 bottom-0  z-10 group-hover:bg-[#615edf] duration-1000"
                ></div>
                <CardContent className="md:grid  py-[40px] pl-[32px] relative">
                  <div className="text md:w-7/12 ">
                    <div id="icon-bg" className="w-12 h-12 rounded-full  flex justify-center items-center mb-5 relative z-20">
                      <Image src={ai} alt="ai" className=" relative z-20 w-1/2"></Image>
                    </div>
                    <h3 className="text-4xl font-bold mb-5 relative z-20">
                      AI Integration
                    </h3>
                    <p className="font-thin mb-5 relative z-20">
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link
                      href={"/contact"}
                      target="_blank"
                      className="flex gap-x-2 items-center  relative z-20"
                    >
                      <p className="underline">Start with us</p>
                      <i className="fa-solid fa-arrow-up rotate-45"></i>
                    </Link>
                  </div>
                  <div className=" hidden md:block absolute right-0 w-5/12  z-20">
                    <Image src={AI} alt="AI" className=" " />
                  </div>
                </CardContent>
              </Card>

              <Card
                id="card"
                className="md:col-span-5  overflow-hidden  ml-auto bg-[#262523] text-white  relative rounded-3xl h-fit group"
              >
                <div
                  id="layer"
                  className="absolute top-0 right-0 left-0 bottom-0  z-10 group-hover:bg-[#615edf] duration-1000"
                ></div>

                <CardContent className="md:grid  py-[30px] pl-[32px] ">
                  <div className="text md:w-5/12">
                    <div id="icon-bg" className="w-12 h-12 rounded-full  flex justify-center items-center mb-5 relative z-20">
                      <Image src={mob} alt="mob" className="relative z-20 w-1/2"></Image>
                    </div>
                    <h3 className="text-4xl font-bold mb-5 relative z-20">
                      Mobile app development
                    </h3>
                    <p className="font-[300] text-base mb-5 relative z-20">
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link
                      href={"/contact"}
                      target="_blank"
                      className="flex gap-x-2 items-center relative z-20 "
                    >
                      <p className="underline">Start with us</p>
                      <i className="fa-solid fa-arrow-up rotate-45"></i>
                    </Link>
                  </div>
                  <div className="hidden md:block absolute right-0 top-10 z-20">
                    <Image
                      src={mobile}
                      alt="mobile"
                      className="group-hover:text-blue-400"
                    />
                  </div>
                </CardContent>
              </Card>

            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </section>
    </>
  );
}
