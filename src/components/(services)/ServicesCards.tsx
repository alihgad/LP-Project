import React from "react";
import CardService from "./CardService";
import LargeSectionHeading from "../(global)/LargeSectionHeading";
import pc from "./../../../public/LA icons/LA icons/desktop icon.svg";
import ai from "./../../../public/LA icons/LA icons/ai icon.svg";
import ui from "./../../../public/LA icons/LA icons/ui ux icon.svg";
import mobile from "./../../../public/LA icons/LA icons/mobile.svg";

export default function ServicesCards() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <LargeSectionHeading
            heading="OUR SERVICES"
            body="services we are providing to our clients"
          />
          <div className="flex justify-between mt-10 flex-col gap-8 lg:flex-row">
            <CardService  src={pc} headline="Web Develobment" />
            <CardService  src={ai} headline="AI Integration" />
            <CardService  className="width" src={mobile} headline="Mobile App Develobment" />
            <CardService  className="w-1/4" src={ui} headline="UI/UX Design" />
          </div>
        </div>
      </section>
    </>
  );
}
