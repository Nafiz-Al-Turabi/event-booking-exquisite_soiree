'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '@/public/logo.svg';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import BookingPolicy from '../BookingPolicy/BookingPolicy';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import OurServices from '../OurServices/OurServices';
import RentalPrice from '../RentalPrice/RentalPrice';
import Banner from '../Banner/Banner';
import tiktok from '@/public/tiktok.svg'; 
import instagram from '@/public/instagram.svg'; 
import facebook from '@/public/facebook.svg'; 

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('company-overview');

  const sectionRefs = useRef({});

  const sections = [
    { id: 'company-overview', label: 'Company Overview' },
    { id: 'booking-policy', label: 'Booking Policy' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < sections.length; i++) {
        const id = sections[i].id;
        const el = sectionRefs.current[id];
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 150 && top >= -el.offsetHeight + 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 lg:bg-[#00000042] lg:backdrop-blur-lg text-white">
        <div className="flex justify-between items-center w-full max-w-[82.5rem] mx-auto px-4 2xl:px-0">
          <a href="#" className="flex items-center space-x-2 py-2">
            <Image src={logo} alt="Logo" height={80} />
          </a>
          <div className="hidden lg:flex items-center space-x-8 font-light">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition duration-300 py-11 ${activeSection === item.id
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'hover:text-yellow-400'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars className="w-6 h-6 text-white" />
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#00000042] backdrop-blur-lg  text-white transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-[999] shadow-lg`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)}>
              <FaTimes className="w-6 h-6 text-white" />
            </button>
          </div>
          <ul className="flex flex-col items-start space-y-6 px-6 pt-4 text-lg font-light">
            {sections.map((item) => (
              <li key={item.id} className="w-full">
                <a
                  href={`#${item.id}`}
                  className={`block lg:hidden w-full hover:text-yellow-400 md:text-2xl analogue-font transition duration-300 ${activeSection === item.id
                    ? 'text-yellow-400  border-yellow-400'
                    : 'hover:text-yellow-400'} `}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Banner */}
      <Banner/>
      {/* Sections */}
      <section id="company-overview" className='scroll-mt-[50px] lg:scroll-mt-[80px] xl:scroll-mt-[120px]' ref={(el) => (sectionRefs.current['company-overview'] = el)}>
        <CompanyOverview />
      </section>
      <section id="booking-policy" className='scroll-mt-[50px] lg:scroll-mt-[80px] xl:scroll-mt-[120px]' ref={(el) => (sectionRefs.current['booking-policy'] = el)}>
        <BookingPolicy />
      </section>
      <section id="pricing" className='scroll-mt-[50px] lg:scroll-mt-[80px] xl:scroll-mt-[120px]' ref={(el) => (sectionRefs.current['pricing'] = el)}>
        <RentalPrice />
      </section>
      <section id="services" className='scroll-mt-[50px] lg:scroll-mt-[80px] xl:scroll-mt-[120px]' ref={(el) => (sectionRefs.current['services'] = el)}>
        <OurServices />
      </section>
      <section id="gallery" className='scroll-mt-[50px] lg:scroll-mt-[80px] xl:scroll-mt-[120px]' ref={(el) => (sectionRefs.current['gallery'] = el)}>
        <Gallery />
      </section>
      <section id="contact" className='scroll-mt-[50px] lg:scroll-mt-[80px] xl:scroll-mt-[120px]' ref={(el) => (sectionRefs.current['contact'] = el)}>
        <Contact />
      </section>

      <footer className="bg-[#1f1e1d] text-white pt-10">
            <div className="max-w-[82.5rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
                {/* Logo */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image src={logo} alt="Exquisite Soiree"  />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-base uppercase font-light">
                    <Link href="#company-overview">Company Overview</Link>
                    <Link href="#booking-policy">Booking Policy</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#gallery">Gallery</Link>
                    <Link href="#contact">Contact Us</Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-2">
                    <a href="https://www.tiktok.com/@exquisite_soiree?_t=ZT-8wDvAZ8FHsg&_r=1" target='blank' className="rounded-full p-2 hover:opacity-80 duration-300">
                        <Image src={tiktok} alt="TikTok" width={36} height={36} />
                    </a>
                    <a href="https://www.instagram.com/exquisite_soiree?igsh=a29tbHVneGVrZzhp" target='blank' className="rounded-full p-2 hover:opacity-80 duration-300">
                        <Image src={instagram} alt="Instagram" width={36} height={36} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61576271035076&mibextid=wwXIfr&rdid=oDseZEEuMfhWANw7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18uEGKv9VN%2F%3Fmibextid%3DwwXIfr#" target='blank' className="rounded-full p-2 hover:opacity-80 duration-300">
                        <Image src={facebook} alt="Facebook" width={36} height={36} />
                    </a>
                </div>
            </div>
            <hr className='border border-[#38383a] '/>
            {/* Bottom Footer */}
            <div className="text-sm flex flex-col sm:flex-row justify-between items-center text-gray-400 max-w-[82.5rem] mx-auto py-8">
                <p>© Copyright 2024, exquisitesoiree</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    </div>
  );
}
