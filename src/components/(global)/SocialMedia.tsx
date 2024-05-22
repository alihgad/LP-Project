import Link from "next/link";
import React from "react";

export default function SocialMedia() {
  return (
    <>
      <div className="sm:absolute mt-24 sm:mt-0 right-0  sm:top-1/2 sm:-translate-y-1/2 mr-4 sm:mr-0   text-white ml-1 md:-ml-[18px]">
        <Link
          className="hover:text-blue-main transition-all"
          target="_blank"
          href={"https://facebook.com"}
        >
          <i className="fa-brands fa-lg  ml-3 fa-facebook"></i>
        </Link>
        <Link
          className="hover:text-blue-main transition-all"
          target="_blank"
          href={"https://instagram.com"}
        >
          <i className="fa-brands fa-lg  ml-3 fa-instagram"></i>
        </Link>
        <Link
          className="hover:text-blue-main transition-all"
          target="_blank"
          href={"https://linkedin.com"}
        >
          <i className="fa-brands fa-lg  ml-3 fa-linkedin"></i>
        </Link>
      </div>
    </>
  );
}
