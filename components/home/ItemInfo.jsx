import { IoPerson } from "react-icons/io5";
import { FaLuggageCart } from "react-icons/fa";

const ItemInfo = ({ item }) => {

    return (
        <section>
            <h3 className="text-[25px] font-[700] font-Epilogue mt-5 mb-6">{item.title}</h3>
            <p className="text-[18px] leading-[30px]">{item.description}</p>

            <div className="p-[10px] space-y-5 mt-5">
                <div className="flex gap-3 items-center text-[17px] font-[700]">
                    <IoPerson size={23} />
                    <p>Passenger Capacity: {item.passengerCapacity}</p>
                </div>

                <div className="flex gap-3 items-center text-[17px] font-[700]">
                    <FaLuggageCart size={23} />
                    <p>Luggage Capacity: {item.luggageCapacity} bags</p>
                </div>

                <h3 className="font-[700] text-[30px]">Features:</h3>
                <div>
                    {
                        item.features.map((feature, i) => <li key={i} className="text-[18px] leading-[37px] pl-[45px]">
                            <span className="font-[700]">{feature.title}: </span>{feature.description}
                        </li>)
                    }
                </div>
            </div>
        </section>
    )
}

export default ItemInfo