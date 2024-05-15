import Header from "@/components/(global)/Header";
import Vision from "@/components/(About-page)/Vision";
import React from "react";
import Mission from "@/components/(About-page)/Mission";
import Team from "@/components/(About-page)/Team";

export default function page() {
  return (
    <>
      <Header bread="About" body="About us" />
      <div className="bg-[#ddd]">
        <Vision />
        <Mission />
        <Team/>
      </div>
    </>
  );
}
