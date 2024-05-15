import React from "react";
import CardService from "./CardService";
import SectionHeading from "../(global)/SectionHeading";
import pc from "./../../../public/LA icons/LA icons/pc.png";
import ai from "./../../../public/LA icons/LA icons/ai icon.png";
import ui from "./../../../public/LA icons/LA icons/ui ux icon.png";
import mobile from "./../../../public/LA icons/LA icons/mobile.png";
import { HoverEffect } from "../ui/card-hover-effect";

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
            <CardService hover={true} src={pc} headline="Web Develobment" />
            <CardService hover={true} src={ai} headline="AI Integration" />
            <CardService hover={true} className="width" src={mobile} headline="Mobile App Develobment" />
            <CardService hover={true} src={ui} headline="UI/UX Design" />
          </div>
          <HoverEffect

            items={[
            <CardService key={0} src={pc} headline="Web Develobment" />
            ,
            <CardService key={2} src={ai} headline="AI Integration" />,
            <CardService key={1} src={mobile} headline="Mobile App Develobment" className="width" />,
            <CardService key={3} src={ui} headline="UI/UX Design" />
                            
            ]}
          />
        </div>
      </section>
    </>
  );
}
