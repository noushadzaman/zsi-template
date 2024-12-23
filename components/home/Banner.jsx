"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import BannerImg from "@/public/banner-img.jpg";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {

    return (
        <Carousel
            className=""
            plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: false,
                }),
            ]}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="w-full h-full">
                        <Image className="w-full" src={BannerImg} alt="banner img" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <video
                        className="object-cover aspect-[1803/713]"
                        width="100%"
                        height="100%"
                        autoPlay
                        muted
                        loop
                        src="/RPC-LIMO.mp4"
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

export default Banner