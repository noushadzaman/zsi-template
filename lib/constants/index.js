import { FaClockRotateLeft } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa";
import ServiceImg1 from "@/public/service01.webp";
import ServiceImg2 from "@/public/service02.webp";
import ServiceImg3 from "@/public/service03.webp";
import CarA1 from "@/public/car-a-1.png";
import CarA2 from "@/public/car-a-2.png";
import CarB1 from "@/public/car-b-1.jpg";
import CarB2 from "@/public/car-b-2.jpg";
import CarC1 from "@/public/car-c-1.jpg";
import CarC2 from "@/public/car-c-2.jpg";
import CarD1 from "@/public/car-d-1.jpg";
import CarD2 from "@/public/car-d-2.jpg";
import CarE1 from "@/public/car-e-1.jpg";
import CarE2 from "@/public/car-e-2.jpg";

const navData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
    childRoutes: [
      {
        label: "Corporate Travel",
        href: "/",
      },
      {
        label: "Airport Transfer",
        href: "/",
      },
      {
        label: "Weddings Service",
        href: "/",
      },
      {
        label: "Exclusive Town Car",
        href: "/",
      },
      {
        label: "Cruise transportation",
        href: "/",
      },
      {
        label: "Homecoming prom",
        href: "/",
      },
      {
        label: "Night out transportation",
        href: "/",
      },
      {
        label: "Bachelor party transfer",
        href: "/",
      },
      {
        label: "Hourly Transportation",
        href: "/",
      },
    ],
  },
  {
    label: "Fleet",
    href: "/",
  },
  {
    label: "Get A Quote",
    href: "/get-a-",
  },
  {
    label: "Contact",
    href: "/",
  },
  {
    label: "Rate",
    href: "/",
    childRoutes: [
      {
        label: "LGA limo rates",
        href: "/",
      },
      {
        label: "JFK Limo Rates",
        href: "/",
      },
      {
        label: "EWR Limo Rates",
        href: "/",
      },
      {
        label: "Hourly Rate",
        href: "/",
      },
    ],
  },
  {
    label: "Driver login",
    bold: true,
    href: "/login",
  },
];

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

