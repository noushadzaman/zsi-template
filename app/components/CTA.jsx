"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function MyComponent() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef(null);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-2281.7px" },
            { duration: 15, ease: "linear", repeat: Infinity, delay: 6 }
        );
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.01;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);


    return (
        <section className="overflow-hidden">
            <div className="bg-black">
                <motion.div
                    initial={{
                        x: window.innerWidth
                    }}
                    animate={{
                        x: 0,
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        ref={scope}
                        className="flex"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <span key={i} className="text-nowrap text-[22px] font-[700] text-white py-3">
                                Drive for us: Start, just finish 30 trips, and get $1000 bonus. Sign up today!  ★  <span className="text-[#FF0000]">Please download our app from the App Store and Play Store. For drivers, RPC DRIVER app and for riders RPC LIMO app, download today! ★ </span>
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default MyComponent;