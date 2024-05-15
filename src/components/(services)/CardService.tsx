"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export default function CardService({
  className,
  src,
  headline,
}: {
  className?: string;
  src: string;
  headline: string;
}) {
  return (
    <>
      
        <div className="group relative z-30">
          <div className={`group-hover:bg-[#262523] group-hover:text-[#615EDF]  rounded-xl card p-12 font-open text-white bg-[#666]  transition-all duration-500`}>
            <Image src={src} alt={`${src}`} className="w-20 "/>
            <h6 className={`${className} mt-6 text-lg font-extrabold w-2/4 `}>
              {headline}
            </h6>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur. Sit lobortis.
            </p>
            <hr className="mt-3" />
          </div>
        </div>
    </>
  );
}
