import React from "react";

export default function Label({f , label}:{
    f:string;
    label:string;
}) {
  return (
    <>
      <label htmlFor={`${f}`} className="text-lg font-open font-normal capitalize text-muted-foreground mt-6 mb-2"> {label}</label>
    </>
  );
}
