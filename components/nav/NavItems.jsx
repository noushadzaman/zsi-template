"use client";

import { navData } from "@/lib/constants"
import { Fragment, useState } from "react"
import { RiArrowDownSLine } from "react-icons/ri"
import { twMerge } from "tailwind-merge"
import MoreButton from "./MoreButton"
import { AnimatePresence, motion } from "framer-motion";

const NavItems = ({ navItemsNumber }) => {
    const [hoveredOn, setHoveredOn] = useState('');

    return (
        <nav className='hidden md:block'>
            <div className='pl-12 flex h-[111px]'>
                {
                    navData.slice(0, navItemsNumber !== null ? navItemsNumber : navData.length).map((item, i) => (
                        <div key={i}
                            onMouseLeave={() => setHoveredOn('')}
                            className='text-[15px] pr-4 font-[600] relative group'>
                            <div
                                onMouseEnter={() => setHoveredOn(item.label)}
                                className={twMerge(`hover:text-white flex items-center gap-2 shrink-0 cursor-pointer h-[100%]`, item.bold ? 'font-extrabold' : '')}>
                                <a href={item.href}>{item.label}</a>
                                {
                                    item.childRoutes &&
                                    <RiArrowDownSLine className='group-hover:rotate-90 transition-transform duration-300' />
                                }
                            </div>
                            {item.childRoutes?.length > 0 && item.label === hoveredOn &&
                                <AnimatePresence>
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 24,
                                            opacity: 0
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 0,
                                            opacity: 100
                                        }}
                                        exit={{
                                            height: 24,
                                            marginTop: 0,
                                            opacity: 0
                                        }}
                                        transition={{
                                            ease: "linear",
                                            duration: 0.1
                                        }}
                                        className={twMerge(`duration-300 absolute group-hover:top-[111px] top-[130px] z-20`, ``)}
                                    >
                                        {
                                            item.childRoutes.map((item, i) => (
                                                <Fragment key={i}>
                                                    <hr className='first:hidden border-[#e8ac35]' />
                                                    <div className='hover:text-white flex items-center gap-2 text-[15px] font-[600] cursor-pointer shrink-0 bg-[#da9100] w-[290px] p-4 transition-colors duration-300'>
                                                        <a href={item.href}>{item.label}</a>
                                                        {
                                                            item.childRoutes &&
                                                            <RiArrowDownSLine />
                                                        }
                                                    </div>
                                                </Fragment>
                                            ))
                                        }
                                    </motion.div>
                                </AnimatePresence>
                            }
                        </div>
                    ))
                }
                <MoreButton
                    navItemsNumber={navItemsNumber}
                    hoveredOn={hoveredOn}
                    setHoveredOn={setHoveredOn}
                />
            </div>
        </nav>
    )
}

export default NavItems