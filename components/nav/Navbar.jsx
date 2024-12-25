'use client';

import Logo from '@/public/logo.png'
import { useEffect, useState } from "react";
import CTA from "./CTA";
import MobileNav from "./MobileNav";
import Image from 'next/image';
import ActionBtns from './ActionBtns';
import NavItems from './NavItems';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [navItemsNumber, setNavItemsNumber] = useState(2);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth < 966) {
            setNavItemsNumber(1);
        } else if (windowWidth >= 966 && windowWidth < 1066) {
            setNavItemsNumber(3);
        } else if (windowWidth >= 1066 && windowWidth < 1166) {
            setNavItemsNumber(4);
        } else if (windowWidth >= 1166 && windowWidth < 1266) {
            setNavItemsNumber(5);
        } else if (windowWidth >= 1266 && windowWidth < 1336) {
            setNavItemsNumber(6);
        } else if (windowWidth >= 1336) {
            setNavItemsNumber(null);
        }
    }, [windowWidth]);


    return (
        <div>
            <CTA />
            <div className='bg-[#da9100]'>
                <div className="flex items-center justify-between px-5 min-h-[111px]">
                    <div className="flex items-center">
                        {/* logo */}
                        <Image className='w-[150px]' width={300} height={200} src={Logo} alt='logo' />
                        {/* nav link items */}
                        <NavItems navItemsNumber={navItemsNumber} />
                    </div>

                    {/* ActionBtns for full screen */}
                    <ActionBtns setMobileNavOpen={setMobileNavOpen} />
                </div>
                {/* ActionBtns for mobile screen */}
                <div className='flex items-center w-full justify-center pb-7 md:pb-0'>
                    <ActionBtns screen="mobile" />
                </div>
            </div>
            {/* mobile side bar */}
            {
                mobileNavOpen && <MobileNav setMobileNavOpen={setMobileNavOpen} />
            }
        </div>
    )
}

export default Navbar