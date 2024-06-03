import React from "react";
import SmallSectionHeading from "../(global)/SmallSectionHeading";
import mission from "./../../../public/about/mission.jpeg";
import Image from "next/image";

export default function Mission() {
  return (
    <>
      <section className="py-3 lg:py-28 ">
        <div className="container font-open">
          <div className="lg:grid grid-cols-2 gap-10 ">
            <div>
              <SmallSectionHeading title="VISON & MISSION" />
              <h3 className="lg:text-5xl text-2xl font-semibold mb-4">
                Creative minds dedicated to transforming businesses
              </h3>
              <p className="uppercase text-blue-main">vision</p>
              <p className="text-muted-foreground text-lg font-[400]">
                Our vision at LA Projects is to be the forefront of innovation,
                recognized as the premier partner for businesses seeking
                transformation through technology. We envision a future where
                creativity and innovation converge to unlock new possibilities,
                where businesses are empowered to adapt, evolve, and excel in an
                ever-changing landscape. With our team of passionate
                professionals and our unwavering dedication to our mission, we
                aspire to reshape industries, inspire change, and leave a
                lasting impact on the businesses we serve.
              </p>

              <p className="uppercase text-blue-main mt-4">mission</p>
              <p className="text-muted-foreground text-lg font-[400]">
                Our mission at LA Projects is to harness the collective power of
                creative minds dedicated to transforming businesses. We strive
                to innovate, collaborate, and deliver tailored software
                solutions and AI technologies that empower companies to thrive
                in the digital age. With a relentless commitment to excellence
                and customer satisfaction, we aim to be the catalysts for
                positive change, driving growth and success for our clients.
              </p>
            </div>

            <div className="pt-10 flex items-center ">
              <Image
                src={mission}
                alt="pc"
                className="rounded-2xl lg:w-10/12 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
