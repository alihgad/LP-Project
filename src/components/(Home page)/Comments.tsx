import React, { createContext } from "react";
import LargeSectionHeading from "../(global)/LargeSectionHeading";
import { Card, CardContent } from "../ui/card";
import man from "./../../../public/man.png";
import Image from "next/image";
import CommentsCarousal from "./CommentsCarousal";

export default function Comments() {
  return (
    <>
      <section>
        <div className="container py-5 mt-10  ">
          <LargeSectionHeading
            heading="our clients"
            body="what they say about us !"
          />
          <CommentsCarousal />
        </div>
      </section>
    </>
  );
}
