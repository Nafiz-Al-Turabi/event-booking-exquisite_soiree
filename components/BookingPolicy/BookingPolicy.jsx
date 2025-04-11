'use client';
import React from 'react';
import { FaCalendarCheck, FaMoneyCheckAlt, FaTruckLoading, FaBan, FaPlug, FaMapMarkedAlt } from 'react-icons/fa';
import reservation from '@/public/images/Reservations.svg';
import deposit from '@/public/images/Deposit.svg';
import settings from '@/public/images/settings.svg';
import cancel from '@/public/images/cancel.svg';
import rental from '@/public/images/rental.svg';
import delivery from '@/public/images/delivery.svg';
import Image from 'next/image';

const policies = [
    {
        icon: reservation,
        title: 'Reservations',
        desc: 'Book at least 7 days in advance with the balance due within 72 hours of event to secure the rental.'
    },
    {
        icon: deposit,
        title: 'Deposit',
        desc: 'A $200 per rented item deposit and signed rental agreement are required to secure your desired event date.'
    },
    {
        icon: settings,
        title: 'Delivery & Setup',
        desc: 'A site visit is required before scheduled event to determine location of desired rentals.'
    },
    {
        icon: cancel,
        title: 'Cancellation Policy',
        desc: 'Cancellation must be within three days of event and subject to a $100 cancellation fee.'
    },
    {
        icon: rental,
        title: 'Rental Note',
        desc: 'Electrical outlet and access to water is needed at least 75 to 100 feet of trailer. If unavailable, we can provide both at an additional fee. Level ground space of 15’x15’ is required for setup.'
    },
    {
        icon: delivery,
        title: 'Delivery And Pickup',
        desc: 'As a customer of Exquisite Soirée the first 15 miles of delivery is free. Anything beyond is $5 per mile for drop off and pickup.'
    }
];

const BookingPolicy = () => {
    return (
        <div className="text-white pb-[277px] pt-20 px-4">
            <div className="max-w-[82.5rem] mx-auto text-center">
                <h2 className="text-3xl sm:text-[3.5rem] analogue-font mb-12">Booking Policy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {policies.map((policy, index) => (
                        <div
                            key={index}
                            className={`border border-[#DEB156] rounded-2xl p-6 bg-[#3c3c3c]/20  transition ${index > 3 ? 'lg:col-span-2' : ''}`}
                        >
                            <div className="text-[#deb94a] mb-4 flex justify-center items-center">
                                <Image src={policy.icon} alt={policy.title} />
                            </div>
                            <h3 className="text-lg xl:text-2xl Playfair-font font-semibold mb-2">{policy.title}</h3>
                            <p className="text-sm xl:text-lg text-gray-300">{policy.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookingPolicy;
