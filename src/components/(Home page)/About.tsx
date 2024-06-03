import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="bg-[#1A1a1a] py-20 md:py-32 text-white ">
        <div className="container relative">
          <div className="w-5/6 text-lg">
            <h5 className="mb-5 tracking-[0.4em] text-[#666666] font-syne">
              {" "}
              ABOUT US
            </h5>
            <p className="font-open">
              At LA Projects, we're a dynamic team of tech enthusiasts,
              passionate about transforming businesses through innovation.
              Specializing in custom software development, AI integration, and
              app creation, we thrive on crafting tailored solutions that drive
              efficiency and keep our clients ahead of the curve. With a
              commitment to simplicity and a pulse on industry trends, we're
              dedicated to empowering businesses to thrive in today's digital
              landscape. Choose LA Projects for cutting-edge solutions and a
              partner committed to your success.
            </p>
          </div>
          <div className="relative container">
            <Button className=" bg-blue-main  rounded-xl right-0 mr-2 absolute">
              <Link href={"/about"}>About us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
