'use client';
import React, { useState, useEffect } from 'react';

const reviews = [
    {
        name: 'John Doe',
        imageSrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        review: 'Just got my hands on the latest car model. It\'s a beast on the road!',
        rating: 4,
    },
    {
        name: 'Jane Smith',
        imageSrc: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
        review: 'The new car I purchased is a game-changer. ',
        rating: 4,
    },
    {
        name: 'Alice Johnson',
        imageSrc: 'https://www.indiafilings.com/learn/wp-content/uploads/2023/03/Can-a-single-person-own-a-firm-in-India.jpg',
        review: 'I can\'t believe how stylish my new car looks.',
        rating: 3,
    },
    {
        name: 'Bob Brown',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg',
        review: 'The performance of my new car is top-notch. It never disappoints.',
        rating: 3,
    },
    {
        name: 'Eva White',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-K5Y_PGPdCel6xLO2cCUvQ2UA5shDgBq48CB9LysA8IUU3f3CUU0tzVPxHfKaIP8eNeY&usqp=CAU',
        review: 'I\'m extremely satisfied with my car purchase.',
        rating: 3,
    },
    {
        name: 'Michael Lee',
        imageSrc: 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
        review: 'This car is a must-buy for anyone who wants a thrilling.',
        rating: 3,
    },
];

const ReviewsPage = ({ intervalDuration = 3000, reviewsPerSlide = 2 }) => {
    const [currentReviews, setCurrentReviews] = useState(reviews.slice(0, reviewsPerSlide));
    const [currentIndex, setCurrentIndex] = useState(reviewsPerSlide);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex + reviewsPerSlide >= reviews.length) {
                    return 0;
                }
                return prevIndex + reviewsPerSlide;
            });
            setCurrentReviews(reviews.slice(currentIndex, currentIndex + reviewsPerSlide));
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`text-2xl ${
                        i <= rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="bg-gray-100 p-8">
            <h1 className="bg-purple-600 text-white text-center">Reader's Review</h1>
            <div className="flex space-x-4 mt-5">
                {currentReviews.map((rev, index) => (
                    <div key={index} className="w-1/2">
                        {rev && rev.imageSrc && (
                            <div className="flex items-center space-x-4">
                                <img
                                    src={rev.imageSrc}
                                    alt={`${rev.name}'s photo`}
                                    className="w-16 h-16 rounded"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{rev.name}</h3>
                                    <p className="text-gray-600">{rev.review}</p>
                                    <div>
                                        {renderStars(rev.rating)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsPage;