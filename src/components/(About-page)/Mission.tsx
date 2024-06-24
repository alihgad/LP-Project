import React from "react";
import SmallSectionHeading from "../(global)/SmallSectionHeading";
import mission from "./../../../public/about/mission.jpeg";
import Image from "next/image";

export default function Mission() {
  return (
    <>
      <section className="py-3 lg:py-28 ">
        <div className="container font-open">
          <div className="lg:grid grid-cols-2 gap-10 ">
            <div>
              <SmallSectionHeading title="VISON & MISSION" />
              <h3 className="lg:text-3xl text-lg font-semibold mb-4">
                Dedicated professionals who are willing to stop at nothing, to
                help you and your enterprise prosper in the digital arena.
              </h3>
              <p className="uppercase text-blue-main">vision</p>
              <p className="text-muted-foreground text-base font-[400]">
                Our vision is to provide digital solutions designed for you to
                outperform your competition. We offer custom made solutions that
                are constructed with your future success in mind and are brought
                to you right now. Envisioning a future where creativity and
                innovation converge, our goal is to remain beside your
                organization driving you towards evolving, adapting and
                excelling in the ever-changing digital ecosystem. With our team
                of passionate professionals and our unwavering dedication, we
                aspire to equip your business with the tools needed to champion
                your industry, making an everlasting impact on your
                organization.
              </p>

              <p className="uppercase text-blue-main mt-4">mission</p>
              <p className="text-muted-foreground text-lg font-[400]">
                Our mission is to harness our collective creativity to
                revolutionize your business, delivering digital solutions that
                will be the key to your success. Through our innovative
                approaches, collaborative efforts, and precisely tailored
                software and AI solutions, we aim to ensure your organization
                thrives in the digital age. Our relentless commitment to your
                excellence and customer satisfaction, combined with your
                feedback at every step, makes us the indispensable partner in
                driving your business to the success you seek.
              </p>
            </div>

            <div className="pt-10 flex items-center ">
              <Image
                src={mission}
                alt="pc"
                className="rounded-2xl lg:w-10/12 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
