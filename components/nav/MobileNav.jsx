"use client";

import { navData } from "@/lib/constants";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const MobileNav = ({ setMobileNavOpen }) => {
    const [openedChildRoutes, setOpenedChildRoutes] = useState('');

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleOpenChildRoute = (route) => {
        if (route === openedChildRoutes) {
            setOpenedChildRoutes('');
        }
        else {
            setOpenedChildRoutes(route)
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: '100%' }}
                whileInView={{ x: 0 }}
                className="bg-[#151820] bg-opacity-95 absolute top-0 bottom-0 right-0 z-50 text-[20px] font-[700] flex flex-col gap-3 w-[90%] px-7 mt-[57px] text-white overflow-y-scroll pb-10">
                <div className="flex justify-end w-full pt-4 pb-5 text-white/80 ">
                    <RxCross2 onClick={() => setMobileNavOpen(false)} className="hover:rotate-90 cursor-pointer transition duration-300 " />
                </div>
                {
                    navData.map((navItem, i) => (
                        <div key={i}>
                            <div className="flex items-center justify-between group" >
                                <a className={twMerge('hover:text-rose-800', `${navItem.label === openedChildRoutes && 'text-rose-800'}`)} href={navItem.href}>
                                    {navItem.label}
                                </a>
                                {
                                    navItem.childRoutes &&
                                    <RiArrowDownSLine
                                        className={twMerge("cursor-pointer", navItem.label === openedChildRoutes && 'text-rose-800')}
                                        onClick={() => handleOpenChildRoute(navItem.label)}
                                    />
                                }
                            </div>

                            {
                                navItem.label === openedChildRoutes &&
                                <AnimatePresence>
                                    <motion.ul
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 16,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className={twMerge(
                                            "flex flex-col gap-4"
                                        )}
                                    >
                                        {
                                            navItem.childRoutes.map((route, i) =>
                                                <li className="text-sm relative group" key={i}>
                                                    <div className="size-1 rounded-full group-hover:w-4 group-hover:bg-rose-800 bg-gray-400 absolute top-2 transition-all duration-100">

                                                    </div>
                                                    <a href={route.href} className={twMerge('text-[20px] text-white group-hover:text-rose-800 pl-7', `${route.label === openedChildRoutes && 'text-rose-800'}`)}>{route.label}</a>
                                                </li>
                                            )
                                        }
                                    </motion.ul>
                                </AnimatePresence>
                            }
                        </div>
                    ))
                }
            </motion.div>
        </AnimatePresence>
    )
}

export default MobileNav