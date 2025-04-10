'use client';
import React, { useState } from 'react';
import check from '@/public/check.svg';
import Image from 'next/image';
import './CompanyOverview.css';
import CarImage from '@/public/images/car.jpeg';
import girlImage from '@/public/images/overview.png';
import videoImage from '@/public/images/videoImage.png';
import { FaPlay } from 'react-icons/fa';

const CompanyOverview = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handlePlay = () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPlaying(true);
            setIsPressed(false);
        }, 150);
    };

    return (
        <div className="max-w-[82.5rem] mx-auto px-4 2xl:px-0 py-[227px]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Left Content */}
                <div className="text-[#D2D2D5] flex-1">
                    <h2 className="text-[3.5rem] analogue-font mb-6">Company Overview</h2>
                    <div className="space-y-8">
                        <p className="text-lg">
                            At EXQUISITE SOIRÉE, we specialize in high-quality event rentals, ensuring your guests enjoy comfort and entertainment.
                            Whether it's a wedding, corporate event, or festival, our luxury restrooms and photo booths add a touch of convenience
                            and fun to your special occasion.
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Premium Event Rentals for Comfort & Fun:</h3>
                            <ul className="text-lg space-y-6">
                                <li className="flex items-center gap-2">
                                    <Image src={check} alt="Checkmark icon" className="h-6 w-6" />
                                    Top-notch cleanliness & hygiene
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image src={check} alt="Checkmark icon" className="h-6 w-6" />
                                    Seamless setup & breakdown
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image src={check} alt="Checkmark icon" className="h-6 w-6" />
                                    Exceptional customer service
                                </li>
                            </ul>
                        </div>

                        <button className="text-lg font-semibold bg-[#DEB94A] border border-[#6C470E] py-4 px-6 hover:brightness-105 transition rounded-sm cursor-pointer">
                            Let Us Host Your Next Event
                        </button>
                    </div>
                </div>

                {/* Right Image & Video */}
                <div className="flex flex-col md:flex-row gap-8">
                    <div className='flex md:flex-col space-y-4 md:mt-32 xl:mt-64'>
                        <Image
                            src={CarImage}
                            alt="Luxury event setup"
                            width={200}
                            height={200}
                            className="w-full lg:h-[180px] xl:h-[214px] rounded-2xl object-cover"
                        />
                        <Image
                            src={girlImage}
                            alt="Luxury event setup"
                            width={200}
                            height={200}
                            className="w-full lg:h-[180px] xl:h-[214px] rounded-2xl object-cover"
                        />
                    </div>

                    <div className='bg-[#deb156] relative rounded-xl h-[580px] w-full sm:w-[424px] lg:h-[380px] lg:w-[224px] xl:h-[580px] xl:w-[424px]'>
                        <div className='relative h-full'>
                            {!isPlaying ? (
                                <>
                                    <Image
                                        src={videoImage}
                                        alt="Video thumbnail"
                                        width={500}
                                        height={500}
                                        className="h-[580px] w-full sm:w-[424px] lg:h-[380px] lg:w-[224px] xl:h-[580px] xl:w-[424px] rounded-xl object-cover absolute -top-3 -left-3"
                                    />
                                    <button
                                        onClick={handlePlay}
                                        className={`transition-transform duration-150 ease-in-out flex justify-center items-center h-[6.188rem] w-[6.188rem] bg-white/20 backdrop-blur-xs rounded-full text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${isPressed ? 'scale-90' : 'scale-100'
                                            }`}
                                    >
                                        <FaPlay className='text-[3.25rem]' />
                                    </button>
                                </>
                            ) : (
                                <video
                                    className="h-[580px] w-full sm:w-[424px] lg:h-[380px] lg:w-[224px] xl:h-[580px] xl:w-[424px] rounded-xl object-cover absolute -top-3 -left-3"
                                    controls={false}
                                    loop={true}
                                    autoPlay
                                >
                                    <source src="/videos/overview.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;
