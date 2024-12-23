import { QPCPricesData } from "@/lib/constants"

const QuickPriceCheck = () => {
    return (
        <section className="font-taviraj max-w-[1320px] mx-auto">
            <h3 className="text-[35px] text-center">Quick Price Check</h3>
            <div className="flex md:gap-1 flex-col md:flex-row mt-[50px]">
                {
                    QPCPricesData.map(item => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="bg-[#da9100] text-white md:items-center hover:bg-black flex flex-col md:flex-row flex-1 gap-6 md:gap-4 lg:gap-6 p-[15px] py-[35px] pl-6 md:pl-2 lg:pl-4 cursor-pointer transition-colors duration-300"
                            >
                                <Icon size={50} />
                                <div className="space-y-4">
                                    <p className="text-[22px]">{item.service}</p>
                                    <p className="text-[20px]">Start from ${item.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <h2 className="text-[30px] md:text-[60px] lg:text-[80px] text-center mt-[50px] font-Epilogue">
                RPC LIMO NATIONWIDE
            </h2>
            <p className="text-[35px] mt-[30px] text-center font-Mulish">Headquarters in New York serving multiple cities.</p>

            <div className="flex items-center justify-center text-white gap-[30px] font-Mulish text-[19px] mt-[45px]">
                <button className="px-[25px] py-[12px] bg-[#da9100] hover:bg-black  transition-colors duration-300">
                    View Price & Book A Ride
                </button>
                <button className="px-[25px] py-[12px] bg-[#da9100] hover:bg-black  transition-colors duration-300">
                    Toll free: 1-833 711 4606
                </button>
            </div>
        </section>
    )
}

export default QuickPriceCheck