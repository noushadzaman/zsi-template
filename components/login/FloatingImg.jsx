'use client'

import LoginImg from "@/public/login.png";
import { motion } from 'framer-motion';
import Image from 'next/image';

const FloatingImg = () => {
    return (
        <motion.div
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
        >
            <Image
                className='max-w-[600px]'
                src={LoginImg}
                alt={"login-img"}
                width={2000}
                height={2000}
            />
        </motion.div>
    )
}

export default FloatingImg