import React from "react";

export default function SmallSectionHeading({title}:{
  title:string
}) {
  return (
    <>
      <span className="w-2 h-2 rounded-full block bg-blue-main mb-2"></span>
      <p className="text-muted-foreground mb-1 lg:mb-6 text-base font-[400] font-jakarta">
        {title}
      </p>
    </>
  );
}
