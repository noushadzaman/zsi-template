'use client';

import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import * as geolib from 'geolib';
import Image from "next/image";
import { motion } from 'framer-motion';

const LocationPicker = () => {
    const [pickup, setPickup] = useState([]);
    const [destination, setDestination] = useState([]);
    const [totalDistance, setTotalDistance] = useState(null);

    console.log(pickup, destination);


    return (
        <div>
            <h2 className="text-[30px] md:text-[60px] lg:text-[80px] text-center mt-[50px] font-Epilogue">
                Calculate your bill
            </h2>
            <p className="text-[35px] mt-[30px] mb-[50px] text-center font-Mulish">Just $30/meter to travel anywhere in the world!</p>

            <div className="relative">
                <Map
                    height={400}
                    defaultCenter={[50.879, 4.6997]}
                    defaultZoom={11}
                    onClick={({ latLng }) => {
                        const [latitude, longitude] = latLng; // Extract latitude and longitude from the array

                        if (pickup.length === 0) {
                            setPickup({ latitude, longitude });
                        } else {
                            const destinationObj = { latitude, longitude };
                            setDestination(destinationObj);

                            // Calculate distance
                            const distance = geolib.getDistance(
                                { latitude: pickup.latitude, longitude: pickup.longitude },
                                destinationObj
                            );
                            setTotalDistance(distance);
                        }
                    }}
                >
                    {pickup && <Marker width={50} anchor={[pickup.latitude, pickup.longitude]} />}
                    {destination && <Marker width={50} anchor={[destination.latitude, destination.longitude]} />}
                </Map>

                {
                    pickup.length === 0 && <motion.div
                        animate={{
                            opacity: 1,
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: "easeInOut"
                        }}
                        className="absolute -top-10 -left-10 flex items-center flex-col text-xl font-bold"
                    >
                        <Image className="rounded-md" width={200} height={200} src="/gif1.webp" alt="Animated GIF" />
                        <div className="bg-[#da9100] p-1 rounded-b-md">
                            <h3>Pick your location</h3>
                        </div>
                    </motion.div>
                }
                {
                    pickup.length !== 0 && destination.length === 0 && <motion.div
                        animate={{
                            opacity: 1,
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: "easeInOut"
                        }}
                        className="absolute -top-10 -right-10 flex items-center flex-col text-xl font-bold"
                    >
                        <Image className="rounded-md" width={200} height={200} src="/gif2.webp" alt="Animated GIF" />
                        <div className="bg-[#da9100] p-1 rounded-b-md">
                            <h3>Pick your Destination</h3>
                        </div>
                    </motion.div>
                }
                {
                    totalDistance && <motion.div
                        animate={{
                            opacity: 1,
                            y: [0, -20, 0],
                        }}
                        drag
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: "easeInOut"
                        }}
                        className=""
                    >
                        <div draggable="false" className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl transition duration-500 flex flex-wrap"
                        >
                            <video
                                className="w-full"
                                src="/gif-incredible.mp4"
                                autoPlay
                                loop

                                muted
                                playsInline
                            />
                            <div className="bg-[#da9100] p-1 rounded-b-md text-center w-full">
                                <h3>You have to pay ${totalDistance * 30} for travelling approximately {totalDistance} meter.</h3>
                            </div>
                        </div>
                    </motion.div>
                }
            </div>
        </div>
    );
};

export default LocationPicker;

