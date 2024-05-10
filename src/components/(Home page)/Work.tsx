import React from "react";
import SectionHeading from "../ui/SectionHeading";
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
            <div className=" mt-5 grid grid-cols-2 place-items-stretch">
              <div className="h-4/6">
                <Image src={second} alt="second" className=" " />
              </div>
              <div className="h-4/6">
                <Image src={second} alt="second" className="" />
              </div>
              <div className="h-2/6">
                <Image src={therd} alt="second" className="" />
              </div>
              <div className="h-2/6">
                <Image src={fourth} alt="second" className="" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
          <Button className='bg-blue-main'>see all projects</Button>
          </div>
        </div>
      </section>
    </>
  );
}
