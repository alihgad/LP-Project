import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import display from "./../../../public/services/desktop.png";
import mobile from "./../../../public/services/mobil-black.png";
import AI from "./../../../public/services/ai.png";

export default function Services() {
  return (
    <>
      <section className="bg-white py-28">
        <div className="container">
          <div className="flex justify-center items-center flex-col">
            <h3 className="uppercase tracking-[0.4em] text-blue-main font-semibold ">
              our services
            </h3>
            <p className="text-5xl my-3">Let’s work together with our us</p>
          </div>
          <div className="mt-5 ">
            <div className="grid sm:grid-cols-9 gap-x-5 gap-y-5">
              <Card className="sm:col-span-5  overflow-hidden  ml-auto bg-[#262523] text-white pt-5 relative rounded-3xl">
                <CardContent className="grid sm:grid-cols-2 py-[40px] pl-[32px] ">
                  <div className="text ">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center mb-5">
                      <i className="fa-solid fa-xl fa-globe"></i>
                    </div>
                    <h3 className="text-4xl font-bold mb-5">Website Dev</h3>
                    <p className="font-thin mb-5">
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link
                      href={"/contact"}
                      target="_blank"
                      className="flex gap-x-2 items-center "
                    >
                      <p className="underline">Start with us</p>
                      <i className="fa-solid fa-arrow-up rotate-45"></i>
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:absolute w-5/12 right-0 bottom-0">
                    <Image src={display} alt="desktop" className="" />
                  </div>
                </CardContent>
              </Card>

              <Card className="sm:col-span-4  overflow-hidden  ml-auto bg-[#262523] text-white pt-5 relative rounded-3xl">
                <CardContent className="sm:grid grid-cols-2 py-[40px] pl-[32px] ">
                  <div className="text ">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center mb-5">
                      <i className="fa-solid fa-xl fa-pen-nib"></i>
                    </div>
                    <h3 className="text-4xl font-bold mb-5">UI/UX Design</h3>
                    <p className="font-thin mb-5">
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link
                      href={"/contact"}
                      target="_blank"
                      className="flex gap-x-2 items-center "
                    >
                      <p className="underline">Start with us</p>
                      <i className="fa-solid fa-arrow-up rotate-45"></i>
                    </Link>
                  </div>
                  <div className=" hidden sm:block absolute w-4/12 right-0 bottom-0 ">
                    <Image src={mobile} alt="mobile" className="" />
                  </div>
                </CardContent>
              </Card>

              <Card className="sm:col-span-4  overflow-hidden  ml-auto bg-[#262523] text-white pt-5  rounded-3xl">
                <CardContent className="sm:grid grid-cols-2 py-[40px] pl-[32px] relative">
                  <div className="text ">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center mb-5">
                      <i className="fa-solid fa-xl fa-tag"></i>
                    </div>
                    <h3 className="text-4xl font-bold mb-5">AI Integration</h3>
                    <p className="font-thin mb-5">
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link
                      href={"/contact"}
                      target="_blank"
                      className="flex gap-x-2 items-center "
                    >
                      <p className="underline">Start with us</p>
                      <i className="fa-solid fa-arrow-up rotate-45"></i>
                    </Link>
                  </div>
                  <div className=" hidden sm:block absolute right-0 w-1/2">
                    <Image src={AI} alt="mobile" className="" />
                  </div>
                </CardContent>
              </Card>

              <Card className="sm:col-span-5  overflow-hidden  ml-auto bg-[#262523] text-white pt-5 relative rounded-3xl">
                <CardContent className="sm:grid grid-cols-2 py-[40px] pl-[32px] ">
                  <div className="text ">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center mb-5">
                      <i className="fa-solid fa-xl fa-bag-shopping"></i>
                    </div>
                    <h3 className="text-4xl font-bold mb-5">
                      Mobile app development
                    </h3>
                    <p className="font-thin mb-5">
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link
                      href={"/contact"}
                      target="_blank"
                      className="flex gap-x-2 items-center "
                    >
                      <p className="underline">Start with us</p>
                      <i className="fa-solid fa-arrow-up rotate-45"></i>
                    </Link>
                  </div>
                  <div className="hidden sm:block absolute w-4/12 right-0 bottom-0">
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
