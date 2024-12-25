import { navData } from '@/lib/constants'
import React, { Fragment } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'

const MoreButton = ({ navItemsNumber, hoveredOn, setHoveredOn }) => {

    return (
        <>
            {
                navItemsNumber !== null && <div className='text-[15px] font-[600] relative group'>
                    <div
                        onMouseEnter={() => setHoveredOn("More")}
                        onMouseLeave={() => setHoveredOn("")}
                        className=' flex items-center gap-2 shrink-0 cursor-pointer h-[100%]'>
                        <p className="group-hover:text-white">More</p>
                        <RiArrowDownSLine className='group-hover:rotate-90 group-hover:text-white transition-transform duration-300' />
                        {
                            (hoveredOn === "More" || navData.slice(navItemsNumber, navData.length).find(item => item.label === hoveredOn)) &&
                            <div className='opacity-0 transition-all duration-300 group-hover:opacity-100 absolute group-hover:top-[111px] top-[130px] z-20'>
                                {
                                    navData.slice(navItemsNumber, navData.length).map((item, i) => (
                                        <div
                                            onMouseEnter={() => setHoveredOn(item.label)}
                                            className='relative' key={i}>
                                            <hr className={`${i == 0 ? 'hidden' : ''} border-[#e8ac35]`} />
                                            <div className={twMerge('hover:text-white peer flex items-center justify-between gap-2 text-[15px] font-[600] cursor-pointer shrink-0 bg-[#da9100] w-[290px] p-4 transition-colors duration-300', item.bold ? 'font-extrabold' : '')}>
                                                <a href={item.href}>{item.label}</a>
                                                {
                                                    item.childRoutes &&
                                                    <RiArrowDownSLine className='hover:rotate-0 rotate-90 transition-transform duration-300' />
                                                }
                                            </div>
                                            {item.childRoutes?.length > 0 && item.label === hoveredOn &&
                                                <div className='opacity-0 transition-all duration-300 peer-hover:opacity-100 hover:opacity-100 absolute right-[290px] top-[19px] peer-hover:top-0 hover:top-0 z-20'>
                                                    {
                                                        item.childRoutes.map((item, i) => (
                                                            <Fragment key={i}>
                                                                <hr className='first:hidden border-[#e8ac35]' />
                                                                <div className='hover:text-white flex items-center gap-2 text-[15px] font-[600] cursor-pointer shrink-0 bg-[#da9100] w-[290px] p-4 transition-colors duration-300'>
                                                                    <a href={item.href}>{item.label}</a>
                                                                </div>
                                                            </Fragment>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default MoreButton