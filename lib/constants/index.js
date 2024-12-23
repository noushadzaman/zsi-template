import { FaClockRotateLeft } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa";
import ServiceImg1 from "@/public/service01.webp";
import ServiceImg2 from "@/public/service02.webp";
import ServiceImg3 from "@/public/service03.webp";

const QPCPricesData = [
  {
    id: 1,
    service: "Hourly Rate",
    price: 60,
    icon: FaClockRotateLeft,
  },
  {
    id: 2,
    service: "LGA AIRPORT",
    price: 80.0,
    icon: FaPlaneDeparture,
  },
  {
    id: 3,
    service: "JFK AIRPORT",
    price: 90.0,
    icon: FaPlaneDeparture,
  },
  {
    id: 4,
    service: "EWR AIRPORT",
    price: 100.0,
    icon: FaPlaneDeparture,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Airport Transfers",
    description:
      "Embark on a seamless journey with our elite airport car service. Whether you’re touching down or taking off from John F. Kennedy International Airport (JFK), LaGuardia Airport (LGA), or Newark Liberty International Airport (EWR), or venturing through the bustling streets of New York, we ensure a comfortable and timely experience. Book your distinguished travel adventure with us today, and traverse the iconic cityscape of New York with ease and elegance.",
    img: ServiceImg1,
  },
  {
    id: 2,
    title: "CORPORATE TRAVEL",
    description:
      "For supreme travel accommodations within the realm of transportation, RPC Limo Worldwide is your definitive choice. We harbor immense pride in being a distinguished luxury town car service, committed to delivering a superior travel experience to diligent corporate professionals like yourself. Our substantial history of serving numerous revered clients across New York and beyond has fortified our reputation as one of the most trustworthy executive car",
    img: ServiceImg2,
  },
  {
    id: 3,
    title: "Weddings Transfers",
    description:
      "As you approach the threshold of a new beginning, your wedding day stands as a testament to love and partnership. It's an event brimming with precious moments destined to become treasured memories. In the tapestry of this significant day, every single thread — including your transportation — is woven with care. Let RPC Limo elevate your arrival and departure to the epitome of elegance and class, ensuring that every movement is as flawless as your union.",
    img: ServiceImg3,
  },
];

export { QPCPricesData, servicesData };
