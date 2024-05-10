import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="bg-[#1A1a1a] py-32 text-white ">
        <div className="container relative">
          <div className="w-5/6 text-lg">
            <h5 className="mb-5 tracking-[0.4em] text-[#666666]"> ABOUT US</h5>
            <p>
              At LA Projects, we are a dedicated development agency committed to
              creating exceptional digital experiences that drive success for
              our clients. With a passion for innovation and a team of skilled
              professionals, we bring your ideas to life through cutting-edge
              technology and creative solutions.
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
