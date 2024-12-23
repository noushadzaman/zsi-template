"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const ImageCarousel = ({ images }) => {

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
            plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: false,
                }),
            ]}
        >
            <CarouselContent>
                {
                    images?.map((image, i) => (
                        <CarouselItem className="md:basis-1/2" key={i}>
                            <div className="w-full h-full">
                                <Image
                                    width={900}
                                    height={900}
                                    className="w-full"
                                    src={image}
                                    alt="banner img"
                                />
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}

export default ImageCarousel