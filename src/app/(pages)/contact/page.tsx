import Form from "@/components/(contactUs)/Form";
import Header from "@/components/(global)/Header";
import React from "react";

export default function Conatct() {
  return (
    <>
      <Header bread="Contact" body="Contact us" />
      <section className="bg-[#eee]">
        <div>
          <div className="flex justify-center items-center flex-col py-12 text-center">
            <h4 className="text-2xl lg:text-6xl font-bold mb-6">
              Tell us your great ideas
            </h4>
            <p className="text-base lg:text-2xl font-normal">
              Get in touch with us today to discuss your project{" "}
            </p>
            <p className="text-base lg:text-2xl font-normal">
              reach us anytime via{" "}
              <span className="text-[#615EDF]">LAPROJECTS@ui.com</span>
            </p>
          </div>
        </div>
        <div className="container pb-20">
          <div className="lg:w-1/2 mx-auto">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
