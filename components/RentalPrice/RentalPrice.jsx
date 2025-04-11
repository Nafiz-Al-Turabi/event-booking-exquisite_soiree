import Image from 'next/image';
import React from 'react';
import borderShape from '@/public/rentalImages/border.png';
import bgShape from '@/public/rentalImages/bg shapes.svg';
import bgShape2 from '@/public/rentalImages/bg shapes2.svg';
import threeD from '@/public/rentalImages/Asterisk.svg';

const RentalPrice = () => {
    return (
        <div>
            <div className='max-w-[51.5rem] mx-auto text-center bg-[#201F1E] border border-[#C7C7C7] rounded-[16px] p-4 lg:p-6 mb-8'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='p-[1px] bg-gradient-to-tl from-yellow-700 via-yellow-300 to-yellow-700 rounded-2xl'>
                        <button className='w-full h-full text-2xl Playfair-font bg-[#1A1918] font-bold text-white p-6 rounded-2xl cursor-pointer relative overflow-hidden z-40'>
                            <span className='relative z-40 text-center'>
                                2-Suite Luxury <br />Restroom Trailer
                            </span>
                            <Image
                                src={bgShape2}
                                alt='bg-shape'
                                className='absolute bottom-0 right-1 z-0'
                            />
                            <div className='h-[80px] w-[80px] rounded-ball2 bg-[#F2E462] absolute  rounded-full -top-8 left-2/5 duration-300 ' tans></div>
                        </button>
                    </div>
                    <div className='w- p-[1px] bg-gradient-to-tl from-yellow-700 via-yellow-300 to-yellow-700 rounded-2xl '>
                        <button className='w-full h-full text-2xl Playfair-font bg-[#1A1918] font-bold text-white p-4  rounded-2xl cursor-pointer relative overflow-hidden z-40'><span className='relative z-40 text-center'>
                            Photo Booth Rental
                        </span>
                            <Image
                                src={bgShape2}
                                alt='bg-shape'
                                className='absolute bottom-0 right-1 z-0'
                            />
                            <div className='h-[80px] w-[80px] rounded-ball2 bg-[#F2E462] absolute  rounded-full -top-8 left-2/5 duration-300 ' tans></div>
                        </button>

                    </div>
                </div>
            </div>
            <div className='max-w-[82.5rem] mx-auto bg-[#1f1e1d] rounded-[16px] p-4 lg:p-6'>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className='group duration-300'>
                        <div className=' bg-gradient-to-tl group-hover:from-yellow-700 group-hover:via-yellow-300 group-hover:to-yellow-700 p-[1px] rounded-3xl relative '>
                            <Image src={borderShape} alt='border-shape' className='absolute -top-1 translate-x-2/13 z-20' />
                            <div className='flex flex-col justify-between text-white bg-[#1A1918] rounded-3xl p-4 sm:p-6 relative overflow-hidden '>
                                <Image src={bgShape} alt='bg-shape' className='absolute top-0 -right-1' />
                                <Image src={threeD} alt='3d-shape' width={77} height={77} className='mt-[54px] mb-[29px] grayscale-100 group-hover:grayscale-0 duration-300' />
                                <div className='h-[159px] w-[149px] rounded-ball bg-[#ffffff] group-hover:bg-[#f2e462] absolute  rounded-full -top-32 translate-x-2/3 duration-300 ' tans></div>
                                <div className='space-y-5'>
                                    <h1 className='text-2xl Playfair-font fontbold max-w-[16ch]'>2-Suite Luxury Restroom Trailer</h1>
                                    <p>Two-suite restroom rental trailer,
                                        fully stocked with supplies. A/C and heat provided. Bluetooth radio available.</p>
                                    <div className='flex justify-between items-center text-xl font-bold text-[#DEB94A] my-[29px]'>
                                        <p>$600</p>
                                        <span>-</span>
                                        <p>4 Hour</p>
                                    </div>
                                </div>
                                <button className='w-full rounded-lg border border-[#C7C7C7] group-hover:border-[#deb94a] group-hover:bg-[#deb94a] duration-300 py-4 text-lg font-semibold cursor-pointer'>Choose this plan</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RentalPrice;