import React from "react";
import SectionHeading from "./SectionHeading";
import mission from './../../../public/about/mission.jpeg'
import Image from "next/image";

export default function Mission() {
  return (
    <>
      <section className="py-3 lg:py-28 ">
        <div className="container font-open">
          <div className="lg:grid grid-cols-2 gap-10 ">
            <div>
              <SectionHeading />
              <h3 className="lg:text-5xl text-2xl font-semibold mb-4">
                Creative minds dedicated to transforming businesses
              </h3>
              <p className="uppercase text-blue-main">vission</p>
              <p className="text-muted-foreground text-lg font-[400]">
                was founded by a group of industry experts driven by a common
                goal: to empower businesses with impactful digital strategies.
                Our journey began with the belief that every brand has a unique
                story waiting to be told, and we set out to craft compelling
                narratives that resonate with audiences across various
                platforms.
              </p>

              <p className="uppercase text-blue-main mt-4">mission</p>
              <p className="text-muted-foreground text-lg font-[400]">
                Our approach combines data-driven insights, cutting-edge
                technology, and creative brilliance to deliver customized
                solutions that drive results. From comprehensive SEO strategies
                and engaging content creation to social media management and
                targeted advertising campaigns, we tailor our services to meet
                the specific needs and goals of each client.
              </p>
            </div>

            <div className="pt-10 flex items-center ">
                <Image src={mission} alt='pc' className="rounded-2xl lg:w-10/12 " />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
