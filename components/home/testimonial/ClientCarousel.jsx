'use client';

import React from 'react'
import { DotButton, useDotButton } from './ClientCarouselDots'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './ClientCarouselArrowBtns'
import useEmblaCarousel from 'embla-carousel-react'
import './index.css'
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

const EmblaCarousel = ({ clientData, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla pt-[50px] flex items-center justify-between">
            <div onClick={onPrevButtonClick} className='hidden md:flex w-[62px] h-[67px] shadow-[#e9f4f5] shadow-xl mx-4 items-center justify-center shrink-0'>
                <PrevButton disabled={prevBtnDisabled} />
            </div>
            <div className='w-full md:max-w-[500] lg:max-w-[700px] xl:max-w-[920px] max-md:px-0'>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="embla__container">
                        {clientData.map((item) => (
                            <div key={item.id} className="embla__slide">
                                <div className='flex flex-col items-center'>
                                    {/* review div */}
                                    <div className='flex flex-col items-center'>
                                        <div className='bg-[#da9100] px-[63px] py-[50px] text-[18px] leading-[29px] pb-[70px] text-center'>
                                            {item.review}
                                        </div>
                                        <div className='bg-[#da9100] h-[40px] w-[40px] rotate-45 -mt-[20px]' />
                                    </div>
                                    {/* rating and personal info div */}
                                    <div className='flex flex-col items-center justify-center space-y-5 mt-[30px]'>
                                        <Image className="w-[150px] h-[150px] object-cover object-center rounded-full" src={item.imgUrl} alt={item.name} width={400} height={400} />
                                        <div className='flex gap-5'>
                                            {
                                                Array.from({ length: item.rating }).map((_, i) => <FaStar key={i} fill='#da9100' />)
                                            }
                                        </div>
                                        <p className='text-[22px] font-[700]'>{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-5">
                    {clientData.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
            <div onClick={onNextButtonClick} className="hidden md:flex w-[62px] h-[67px] shadow-[#e9f4f5] shadow-xl mx-4 items-center justify-center shrink-0">
                <NextButton disabled={nextBtnDisabled} />
            </div>
        </section>
    )
}

export default EmblaCarousel