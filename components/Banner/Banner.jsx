'use client';

import React from 'react';
import { motion } from 'framer-motion';
import herologo from '@/public/herologo.svg';
import Image from 'next/image';

const Banner = () => {
    return (
        <header className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#686864] via-[#1a1605] to-[#191918] animate-gradient">
            {/* Floating particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:30px_30px] opacity-10 animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10"
            >
                <motion.div
                    className="flex justify-center mb-[36px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <Image
                        src={herologo}
                        alt="Logo"
                        width={198}
                        height={198}
                        className="rounded-full w-28 sm:w-36 lg:w-[198px] h-auto"
                    />
                </motion.div>

                <motion.div
                    className="px-4 2xl:px-0 text-white text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[5.3125rem] analogue-font tracking-[1.0625rem] font-bold lg:font-normal">
                        EXQUISITE SOIRÉE
                    </h1>
                    <p className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[3rem] analogue-font">
                        Luxury Restroom & Photo Booth Rentals for Your Events
                    </p>
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Banner;
