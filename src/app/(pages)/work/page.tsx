import WorkCard from "@/components/(Work)/WorkCard";
import LargeSectionHeading from "@/components/(global)/LargeSectionHeading";
import React from "react";

export default function Work() {

  return (
    <>
      <section className="my-10">
        <div className="container ">
          <LargeSectionHeading
            heading=" Our Achievements"
            body=" Previous Partner Projects"
          />
          <div className="grid sm:grid-cols-2  lg:grid-cols-3 mt-6 gap-x-16 gap-y-6">
          <WorkCard aos="fade-right"/>
          <WorkCard aos="fade-up"/>
          <WorkCard aos="fade-left"/>
          <WorkCard aos="fade-right"/>
          <WorkCard aos="fade-up"/>
          <WorkCard aos="fade-left"/>
          </div>
        </div>
      </section>
    </>
  );
}
