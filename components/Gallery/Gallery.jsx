'use client';
import React from 'react';
import Image from 'next/image';
import backgroundMask from '@/public/Mask1.svg'
import backgroundMask2 from '@/public/Mask2.svg'

const images = [
  '/gallery/photoGallery.jpeg',
  '/gallery/photoGallery2.png',
  '/gallery/photoGallery3.jpeg',
  '/gallery/photoGallery4.jpeg',
  '/gallery/photoGallery5.png',
  '/gallery/photoGallery6.jpeg',
  '/gallery/photoGallery7.jpeg',
  '/photoBooth/photobooth.jpg',
  '/photoBooth/photobooth2.jpg',
  '/photoBooth/photobooth3.jpg',
];

const Gallery = () => {
  return (
    <div className="relative">
      <Image src={backgroundMask} alt="Background" className="absolute bottom-96 left-0 opacity-20 " />
      <Image src={backgroundMask2} alt="Background" className="absolute bottom-56 right-0 opacity-20 " />
      <section className="py-12 px-4 2xl:px-0 max-w-[82.5rem] mx-auto mb-[100px] relative z-40">
        <h2 className="text-white text-4xl sm:text-[3.5rem] analogue-font font-semibold mb-10">Gallery</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((src, index) => {
              if (index < 3) {
                return (
                  <Image
                    key={index}
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-96 object-cover rounded-md"
                  />
                );
              }
              return null;
            })}
          </div>

          {/* Remaining images in grid-cols-4 with first one col-span-2 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {images.map((src, index) => {
              if (index < 3) return null;

              const colSpan = index === 3 ? 'lg:col-span-2' : '';
              return (
                <div key={index} className={colSpan}>
                  <Image
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-96 object-cover rounded-md"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
