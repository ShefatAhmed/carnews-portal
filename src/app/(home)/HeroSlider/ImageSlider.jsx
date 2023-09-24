'use client';
import React, { useState, useEffect } from 'react';

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mercedes-Benz_W223_IMG_6663.jpg/1280px-Mercedes-Benz_W223_IMG_6663.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ford_Mustang_GT%2C_20.5.2017_%282%29.jpg/800px-Ford_Mustang_GT%2C_20.5.2017_%282%29.jpg?20170609102826',
  'https://www.globalbrandsmagazine.com/wp-content/uploads/2023/07/2023priusphevdpl025.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/BMW_G20_IMG_0167.jpg/1280px-BMW_G20_IMG_0167.jpg',
  'https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/10/20083356/jeep-wrangler-fact-cover-201020220130-1.jpg',
];

const imageTitles = [
  'The sleek Mercedes-Benz S-Class combines luxury and performance effortlessly.',
  'With its iconic design, the Ford Mustang GT is a classic American muscle car.',
  'The Toyota Prius remains a popular choice for its fuel efficiency and hybrid technology.',
  'The BMW 3 Series offers a perfect blend of sportiness and elegance.',
  'The rugged Jeep Wrangler Sahara is the ultimate off-road adventure companion.',
];

const AUTO_PLAY_INTERVAL = 3000; // Time in milliseconds

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(nextImage, AUTO_PLAY_INTERVAL);
    return () => clearInterval(intervalId);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center my-5">
      <div className="relative w-full">
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="shadow rounded-tr-3xl rounded-bl-3xl"
          style={{ width: '1536px', height: '720px' }}
        />
        <div className="absolute bottom-2 left-2">
          <h2 className="text-3xl text-white font-semibold mx-5" style={{ backdropFilter: 'blur(3px)', padding: '5px' }}>
            {imageTitles[currentImage]}
          </h2>
          <button
            onClick={prevImage}
            className="px-3 font-extrabold text-4xl text-white rounded mr-2"
          >
            &larr;
          </button>
          <button
            onClick={nextImage}
            className="px-3 font-extrabold text-4xl text-white rounded"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;