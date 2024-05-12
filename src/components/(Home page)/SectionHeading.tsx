import React from "react";

export default function SectionHeading({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <div className="flex justify-center items-center flex-col text-center">
      <h3 className="uppercase tracking-[0.4em] text-blue-main font-semibold font-syne">
        {heading}
      </h3>
      <p className="sm:text-5xl text-3xl my-3 font-open">{body}</p>
    </div>
  );
}
