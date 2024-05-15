import Header from "@/components/(global)/Header";
import ServicesCards from "@/components/(services)/ServicesCards";
import React from "react";

export default function services() {
  return (
    <>
      <header>
        <Header bread="Services" body="services" />
      </header>
      <div className="bg-[#eee] ">
        <ServicesCards />
      </div>
    </>
  );
}
