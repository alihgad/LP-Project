import React from "react";
import { Card, CardContent } from "../ui/card";
import man from "./../../../public/man.png";
import Image from "next/image";

export default function Comment({ className }: { className: string }) {
  return (
    <div className="">
      <Card
        className={`md:mx-28  rounded-3xl bg-[#666666]  py-10 ${className}`}
      >
        <CardContent className="p-0">
          <div className="md:grid grid-cols-10 gap-x-10 sm:flex">
            <div className="col-span-2 md:grid grid-cols-4 sm:w-full">
              <div className="col-span-1"></div>

              <div className=" relative col-span-3 mx-auto   w-1/2 my-5 sm:w-full   sm:ml-10  md:ml-0 ">
                <div className=" rounded-full overflow-hidden sm:w-full ">
                  <Image src={man} alt="man" className="aspect-square w-full" />
                </div>
                <span className="h-8 w-8 rounded-full bg-blue-main flex justify-center items-center absolute bottom-0 right-0 sm:bottom-5 md:bottom-0">
                  <i className="text-white fa-solid fa-quote-left"></i>
                </span>
              </div>

            </div>
            <div className="col-span-7 mt-5 text-white font-sans font-thin px-5 md:px-0 sm:pt-5">
              <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur. Nisl nisl orci cras elit
                mollis id. Eget nisl adipiscing sit id lectus suspendisse quam
                tortor condimentum. Aliquet orci commodo vel et tristique felis
                nisl vivamus.
              </p>
              <div className="flex justify-between flex-wrap mt-5 md:flex-nowrap">
                <p>
                  Ashly smith
                  <span className="text-sm ml-5 font-medium text-[#3A3799]">
                    Sowftware Tester
                  </span>
                </p>

                <div className="satrs ml-auto">
                  <i className="fa-solid fa-star text-yellow-300 mr-1"></i>
                  <i className="fa-solid fa-star text-yellow-300 mr-1"></i>
                  <i className="fa-solid fa-star text-yellow-300 mr-1"></i>
                  <i className="fa-solid fa-star text-yellow-300 mr-1"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