const fleetData = [
  {
    id: 1,
    title: "LINCOLN MKT STRETCH LIMOUSINE",
    value: "lincoln-mkt-stretch-limousine",
    description:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
    imges: [CarA1, CarA2, CarA1, CarA2],
    passengerCapacity: "7-8",
    luggageCapacity: "5",
    features: [
      {
        title: "Spacious Interior for Comfort",
        description:
          "Designed to comfortably seat up to 7 passengers, the interior of the Lincoln MKT Stretch Limousine is a blend of elegance and practicality, ensuring every journey is a memorable one.",
      },
      {
        title: "Ample Luggage Space",
        description:
          "With the capacity to hold up to 5 pieces of luggage, this limousine is ideal for airport transfers, business travel, or special events where you need to carry extra baggage without compromising on style.",
      },
      {
        title: "Luxury Meets Technology",
        description:
          "Immerse yourself in the luxurious amenities, including advanced infotainment systems, climate control for personalized comfort, and ambient lighting to set the mood.",
      },
      {
        title: "Performance and Safety Combined",
        description:
          "Experience the smooth power of its engine, ensuring a tranquil journey, while relying on the comprehensive safety features for a secure ride every time.",
      },
    ],
  },
  {
    id: 2,
    title: "MERCEDES-BENZ SPRINTER CREW VAN 2500",
    value: "mercedes-benz-sprinter-crew-van-2500",
    description:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
    imges: [CarB1, CarB2, CarB1, CarB2],
    passengerCapacity: "7-8",
    luggageCapacity: "5",
    features: [
      {
        title: "Spacious Interior for Comfort",
        description:
          "Designed to comfortably seat up to 7 passengers, the interior of the Lincoln MKT Stretch Limousine is a blend of elegance and practicality, ensuring every journey is a memorable one.",
      },
      {
        title: "Ample Luggage Space",
        description:
          "With the capacity to hold up to 5 pieces of luggage, this limousine is ideal for airport transfers, business travel, or special events where you need to carry extra baggage without compromising on style.",
      },
      {
        title: "Luxury Meets Technology",
        description:
          "Immerse yourself in the luxurious amenities, including advanced infotainment systems, climate control for personalized comfort, and ambient lighting to set the mood.",
      },
      {
        title: "Performance and Safety Combined",
        description:
          "Experience the smooth power of its engine, ensuring a tranquil journey, while relying on the comprehensive safety features for a secure ride every time.",
      },
    ],
  },
  {
    id: 3,
    title: "LINCOLN NAVIGATOR",
    value: "lincoln-navigator",
    description:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
    imges: [CarC1, CarC2, CarC1, CarC2],
    passengerCapacity: "7",
    luggageCapacity: "5-7",
    features: [
      {
        title: "Elegant and Spacious Interior",
        description:
          "The Navigator’s interior is a realm of luxury, featuring sumptuous seating, premium materials, and a spacious layout, ensuring a comfortable ride for passengers and ample room for luggage.",
      },
      {
        title: "State-of-the-Art Technology",
        description:
          "Stay connected and entertained with the Navigator’s advanced infotainment system, ensuring every journey is enjoyable and seamless.",
      },
      {
        title: "Robust Performance",
        description:
          "Powered by a strong and efficient engine, the Navigator provides a smooth, commanding driving experience, ideal for both city streets and adventurous paths.",
      },
      {
        title: "Optimal Safety Standards",
        description:
          "Equipped with cutting-edge safety features, the Navigator places the utmost importance on the security and well-being of its passengers.",
      },
    ],
  },
  {
    id: 4,
    title: "SUV CADILLAC ESCALADE",
    value: "suv-cadillac-escalade",
    description:
      "Step into a world of refined luxury with the SUV Cadillac Escalade, an emblem of sophistication and strength in the world of premium vehicles. This SUV combines elegant design, advanced technology, and robust performance to deliver an extraordinary driving experience.",
    imges: [CarD1, CarD2, CarD1, CarD2],
    passengerCapacity: "6-7",
    luggageCapacity: "5-6",
    features: [
      {
        title: "Luxury Redefined Interior",
        description:
          "The Cadillac Escalade’s interior boasts opulent seating, high-end materials, and an expansive design, offering ultimate comfort and space for both passengers and their luggage.",
      },
      {
        title: "Cutting-Edge Technology Integration",
        description:
          "Experience innovation at your fingertips with the Escalade’s advanced infotainment and connectivity features, enhancing every journey with entertainment and ease.",
      },
      {
        title: "Dynamic Performance",
        description:
          "Powered by a potent engine, the Escalade offers a smooth yet powerful ride, adept at navigating diverse terrains and urban landscapes alike.",
      },
      {
        title: "Prioritized Safety",
        description:
          "The Escalade is fitted with comprehensive safety systems, ensuring peace of mind for all occupants on every trip.",
      },
    ],
  },
  {
    id: 5,
    title: "MERCEDES BENZ S580",
    value: "mercedes-benz-s580",
    description:
      "Experience the epitome of automotive luxury with the Mercedes Benz S580, a masterpiece of engineering and elegance. This sedan is the embodiment of high- end sophistication, offering an unmatched blend of performance, comfort, and innovation.",
    imges: [CarE1, CarE2, CarE1, CarE2],
    passengerCapacity: "4",
    luggageCapacity: "3-4",
    features: [
      {
        title: "Refined and Opulent Interior",
        description:
          "Step inside the Mercedes Benz S580 to discover a haven of luxury, with plush seating, exquisite materials, and a spacious cabin designed for maximum comfort and style.",
      },
      {
        title: "Advanced Technology at Your Fingertips",
        description:
          "Equipped with the latest in automotive technology, the S580 features an intuitive infotainment system, ensuring every journey is enjoyable and connected.",
      },
      {
        title: "Performance Excellence",
        description:
          "The Mercedes-Benz Premium Sedan is equipped with a powerful and efficient engine, delivering a smooth and responsive driving experience.",
      },
      {
        title: "Exemplary Performance",
        description:
          "The S580 boasts a powerful and efficient engine, delivering a driving experience that is both dynamic and smooth, suitable for any road or journey.",
      },
      {
        title: "Uncompromising Safety Standards",
        description:
          "With a suite of advanced safety features, the S580 prioritizes the well-being of all passengers, ensuring a secure and worry-free travel experience.",
      },
    ],
  },
];

