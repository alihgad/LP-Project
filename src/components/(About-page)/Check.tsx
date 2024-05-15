import React from "react";

export default function Check({check , head , body}:{
  check : boolean
  head : string
  body? : string
}) {
  return (
    <>
      <div className="flex gap-x-4 my-6">
        <div className="mt-2">
          <i className={`fa-solid fa-check-circle fa-xl ${ check ?  'text-[#615EDF]' : null}`}></i>
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
