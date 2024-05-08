import React from "react";
import star from "./../../public/star.svg";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <section className="w-[1700px] -translate-x-20">
        <div className=" py-6 bg-blue-banner FONT-[600] text-[20px] text-white text-lg flex items-center justify-evenly">
          <p>WEB DEVELOPMENT</p>
          <Image height={50} src={star} alt="star" />
          <p>MOBILE APP DEVELOPMENT</p>
          <Image height={50} src={star} alt="star" />
          <p>AI INTEGRATION</p>
          <Image height={50} src={star} alt="star" />
          <p>UI/UX DESIGN</p>
          <Image height={50} src={star} alt="star" />
          <p>WEB DEVELOPMENT </p>
          <Image height={50} src={star} alt="star" />
          <p>CUSTOM SOFTWARE DEVELOPMENT </p>
          <Image height={50} src={star} alt="star" />
        </div>
      </section>
    </>
  );
}
