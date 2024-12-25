import { servicesData } from "@/lib/constants";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Intro from "./Intro";

const Services = () => {
    return (
        <section className="max-w-[1320px] mx-auto">
            <Intro
                title={"Superior Limousine Services in New York by RPC Limo"}
                description={"RPC Limo exemplifies excellence in providing superior limousine services across the New York Metropolitan area. Whether facilitating your airport transfers, business meetings, or bespoke travel destinations, our luxury limo services epitomize sophistication and punctuality. Our dedication to first-class service extends globally, ensuring every client receives unparalleled attention to detail. From initial reservation to journey’s end, our experienced management team and professional chauffeurs are committed to crafting a seamless, distinguished travel experience for you."}
            />

            <div className="flex gap-5 flex-col md:flex-row mt-12">
                {
                    servicesData.map(service => (
                        <div key={service.id} className="bg-[#da9100] p-[20px] flex-1 flex flex-col justify-between">
                            <div>
                                <Image className="w-full " src={service.img} alt={service.title} />
                                <h4 className="mt-[30px] text-white font-[700] text-[22px] leading-[30px] font-Epilogue uppercase">{service.title}</h4>
                                <p className="mt-4 text-[18px] font-Mulish">{service.description}</p>
                            </div>
                            <div>
                                <button className="bg-black text-white py-[7px] px-[40px] font-[600] text-[18px] leading-[40px] mt-[30px] hover:text-black hover:bg-white cursor-pointer transition-colors duration-300">Explore</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center">
                <div className="bg-black text-white py-[7px] px-[40px] font-[600] text-[18px] leading-[40px] mt-[30px] flex justify-center items-center gap-3 cursor-pointer transition-colors duration-300 hover:bg-[#da9100]">
                    View All services
                    <FaLongArrowAltRight />
                </div>
            </div>
        </section>
    )
}

export default Services