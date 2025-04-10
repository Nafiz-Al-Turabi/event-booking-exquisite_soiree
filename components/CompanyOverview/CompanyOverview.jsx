import React from 'react';

const CompanyOverview = () => {
    return (
        <div className='max-w-[82.5rem] mx-auto px-4 2xl:px-0'>
            <div className='max-w-[] flex justify-between items-center'>
                <div className='text-[#D2D2D5]'>
                    <h2 className='text-[3.5rem] analogue-font'>Company Overview</h2>
                    <p className='text-lg'>At EXQUISITE SOIRÉE, we specialize in high-quality event rentals, ensuring your guests enjoy comfort and entertainment. Whether it's a wedding, corporate event, or festival, our luxury restrooms and photo booths add a touch of convenience and fun to your special occasion.</p>
                    <ul className='text-lg'>
                        <h3>Premium Event Rentals for Comfort & Fun :</h3>
                        <li>Top-notch cleanliness & hygiene</li>
                        <li>TSeamless setup & breakdown</li>
                        <li>Exceptional customer service</li>
                    </ul>
                    <button>Let Us Host Your Next Event</button>
                </div>
                <div>Image</div>
            </div>
        </div>
    );
};

export default CompanyOverview;