import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="bg-[#1A1a1a] py-20 md:py-32 text-white ">
        <div className="container relative">
          <div className="w-5/6 text-lg">
            <h5 className="mb-5 tracking-[0.4em] text-[#969595] font-syne">
              {" "}
              Your Ultimate Digital Partner
            </h5>
            <p className="font-open">
              At LA Projects, we deliver unparalleled dynamic software solutions
              in Web Development, AI Integration, Mobile App Development, and
              UI/UX Design. Our customer-centric approach ensures your feedback
              is valued at every step, providing simple, efficient, and
              up-to-date features. Enhance engagement, streamline operations,
              and drive growth with LA Projects—the single asset you need for
              unrivaled digital success.
            </p>
          </div>
          <div className="relative container">
            <Button className=" bg-blue-main  rounded-xl right-0 mr-2 absolute">
              <Link href={"/about"}> Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
