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
            { duration: 15, ease: "linear", repeat: Infinity }
        );
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.000001;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);


    return (
        <section className="overflow-hidden">
            <div className="bg-black">
                <div>
                    <motion.div
                        ref={scope}
                        className="flex"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <span key={i} className="text-nowrap text-[22px] font-[700] text-white py-3">
                                Drive for us: Start, just finish 30 trips, and get $1000 bonus. Sign up today!  ★  <span className="text-[#FF0000]">Please download our app from the App Store and Play Store. For drivers, RPC DRIVER app and for riders RPC LIMO app, download today! ★&nbsp;</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default MyComponent;