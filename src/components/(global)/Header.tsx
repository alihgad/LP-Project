import React from "react";
import Bread from "./Breadcumb";

export default function Header({bread , body}:{
  bread: string,
  body: string;
}) {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="flex justify-center items-start pt-40 lg:pt-80 pb-14 lg:pb-24 flex-col">
            <Bread current={bread}/>
            <h1 className="text-6xl lg:text-9xl font-bold font-sans  -tracking-[0.08em] text-white ">
              {body}
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}
