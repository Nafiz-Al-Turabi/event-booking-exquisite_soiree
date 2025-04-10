import Image from "next/image";
import bannar from "@/public/images/banner.png";
import herologo from "@/public/herologo.svg";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import BookingPolicy from "../BookingPolicy/BookingPolicy";
export default function HomePage() {
  return (
    <div>
      <header style={{ backgroundImage: `url(${bannar.src})` }} className="bg-cover bg-center h-screen flex items-center justify-center">
        <div className="">
          <div className="flex justify-center mb-[36px]">
            <Image
              src={herologo}
              alt="Logo"
              width={198}
              height={198}
              className="rounded-full w-28 sm:w-36 lg:w-[198px] h-auto"
            />
          </div>
          <div clssName="px-4 2xl:px-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[5.3125rem] analogue-font tracking-[1.0625rem] text-center font-bold lg:font-normal">EXQUISITE SOIRÉE</h1>
            <p className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[3rem] text-center analogue-font text-white">Luxury Restroom & Photo Booth Rentals for Your Events</p>
          </div>
          
        </div>
      </header>
      <div clssName="my-[227px]">
        <CompanyOverview />
        <BookingPolicy/>
      </div>
    </div>
  );
}