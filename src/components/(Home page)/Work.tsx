import React from "react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import second from "./../../../public/work/second.png";
import therd from "./../../../public/work/therd.png";
import fourth from "./../../../public/work/fourth.png";
import { Button } from "../ui/button";

export default function Work() {
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="md:px-[60px] ">
            <SectionHeading
              heading="OUR WORK"
              body="Witness Our Success Stories"
            />
            <div className="flex-col md:flex-row flex md:cont">
              <div className="sm:w-50 px-5">
                <div className="md:first row-span-3 rounded-xl overflow-hidden mb-5">
                  <Image src={second} alt="second" className="first " />
                </div>
                <div className="md:therd row-span-3 rounded-xl overflow-hidden md:mb-0 mb-5">
                  <Image src={therd} alt="second" className="therd" />
                </div>
              </div>
              <div className="w-50 px-5">
                <div className="md:second row-span-2 rounded-xl overflow-hidden mb-5">
                  <Image src={second} alt="second" className="second" />
                </div>

                <div className="md:fourth row-span-2 rounded-xl overflow-hidden  mb-5">
                  <Image src={fourth} alt="second" className="fourth" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="bg-blue-main">see all projects</Button>
          </div>
        </div>
      </section>
    </>
  );
}