const clientData = [
  {
    id: 1,
    name: "Henry Cavil",
    rating: 5,
    review:
      "Impeccable service! From punctuality to the pristine condition of the vehicles, RPC Limo made our corporate event seamless and stylish. Highly recommended!",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Henry_Cavill_%2848417913146%29_%28cropped%29.jpg/800px-Henry_Cavill_%2848417913146%29_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "David Corenswet",
    rating: 4,
    review:
      "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and the professionalism of the chauffeurs were outstanding.",
    imgUrl:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YJHPTTEY2G5TC4SIAVYY3FM7R4.jpg&w=1440&impolicy=high_res",
  },
];

const FAQData = [
  {
    id: 1,
    question: "What types of vehicles are available in your fleet?",
    answer:
      "Our fleet at RPC Limo includes a variety of luxury vehicles such as stretch limousines for grand entrances, spacious SUV limos for larger groups, and elegant sedans for a more intimate experience. Each vehicle is regularly inspected and maintained to ensure safety and comfort.",
  },
  {
    id: 2,
    question: "Are your chauffeurs experienced?",
    answer:
      "Yes, each RPC Limo chauffeur is a highly trained professional. They are licensed, undergo thorough background checks, and possess extensive knowledge of the New York area to ensure a smooth and efficient ride.",
  },
  {
    id: 3,
    question: "What amenities can I expect in a RPC Limo?",
    answer:
      "Our limousines offer an array of luxurious amenities including plush leather seating, advanced multimedia entertainment systems, climate control, privacy partitions, and complimentary refreshments. The available features may vary depending on the chosen vehicle.",
  },
  {
    id: 4,
    question: "What is the minimum age requirement to rent a limo?",
    answer:
      "The primary person renting the limo must be at least 21 years old. We require a valid ID for verification and compliance with our rental policies.",
  },
  {
    id: 5,
    question: "What if I encounter a problem during my service?",
    answer:
      "In the unlikely event of a problem, RPC Limo provides 24/7 customer support and roadside assistance to resolve any issues promptly and ensure your travel remains uninterrupted.",
  },
  {
    id: 6,
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes, we offer flexible reservation policies. You can modify or cancel your booking according to the terms outlined in your rental agreement, which are designed for your convenience.",
  },
  {
    id: 7,
    question: "How does RPC Limo ensure passenger safety during the ride?",
    answer:
      "Safety is our utmost concern. Apart from professional chauffeurs and well-maintained vehicles, we adhere to strict safety protocols and regularly update our practices to meet the highest standards of the limousine service industry.",
  },
];

const footerData = {
  firstColPara:
    "Spanning from the bustling energy of New York to over 300 cities worldwide, RPC Limo is your trusted partner in sophisticated travel logistics. We pledge to provide a smooth transition from the outset of your journey to its conclusion, ensuring every leg of your trip is executed with precision and elegance.",
  secondColLinks: [
    {
      label: "Our Fleet",
      href: "#",
    },
    {
      label: "Our Gallery",
      href: "#",
    },
    {
      label: "Contact Us",
      href: "#",
    },
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Book A Ride",
      href: "#",
    },
  ],
  thirdColLinks: [
    {
      label: "Corporate Travel",
      href: "#",
    },
    {
      label: "Airport Transfer",
      href: "#",
    },
    {
      label: "Wedding Transfer",
      href: "#",
    },
    {
      label: "Charter Service",
      href: "#",
    },
    {
      label: "Cruise Port Transfer",
      href: "#",
    },
  ],
  fourthColParas: [
    "If you are a rider or want to use our platform to ride please download RPC LIMO app.",
    "If you are a driver or want to drive with us please download RPC DRIVER app.",
  ],
};

export {
  navData,
  QPCPricesData,
  servicesData,
  fleetData,
  clientData,
  FAQData,
  footerData,
};
