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
              <div className="mb-5">
                <SmallSectionHeading title="ABOUT US" />
              </div>{" "}
              <h3 className="lg:text-4xl text-2xl font-bold -mt-5">
                Crafting with your needs
                <span className="text-blue-main lg:block"> in mind</span>
              </h3>
              <p className="font-[400] text-base mt-2 text-muted-foreground">
                Here at LA projects we are ready to take on your challenge and
                provide you with unparalleled dynamic software solutions,
                specializing in Web Development, AI integration, Mobile app
                development & UI/UX designing. Our team is committed to provide
                your specialized web solution with simplicity, up-to-date
                features, and efficiency, plus making sure that you are on top
                of what we do for you here at LA Projects. LA Projects digital
                services equip you with the best web solutions through
                cutting-edge technologies and a customer-centric approach to
                enhance customer engagement, streamline operations, manage and
                drive growth for your business: the single asset that you need
                to build your own unrivaled engagement generator
              </p>
              <Link href={"/work"} target="_blank" className=" hidden lg:block">
                <Button className="bg-blue-main mt-5 capitalize rounded-xl">
                  see our projects
                </Button>
              </Link>
            </div>

            <div className="relative -left-3 sm:left-0 ">
              <Image
                src={vision1}
                alt="workwer"
                className="gray absolute -bottom-10 left-5 lg:bottom-0 lg:left-20 w-1/2 lg:w-64"
              />
              <Image
                src={vision2}
                alt="workwer"
                className="w-7/12   ml-auto "
              />
              <div className="absolute top-0 left-0  h-2/5 w-5/12 sm:hidden xl:block">
                <span className="rounded-full bg-blue-main block absolute w-4 h-4 top-3 right-20 lg:w-5 lg:h-5 lg:right-36 lg:top-8"></span>
                <span className="rounded-full bg-blue-main block absolute w-6 h-6 lg:w-9 lg:h-9 right-12 bottom-12  lg:right-20 lg:bottom-20 "></span>
                <span className="rounded-full bg-blue-main block absolute w-9 h-9 lg:w-12 lg:h-12 right-2 bottom-2 lg:right-4 lg:bottom-5"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
