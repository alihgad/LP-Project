import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import display from "./../../../public/Group1.svg";
import mobile from "./../../../public/Group2.svg";
import AI from "./../../../public/pngegg (5) copy 4 1.svg";
import LargeSectionHeading from "../(global)/LargeSectionHeading";
import world from './../../../public/LA icons/LA icons/site-alt.png'
import pen from './../../../public/LA icons/LA icons/pen-nib.png'
import ai from './../../../public/LA icons/LA icons/ai icon.png'
import mob from './../../../public/LA icons/LA icons/mobile-notch.png'

export default function Services() {
  return (
    <>
      <section className="bg-white py-28">
        <div className="container">
          <LargeSectionHeading
            heading="OUR SERCIVES"
            body="Let’s work together with our us"
          />
          <div className="mt-5 ">
            <div className="grid lg:grid-cols-9 gap-x-5 gap-y-5 font-open">
              <Card
                id="card"
                className="lg:col-span-5  overflow-hidden hover lg:ml-auto bg-[#262523] text-white  relative rounded-3xl h-fit group"
              >
                <div
                  id="layer"
                  className="absolute top-0 right-0 left-0 bottom-0  z-10 group-hover:bg-[#615edf] duration-1000"
                ></div>

                <CardContent className="grid p-0 pl-[15px] py-4 lg:py-[40px] lg:pl-[32px] relative ">
                  <div className="lg:w-6/12 pr-5 font-open text-base font-light w-7/12">
                    <div id="icon-bg" className=" w-12 h-12 rounded-full   flex justify-center items-center mb-5 z-20 relative  ">
                      <Image src={world} alt="world" className=" relative z-20 text-white w-1/2"></Image>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold mb-5 relative z-20 w-10/12">
                      Website Dev
                    </h3>
                    <p className=" mb-5 relative z-20 lg:text-xl text-[14px]">
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
                  <div className="absolute -right-20 bottom-0 lg:-right-4 lg:top-10 z-20 ">
                    <Image
                      src={display}
                      alt="desktop"
                      className="group-hover:bg-[#615edf] rounded-t-2xl lg:rounded-s-3xl transition-all duration-1000 lg:w-full w-[240px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card
                id="card"
                className="lg:col-span-4   overflow-hidden   bg-[#262523] text-white  relative rounded-3xl group"
              >
                <div
                  id="layer"
                  className="absolute top-0 right-0 left-0 bottom-0  z-10 group-hover:bg-[#615edf] duration-1000"
                ></div>

                <CardContent className="grid p-0 py-5 pl-[15px] lg:py-[40px] lg:pl-[32px] ">
                  <div className="text w-6/12 lg:w-8/12">
                    <div id="icon-bg" className="w-12 h-12 rounded-full  flex justify-center items-center mb-5 relative z-20">
                      <Image src={pen} alt="pen" className=" relative z-20 w-1/2"></Image>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold mb-5 relative z-20 w-12/12 ">
                      UI/UX Design
                    </h3>
                    <p className="lg:text-xl text-[14px] font-thin mb-5 relative z-20 lg:w-11/12">
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
                  <div className="  absolute lg:right-0 lg:bbottom-0  -right-8 top-10 z-20 ">
                    <Image src={mobile} alt="mobile" className="w-10/12 lg:w-full" />
                  </div>
                </CardContent>
              </Card>

              <Card
                id="card"
                className="lg:col-span-4  overflow-hidden  ml-auto bg-[#262523] text-white   relative rounded-3xl group "
              >
                <div
                  id="layer"
                  className="absolute top-0 right-0 left-0 bottom-0  z-10 group-hover:bg-[#615edf] duration-1000"
                ></div>
                <CardContent className="grid p-0 py-5 pl-[15px] lg:py-[40px] lg:pl-[32px] relative">
                  <div className="text w-7/12 lg:w-7/12 ">
                    <div id="icon-bg" className="w-12 h-12 rounded-full  flex justify-center items-center mb-5 relative z-20">
                      <Image src={ai} alt="ai" className=" relative z-20 w-1/2"></Image>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold mb-5 relative z-20">
                      AI Integration
                    </h3>
                    <p className="lg:text-xl text-[14px] font-thin mb-5 relative z-20 lg:text-[19px]">
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
                  <div className="  absolute right-0 w-6/12 lg:w-5/12 lg:-bottom-6  z-20">
                    <Image src={AI} alt="AI" className=" " />
                  </div>
                </CardContent>
              </Card>

              <Card
                id="card"
                className="lg:col-span-5  overflow-hidden  ml-auto bg-[#262523] text-white  relative rounded-3xl h-fit group"
              >
                <div
                  id="layer"
                  className="absolute top-0 right-0 left-0 bottom-0  z-10 group-hover:bg-[#615edf] duration-1000"
                ></div>

                <CardContent className="lg:grid p-0 py-5 pl-[15px] lg:py-[40px] lg:pl-[32px] ">
                  <div className="text w-6/12">
                    <div id="icon-bg" className="w-12 h-12 rounded-full  flex justify-center items-center mb-5 relative z-20">
                      <Image src={mob} alt="mob" className="relative z-20 w-1/2"></Image>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold mb-5 relative z-20">
                      Mobile app development
                    </h3>
                    <p className="  text-base mb-5 relative z-20">
                      help you to build website company that  modern, user
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
                  <div className=" absolute -right-5 lg:right-0 bottom-0  z-20">
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
