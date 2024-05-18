import React from "react";

export default function Check({check , head , body}:{
  check : boolean
  head : string
  body? : string
}) {
  return (
    <>
      <div className="flex gap-x-8 my-6 group">
        <div className="mt-2">
          <i className={`fa-solid fa-check-circle fa-3x group-hover:bg-white transition-all duration-500 group-hover:text-[#615EDF] bg-[#615EDF] rounded-full  `}></i>
        </div>
        <div className="text font-open">
          <h6 className="text-2xl font-semibold">{head}</h6>
          <p className="text-muted-foreground text-base font-medium text-balance">
            {body? body : `Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus
            lobortis leo amet leo faucibus. Proin.`}</p>
        </div>
      </div>
    </>
  );
}
