import React from "react";
import CardService from "./CardService";
import SectionHeading from "../(global)/SectionHeading";

export default function ServicesCards() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <SectionHeading
            heading="OUR SERVICES"
            body="services we are providing to our clients"
          />
          <div className="flex justify-between mt-10 flex-col gap-8 lg:flex-row">
            <CardService className="lg:pr-6"/>
            <CardService className="lg:px-6"/>
            <CardService className="lg:px-6"/>
            <CardService className="lg:pl-6"/>
          </div>
        </div>
      </section>
    </>
  );
}
