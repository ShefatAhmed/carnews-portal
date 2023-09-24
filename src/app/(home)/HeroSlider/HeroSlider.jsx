import React from 'react';
import ImageSlider from './ImageSlider';

const HeroSlider = () => {
    return (
        <div>
            <div>
                <meta name="description" content="Simple image slider using Tailwind CSS" />
                <link rel="icon" href="/favicon.ico" />
            </div>

            <div className="flex flex-col items-center">
                <main className="flex flex-col items-center flex-1 px-4 md:px-10 lg:px-20">
                    <ImageSlider />
                </main>
            </div>
        </div>
    );
};

export default HeroSlider;
