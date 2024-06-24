import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id="home">
      <div className="h-screen  text-white ">
        <div className="sm:container px-3  text-center flex-col  flex justify-center items-center h-full">
          <p className=" sm:w-full font-syne   font-bold text-3xl sm:font-[700]  sm:text-[65px] leading-[60px]">
            Transform Your
            <span className="text-blue-main ml-1">Digital Experience </span>
            Today
          </p>
          <p className="sm:text-lg sm:font-medium sm:w-[65%] mt-7 font-open">
            Tired of mediocre websites and poor client retention? At LA
            Projects, we specialize in web solutions, AI integration, mobile
            apps, and UI/UX design. Your feedback drives our process, ensuring
            exceptional results every step of the way. Trust us to be your
            ultimate digital partner.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-5 ">
            <Input
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent rounded-[15px]"
            />
            <Button
              type="submit"
              className="bg-transparent border border-blue-main rounded-[15px] text-blue-main"
            >
              Book a call
            </Button>
          </div>
          <section className="absolute -bottom-9 md:-bottom-14 right-0 left-0">
            {children}
          </section>
        </div>
      </div>
    </section>
  );
}
