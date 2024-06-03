"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export default function CardService({
  className,
  src,
  headline,
  content,
}: {
  className?: string;
  src: string;
  headline: string;
  content:string;
}) {
  return (
    <>
      
        <div className="group  relative z-30 ">
          <div className={`flex flex-col justify-between group-hover:bg-[#262523] group-hover:text-[#615EDF] h-full rounded-xl card p-12 font-open text-white bg-[#666]  transition-all duration-500`}>
            <Image src={src} alt={`${src}`} className="w-20 "/>
            <h6 className={`${className} mt-6 text-lg font-extrabold w-2/4 `}>
              {headline}
            </h6>
            <p className="mt-6">
              {content}
            </p>
            <hr className="mt-3 relative" />
          </div>
        </div>
    </>
  );
}
