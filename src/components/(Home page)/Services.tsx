import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="bg-white py-28">
        <div className="container">
          <div className="flex justify-center items-center flex-col">
            <h3 className="capitalize tracking-[0.4em] text-blue-main">
              our services
            </h3>
            <p>Let’s work together with our us</p>
          </div>
          <div className="mt-5 ">
            <div className="grid grid-cols-2">
              <Card>
                <CardContent>
                  <div className="text">
                    <i className="fa-solid fa-globe"></i>
                    <h3>Website Dev</h3>
                    <p>
                      help you to build website company that is modern, user
                      friendly, good CEO, and Clean design
                    </p>
                    <Link href={'/contact'}> Start with us <i className="fa-solid fa-arrow-up rotate-45"></i> </Link>
                  </div>
                </CardContent>
              </Card>
              <Card></Card>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </section>
    </>
  );
}
