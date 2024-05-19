import { Button } from "@/components/ui/button";
import error from "./../../public/404.svg";
import Image from "next/image";
import SocialMedia from "@/components/(global)/SocialMedia";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-28  pb-14 flex justify-center items-center flex-col bg-[#0d0d0d] text-white gap-5 ">
      <h1 className="font-syne text-5xl font-medium">Ooops!</h1>
      <Image src={error} alt={"error 404"} />
      <p className="font-open text-5xl font-normal capitalize">Page not found</p>
      <Button className="bg-blue-main hover:bg-blue-500">back to home page </Button>
      <div className="   flex  text-white -ml-[18px] mt-5">
        <Link
          className="hover:text-blue-main transition-all flex justify-center items-center"
          target="_blank"
          href={"https://facebook.com"}
        >
          <i className="fa-brands fa-lg  ml-3 fa-facebook mx-auto"></i>
        </Link>
        <Link
          className="hover:text-blue-main transition-all flex justify-center items-center"
          target="_blank"
          href={"https://instagram.com"}
        >
          <i className="fa-brands fa-lg  ml-3 fa-instagram"></i>
        </Link>
        <Link
          className="hover:text-blue-main transition-all flex justify-center items-center"
          target="_blank"
          href={"https://linkedin.com"}
        >
          <i className="fa-brands fa-lg  ml-3 fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
}
