import { Button } from "@/components/ui/button";
import Image from "next/image";
import vision1 from "./../../../public/about/vision1.jpeg";
import vision2 from "./../../../public/about/vision2.jpeg";
import Link from "next/link";
import SmallSectionHeading from "../(global)/SmallSectionHeading";

export default function Vision() {
  return (
    <>
      <section className="pb-20  lg:pt-12 ">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 gap-6 area ">
            <div className="font-open py-8 ">
              <SmallSectionHeading title="ABOUT US" />
              <h3 className="lg:text-4xl text-2xl font-bold -mt-5">
                Get to know about
                <span className="text-blue-main lg:block"> LA projects</span>
              </h3>

              <p className="font-[500] text-base mt-2 text-muted-foreground">
                LA Projects is a dynamic software company specializing in
                tailored solutions for businesses, offering an array of services
                including custom software development, AI chatbot integration,
                app creation, and AI integration. With a steadfast commitment to
                simplicity, efficiency, and staying abreast of industry trends,
                LA Projects delivers innovative solutions that empower companies
                to streamline operations, enhance customer engagement, and drive
                growth. By harnessing cutting-edge technologies and a
                customer-centric approach, LA Projects is dedicated to helping
                businesses thrive in today's rapidly evolving digital
                landscape
              </p>
              <Link href={"/work"} target="_blank" className=" hidden lg:block">
                <Button className="bg-blue-main mt-5 capitalize rounded-xl">
                  see all projects
                </Button>
              </Link>
            </div>

            <div className="relative -left-3 sm:left-0 ">
              <Image
                src={vision1}
                alt="workwer"
                className="gray absolute -bottom-10 left-5 lg:-bottom-8 lg:left-20 w-1/2 lg:w-64"
              />
              <Image
                src={vision2}
                alt="workwer"
                className="w-7/12   ml-auto "
              />
              <div className="absolute top-0 left-0  h-2/5 w-5/12 sm:hidden xl:block">
                <span className="rounded-full bg-blue-main block absolute w-4 h-4 top-3 right-20 lg:w-5 lg:h-5 lg:right-36 lg:top-4"></span>
                <span className="rounded-full bg-blue-main block absolute w-6 h-6 lg:w-9 lg:h-9 right-12 bottom-12  lg:right-20 lg:bottom-20 "></span>
                <span className="rounded-full bg-blue-main block absolute w-9 h-9 lg:w-12 lg:h-12 right-2 bottom-2 lg:right-4 lg:bottom-5"></span>
              </div>
            </div>

            <Link href={"/work"} target="_blank" className=" lg:hidden">
              <Button className="bg-blue-main mt-20 w-full  capitalize rounded-xl">
                see all projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
