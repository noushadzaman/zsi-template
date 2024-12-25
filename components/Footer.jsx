import { footerData } from '@/lib/constants'
import Logo from '@/public/logo.png'
import DownloadBTN from '@/public/download-btn.png'
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className='max-w-[1320px] mx-auto '>
            <section className="flex flex-col lg:flex-row text-[black]/80 py-[66px] gap-5 xl:gap-10">
                <div className='space-y-5 pt-[50px] md:pt-0 lg:max-w-xs xl:max-w-md'>
                    <Image width={300} height={200} src={Logo} alt='logo' />
                    <p className='text-[18px] leading-[29px] pt-[35px]'>{footerData.firstColPara}</p>
                    <button className="bg-black text-white py-[8px] px-[52px] font-[600] text-[15px] leading-[40px] mt-[30px]cursor-pointer transition-colors duration-300 rounded-sm">Book Now Pay Later</button>
                </div>
                <div className='space-y-[10px] pt-[50px] md:pt-0 flex-1 flex flex-col text-nowrap'>
                    <h3 className='text-[20px] font-[500]'>Quick Links</h3>
                    {
                        footerData.secondColLinks.map((link, i) => <a className='text-[18px] hover:text-white mb-[10px]' key={i} href={link.href}>{link.label}</a>)
                    }
                </div>
                <div className='space-y-[10px] pt-[50px] md:pt-0 flex-1 flex flex-col text-nowrap'>
                    <h3 className='text-[20px] font-[500]'>OUR SERVICES</h3>
                    {
                        footerData.thirdColLinks.map((link, i) => <a className='text-[18px] hover:text-white mb-[10px]' key={i} href={link.href}>{link.label}</a>)
                    }
                </div>
                <div className='space-y-7 pt-[50px] md:pt-0 lg:max-w-[250px]'>
                    <Image width={236} height={200} src={DownloadBTN} alt='logo' />
                    {
                        footerData.fourthColParas.map((para, i) => <p className='text-[18px]' key={i}>{para}</p>)
                    }
                </div>
            </section>
            <hr className='opacity-20'/>
            <p className='text-[15px] py-[25px] text-black/90'>Copyright © RPC Limo 2024 - Developed by Noushad</p>
        </footer>
    )
}

export default Footer