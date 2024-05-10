import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import display from "./../../../public/services/desktop.png";
import mobile from "./../../../public/services/mobil-black.png";
import AI from "./../../../public/services/ai.png";
import SectionHeading from "./SectionHeading";

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
              <Card id="card" className="md:col-span-5  overflow-hidden  ml-auto bg-[#262523] text-white pt-5 relative rounded-3xl">
                <div id="layer" className="absolute top-0 right-0 left-0 bottom-0  z-10  "></div>
                <CardContent className="grid md:grid-cols-2 py-[40px] pl-[32px] ">
                  <div className="text   ">
                    <div className=" w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center mb-5 z-0 ">
                      <i className="fa-solid fa-xl fa-globe relative z-20"></i>
                    </div>
                    <h3 className="text-4xl font-bold mb-5 relative z-20 ">
                      Website Dev
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
                  <div className="hidden md:block md:absolute w-5/12 right-0 bottom-0">
                    <Image src={display} alt="desktop" className="" />
                  </div>
                </CardContent>
              </Card>

              <Card id='card' className="md:col-span-4   overflow-hidden  ml-auto bg-[#262523] text-white pt-5 relative rounded-3xl">
                <div id="layer" className="absolute top-0 right-0 left-0 bottom-0  z-10 "></div>
                <CardContent className="md:grid grid-cols-2 py-[40px] pl-[32px] ">
                  <div className="text ">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center mb-5">
                      <i className="fa-solid fa-xl fa-pen-nib relative z-20"></i>
                    </div>
                    <h3 className="text-4xl font-bold mb-5 relative z-20">UI/UX Design</h3>
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
                  <div className=" hidden md:block absolute w-4/12 right-0 bottom-0 ">
                    <Image src={mobile} alt="mobile" className="" />
                  </div>
                </CardContent>
              </Card>

              <Card id="card" className="md:col-span-4  overflow-hidden  ml-auto bg-[#262523] text-white pt-5  relative rounded-3xl">
              <div id="layer" className="absolute top-0 right-0 left-0 bottom-0  z-10 "></div>
                <CardContent className="md:grid grid-cols-2 py-[40px] pl-[32px] relative">
                  <div className="text ">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center mb-5">
                      <i className="fa-solid fa-xl fa-tag relative z-20"></i>
                    </div>
                    <h3 className="text-4xl font-bold mb-5 relative z-20">AI Integration</h3>
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
                  <div className=" hidden md:block absolute right-0 w-1/2">
                    <Image src={AI} alt="mobile" className="" />
                  </div>
                </CardContent>
              </Card>

              <Card id="card" className="md:col-span-5  overflow-hidden  ml-auto bg-[#262523] text-white pt-5 relative rounded-3xl">
              <div id="layer" className="absolute top-0 right-0 left-0 bottom-0  z-10 "></div>

                <CardContent className="md:grid grid-cols-2 py-[40px] pl-[32px] ">
                  <div className="text ">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center mb-5">
                      <i className="fa-solid fa-xl fa-bag-shopping relative z-20"></i>
                    </div>
                    <h3 className="text-4xl font-bold mb-5 relative z-20">
                      Mobile app development
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
                  <div className="hidden md:block absolute w-4/12 right-0 bottom-0">
                    <Image src={mobile} alt="mobile" className="" />
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
