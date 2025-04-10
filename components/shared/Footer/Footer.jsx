'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '@/public/logo.svg'; 
import tiktok from '@/public/tiktok.svg'; 
import instagram from '@/public/instagram.svg'; 
import facebook from '@/public/facebook.svg'; 


const Footer = () => {
    return (
        <footer className="bg-[#1f1e1d] text-white pt-10">
            <div className="max-w-[82.5rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
                {/* Logo */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image src={logo} alt="Exquisite Soiree"  />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-base uppercase font-light">
                    <Link href="#">Company Overview</Link>
                    <Link href="#">Booking Policy</Link>
                    <Link href="#">Pricing</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Gallery</Link>
                    <Link href="#">Contact Us</Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-2">
                    <Link href="#" className="rounded-full p-2 hover:opacity-80 duration-300">
                        <Image src={tiktok} alt="TikTok" width={36} height={36} />
                    </Link>
                    <Link href="#" className="rounded-full p-2 hover:opacity-80 duration-300">
                        <Image src={instagram} alt="Instagram" width={36} height={36} />
                    </Link>
                    <Link href="#" className="rounded-full p-2 hover:opacity-80 duration-300">
                        <Image src={facebook} alt="Facebook" width={36} height={36} />
                    </Link>
                </div>
            </div>
            <hr className='border border-[#A5A5AB] '/>
            {/* Bottom Footer */}
            <div className="text-sm flex flex-col sm:flex-row justify-between items-center text-gray-400 max-w-[82.5rem] mx-auto py-8">
                <p>© Copyright 2024, exquisitesoiree</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
