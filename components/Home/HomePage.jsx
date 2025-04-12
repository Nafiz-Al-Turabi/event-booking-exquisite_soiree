'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import bannar from '@/public/images/banner.png';
import herologo from '@/public/herologo.svg';
import logo from '@/public/logo.svg';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import BookingPolicy from '../BookingPolicy/BookingPolicy';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import OurServices from '../OurServices/OurServices';
import RentalPrice from '../RentalPrice/RentalPrice';

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
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#00000042] md:backdrop-blur-lg text-white">
        <div className="flex justify-between items-center w-full max-w-[82.5rem] mx-auto px-4 2xl:px-0">
          <a href="#" className="flex items-center space-x-2 py-2">
            <Image src={logo} alt="Logo" height={80} />
          </a>
          <div className="hidden md:flex items-center space-x-8 font-light">
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
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars className="w-6 h-6 text-white" />
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#00000042] backdrop-blur-lg text-white transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-[999] shadow-lg`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)}>
              <FaTimes className="w-6 h-6 text-white" />
            </button>
          </div>
          <ul className="flex flex-col items-start space-y-4 px-6 pt-4 text-lg font-light">
            {sections.map((item) => (
              <li key={item.id} className="w-full">
                <a
                  href={`#${item.id}`}
                  className="block w-full hover:text-yellow-400 transition duration-300"
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
      <header
        style={{ backgroundImage: `url(${bannar.src})` }}
        className="bg-cover bg-center h-screen flex items-center justify-center"
      >
        <div>
          <div className="flex justify-center mb-[36px]">
            <Image
              src={herologo}
              alt="Logo"
              width={198}
              height={198}
              className="rounded-full w-28 sm:w-36 lg:w-[198px] h-auto"
            />
          </div>
          <div className="px-4 2xl:px-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[5.3125rem] analogue-font tracking-[1.0625rem] text-center font-bold lg:font-normal">
              EXQUISITE SOIRÉE
            </h1>
            <p className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[3rem] text-center analogue-font text-white">
              Luxury Restroom & Photo Booth Rentals for Your Events
            </p>
          </div>
        </div>
      </header>
      {/* Sections */}
      <section id="company-overview" className='scroll-mt-[120px]' ref={(el) => (sectionRefs.current['company-overview'] = el)}>
        <CompanyOverview />
      </section>
      <section id="booking-policy" className='scroll-mt-[120px]' ref={(el) => (sectionRefs.current['booking-policy'] = el)}>
        <BookingPolicy />
      </section>
      <section id="pricing" className='scroll-mt-[120px]' ref={(el) => (sectionRefs.current['pricing'] = el)}>
        <RentalPrice />
      </section>
      <section id="services" className='scroll-mt-[120px]' ref={(el) => (sectionRefs.current['services'] = el)}>
        <OurServices />
      </section>
      <section id="gallery" className='scroll-mt-[120px]' ref={(el) => (sectionRefs.current['gallery'] = el)}>
        <Gallery />
      </section>
      <section id="contact" className='scroll-mt-[120px]' ref={(el) => (sectionRefs.current['contact'] = el)}>
        <Contact />
      </section>
    </div>
  );
}
