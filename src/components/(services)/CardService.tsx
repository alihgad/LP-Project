"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function CardService({
  className,
  src,
  headline,
  hover
}: {
  className?: string;
  src: StaticImageData;
  headline: string;
  hover?: boolean;
}) {
  return (
    <>
      
        <div className="group relative z-30">
          <div className={`${hover ? 'group-hover:bg-[#262523]' : null}  rounded-xl card p-12 font-open text-white bg-[#666]  transition-all duration-500`}>
            <Image src={src} alt="pc" />
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
