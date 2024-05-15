import Image from "next/image";
import React from "react";
import pc from "./../../../public/LA icons/LA icons/pc.png";
import

export default function CardService({className}:{
    className?:string,
}) {
  return (
    <>
      <div className={className}>
        <div className="rounded-xl card p-10 font-open text-white bg-[#666]">
          <Image src={pc} alt="pc" />
          <h6 className="mt-6 text-lg font-extrabold">Website Development</h6>
          <p className="mt-6">Lorem ipsum dolor sit amet consectetur. Sit lobortis.</p>
          <hr className="mt-3"/>
        </div>
      </div>
    </>
  );
}
