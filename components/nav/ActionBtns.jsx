"use client";

import { FaPhone } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { IoReorderThreeOutline } from "react-icons/io5";

const ActionBtns = ({ screen, setMobileNavOpen }) => {

    return (
        <div>
            <div className={twMerge(`text-xs font-[700] gap-3 items-center hidden flex-col md:flex-row md:flex`, screen === 'mobile' ? 'flex md:hidden' : '')}>
                <div className='flex items-center justify-center gap-2 group cursor-pointer'>
                    <div className='p-1 border-2 border-black group-hover:border-white rounded-full transition-colors duration-300'>
                        <FaPhone className="group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="group-hover:text-white transition-colors duration-300">+88015 3467 2418</p>
                </div>
                <div className="flex gap-3">
                    <button className='text-xs px-[10px] py-[8px] rounded-md border-2 border-black hover:text-white hover:bg-black transition-colors duration-300'>BOOK NOW<br /> PAY LATER</button>
                    <button className='text-xs px-[10px] py-[8px] rounded-md border-2 border-black hover:text-white hover:bg-black transition-colors duration-300'>ACCOUNT<br /> LOGIN</button>
                </div>
            </div>
            <div className={twMerge(`md:hidden`, screen === 'mobile' ? 'hidden' : '')}>
                <IoReorderThreeOutline
                    onClick={() => setMobileNavOpen(true)}
                    className="cursor-pointer" size={30}
                />
            </div>
        </div>
    )
}

export default ActionBtns