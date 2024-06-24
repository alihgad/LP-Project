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
          <div className=" mt-10 grid grid-cols-4 gap-5 ">
            <CardService key={0} content="Fast, secure, scalable websites for your business."  src={pc} headline="Web Develobment" />
            <CardService key={1} content="Boost efficiency with tailored AI solutions."  src={ai} headline="AI Integration" />
            <CardService key={2} content="High-quality apps for iOS and Android." className="w-3/4"  src={mobile} headline="Mobile App Develobment" />
            <CardService key={3} content=" Simple, elegant designs that make using them a pleasure."  src={ui} headline="UI/UX Design" />
          </div>
        </div>
      </section>  
    </>
  );
}
