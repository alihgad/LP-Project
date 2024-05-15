'use client'
import SectionHeading from "../(global)/SectionHeading";
import TeamCard from "./TeamCard";



export default function Team() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <SectionHeading heading="OUR TEAM" body="Meet our talented team" />
          <div className="flex justify-between flex-col lg:flex-row gap-y-10">
            
            <TeamCard  index={0} name="Olivia Rhye" role="Founder & CEO" key={0} />
            <TeamCard  index={1} name="phoenix baker" role="Director" key={1} />
            <TeamCard  index={2} name="John doe" role="Software Developer" key={2} />
            <TeamCard  index={3} name="Emily Stafford" role="Visual designer " key={3} />

          </div>
        </div>
      </section>
    </>
  );
}
