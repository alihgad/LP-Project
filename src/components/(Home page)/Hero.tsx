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
          <p className=" sm:w-full   font-bold text-3xl sm:font-[700]  sm:text-[65px] leading-[60px]">
            We Make Great Digital Products For
            <span className="text-blue-main ml-1">Innovative Brands. </span>
          </p>
          <p className="sm:text-lg sm:font-medium sm:w-[65%] mt-7 font-open">
            we specialize in providing cutting-edge solutions for all your
            technological needs. With our team of skilled professionals and a
            passion for innovation, we help businesses transform their ideas
            into reality
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-5 ">
            <Input
              type="email"
              placeholder="Your work Email"
              className="bg-transparent rounded-[15px]"
            />
            <Button type="submit" className="bg-transparent border border-blue-main rounded-[15px] text-blue-main">
              Book a call
            </Button>
          </div>
          <section className="absolute -bottom-12 right-0 left-0">{children}</section>
        </div>
      </div>
    </section>
  );
}
