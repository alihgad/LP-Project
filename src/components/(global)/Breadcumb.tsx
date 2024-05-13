import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Bread({current}:{
  current:string
} ){
  return (
    <>
      <Breadcrumb className="z-10 ">

        <BreadcrumbList>

          <BreadcrumbItem>
            <BreadcrumbLink className="text-white text-xs lg:text-base" href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbSeparator /> */}
            <div className="flex mt-2   "><span className="w-1 h-1 bg-white rounded-full text-xs"></span></div>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-blue-main text-xs lg:text-base">{current}</BreadcrumbPage>
          </BreadcrumbItem>
          
        </BreadcrumbList>

      </Breadcrumb>
    </>
  );
}
