'use client';
import React, { useState, useEffect } from 'react';

const carsData = [
    {
        image: 'https://images.unsplash.com/photo-1652509467137-665542b3a1db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlc2xhJTIwJTIwWCUyMGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
        heading: 'New Model X Released . Tesla new cars',
        writer: 'John Doe',
        date: 'August 30, 2023',
    },
    {
        image: 'https://images.unsplash.com/photo-1623572435912-9940866dca4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEVsZWN0cmljJTIwQ2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        heading: 'Electric Car Sales Surge in Summer . Surge Station',
        writer: 'Jane Smith',
        date: 'September 5, 2023',
    },
    {
        image: 'https://images.unsplash.com/photo-1516298252535-cf2ac5147f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BvcnRzJTIwQ2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        heading: 'Sleek Design Unveiled for 2024 Sports Car',
        writer: 'Michael Johnson',
        date: 'September 12, 2023',
    },
    {
        image: 'https://images.unsplash.com/photo-1485465014387-7580000cd578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SHlicmlkJTIwU1VWfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        heading: 'Self-Driving Car Completes Cross-Country Trip',
        writer: 'Emily Williams',
        date: 'September 18, 2023',
    },
    {
        image: 'https://images.unsplash.com/photo-1615836442383-6e787668bc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SHlicmlkJTIwU1VWfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        heading: 'Hybrid SUV with Advanced Safety Features',
        writer: 'David Brown',
        date: 'September 22, 2023',
    },
    {
        image: 'https://images.unsplash.com/photo-1584345604325-f5091269a0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2xhc3NpYyUyMENhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
        heading: 'Classic Car Show to Showcase Vintage Beauties',
        writer: 'Sophia Martinez',
        date: 'September 28, 2023',
    },
];

const Trending = () => {
    const newsHeadlines = [
        "Self-Driving Features Gain Popularity in Autos.",
        "SUV Demand Soars, Reshaping Market Trends.",
        "Supercar Speeds: New Model Breaks Records.",
        "Sleek Designs and Tech Upgrades Dominate.",
        "Electric Cars Spark Revolutionary Shift in Automotive"
    ];

    const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadlineIndex((prevIndex) =>
                (prevIndex + 1) % newsHeadlines.length
            );
        }, 12000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-white'>
            <div className='px-9 flex justify-between'>
                <h1 className="inline bg-purple-600 text-white px-2">Trending now</h1>
                <div className="overflow-hidden">
                    <div className="animate-marquee">
                        {newsHeadlines[currentHeadlineIndex]}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                    {carsData.map((car, index) => (
                        <div key={index} className="bg-white p-4">
                            <img src={car.image} alt={`Car ${index + 1}`} className="mb-2 w-full h-52 object-cover" />
                            <h2 className="text-xl font-semibold mb-2 hover:text-purple-600">{car.heading}</h2>
                            <div className='flex justify-between'>
                                <p className="text-gray-600 mb-1">{car.writer}</p>
                                <p className="text-gray-600"> {car.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trending;