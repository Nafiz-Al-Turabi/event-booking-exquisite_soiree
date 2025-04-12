'use client';
import React from 'react';
import lactionPin from '@/public/location-pin.svg'
import mail from '@/public/mail.svg'
import phone from '@/public/phone.svg'
import backgroundImage from '@/public/Group4.svg'
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='relative'>
      <Image src={backgroundImage} alt="Background" className="absolute bottom-0 right-0 opacity-5 " />
      <div className='px-4 2xl:px-0 pb-[100px] relative z-40'>
        <div className="max-w-[82.5rem] mx-auto rgb-bg p-[1px] rounded-xl overflow-hidden">
          <div className="bg-[#1f1e1d] p-4 lg:pr-8 lg:pl-14 lg:py-8 rounded-xl flex flex-col md:flex-row gap-8">
            {/* Left Section */}
            <div className="flex-1 text-white space-y-6">
              <div>
                <h2 className="text-4xl lg:text-[2.5rem] analogue-font mb-6">
                  Let’s Make Your Event<br />Unforgettable!
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white max-w-[30ch] mb-6">Contact us for expert assistance and hassle-free rental solutions.</p>
              </div>

              <div>
                <p className="text-2xl analogue-font mb-4">Opening Hour</p>
                <p className="text-lg mb">Everyday - <span className="font-medium">08:00 am - 09:00 pm</span></p>
              </div>

              <div className="space-y-6">
                <h4 className='text-2xl analogue-font mb-4'>Contact info</h4>
                <div className="flex items-center text-sm gap-3 text-gray-300">
                  <Image src={lactionPin} alt="Location Pin" className="w-8 h-8" />
                  <span>Drottninggatan 11, 641 30 Katrineholm</span>
                </div>
                <div className="flex items-center text-sm gap-3 text-gray-300">
                  <Image src={mail} alt="Location Pin" className="w-8 h-8" />
                  <span>exquisitesoiree@mail.com</span>
                </div>
                <div className="flex items-center text-sm gap-3 text-gray-300">
                  <Image src={phone} alt="Location Pin" className="w-8 h-8" />
                  <span>+46 73 593 09 04</span>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="flex-1 bg-[#191918] contact-shadow p-6 md:p-8 rounded-lg text-white">
              <h3 className="text-[2rem] analogue-font mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="First Name" className="bg-transparent border-b border-[#777980] py-2 px-1 focus:outline-none text-white" />
                  <input type="text" placeholder="Last Name" className="bg-transparent border-b border-[#777980] py-2 px-1 focus:outline-none text-white" />
                  <input type="email" placeholder="Enter your email" className="bg-transparent border-b border-[#777980] py-2 px-1 focus:outline-none text-white" />
                  <input type="text" placeholder="Enter your number" className="bg-transparent border-b border-[#777980] py-2 px-1 focus:outline-none text-white" />
                </div>
                <textarea placeholder="Enter your email" className="w-full bg-transparent border-b border-[#777980] py-2 px-1 focus:outline-none text-white h-24 resize-none"></textarea>
                <div className="flex items-start gap-2 mt-4 mb-4 max-w-[36ch]">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-gray-300">I consent to automated communications about Exquisite Soirée’s services.</label>
                </div>
                <button
                  type="submit"
                  className="w-full text-xl bg-[#deb94a] hover:bg-[#caa638] text-white font-medium py-5 rounded-md transition cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
