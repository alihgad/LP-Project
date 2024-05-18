import Image from "next/image";
import React from "react";
import image from "./../../../public/work/w.jpeg";
import Link from "next/link";

export default function WorkCard() {
  return (
    <>
      <div className="font-jakarta font-medium mx-auto   rounded-xl  overflow-hidden group">
        <div className="relative overflow-hidden">
          <div className="absolute top-full group-hover:top-0 transition-all duration-500  h-full bottom-0 left-0 right-0 rounded-xl bg-[rgba(0,0,0,40%)] flex justify-center items-center ">
            <Link href={''}>
              <i className="fa-solid fa-arrow-circle-up text-white fa-3x rotate-45"></i>
            </Link>
          </div>

          <Image
            src={image}
            alt={"work"}
            width={366}
            className="aspect-square mx-auto  rounded-xl"
          />
        </div>
        <h6 className="text-xl  mt-5 mx-auto text-center md:text-left">
          Web site design
        </h6>
        <p className="text-base text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          perspiciatis!
        </p>
      </div>
    </>
  );
}
