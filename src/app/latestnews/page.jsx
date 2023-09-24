'use client';
import useAuth from '@/hooks/useAuth';
import React, { useState } from 'react';

const newsData = [
    {
        title: 'Incredible New Car Model Unveiled',
        image: 'https://images.hindustantimes.com/auto/img/2022/12/21/1600x900/concept_2022_1671624663563_1671624671747_1671624671747.jpeg',
        description: 'Prepare to be amazed as the automotive world welcomes a revolutionary new car model that pushes the boundaries of design and performance. Get ready for a journey into the future of transportation.',
    },
    {
        title: 'Top 10 Fuel-Efficient Cars of 2023',
        image: 'https://images.91wheels.com/news/wp-content/uploads/2023/04/Copy-of-91WHEELS-News-2023-04-03T170844.550.png?w=1080&q=65',
        description: 'Discover the eco-friendly marvels of 2023. These fuel-efficient cars are not only easy on your wallet but also on the environment. Join the movement towards sustainability today.',
    },
    {
        title: 'Electric Car Sales Surge in Q3',
        image: 'https://www.counterpointresearch.com/wp-content/uploads/2022/11/Counterpoint_top-10-EV-models-1024x700.jpg',
        description: 'The electric revolution continues to gain momentum as sales soar in the third quarter. Embrace the future of transportation and be a part of the clean energy revolution.',
    },
    {
        title: 'The Future of Autonomous Vehicles',
        image: 'https://www.cubictelecom.com/wordpress/wp-content/uploads/2021/08/2030-AVs-shutterstock_1793836513-Cropped-1536x864.jpg',
        description: 'Experience the fascinating world of autonomous vehicles. Imagine a future where cars drive themselves, making our roads safer and more efficient. The future is here, and its thrilling!',
    },
    {
        title: 'Classic Car Show Returns to the City',
        image: 'https://wildwoodvideoarchive.com/wp-content/uploads/2023/08/Fall-Wildwood-Classic-Car-Show-Returning-to-the-Wildwood-Boardwalk-728x410.png',
        description: 'Relive the golden era of automobiles as the classic car show returns to the city. Admire the timeless beauty and craftsmanship of vintage cars. Step back in time and be captivated by automotive history.',
    },
    {
        title: 'Ford Announces Green Energy Partnership',
        image: 'https://media.ford.com/content/fordmedia/fna/us/en/news/2022/11/15/ford-announces-strategic-partnership-with-manufacture-2030-to-en/jcr:content/image.img.881.495.jpg/1668522304754.jpg',
        description: 'Ford takes a monumental step toward a sustainable future with its green energy partnership. Witness a major player in the automotive industry leading the charge toward a greener and cleaner world.',
    },
    {
        title: 'Latest Advances in Car Safety Technology',
        image: 'https://www.apzomedia.com/wp-content/uploads/2021/01/How-Technology-can-Help-Automotive-Industry.jpg',
        description: 'Stay updated on the cutting-edge advancements in car safety technology. Your safety on the road is paramount, and the automotive industry is dedicated to making every journey a secure one.',
    },
    {
        title: 'Electric SUVs Gain Popularity Among Buyers',
        image: 'https://images.newscientist.com/wp-content/uploads/2021/01/21103512/gettyimages-1228669722_web.jpg',
        description: 'Join the trend of eco-conscious buyers as electric SUVs gain popularity. Experience the perfect blend of style, utility, and sustainability as you navigate the road in an electric SUV.',
    },
    {
        title: 'New Luxury Sedan Hits the Market',
        image: 'https://hips.hearstapps.com/hmg-prod/images/p90467422-highres-world-s-media-share-1677268347.jpg?crop=0.665xw:0.666xh;0.165xw,0.145xh&resize=980:*',
        description: 'Elevate your driving experience with the latest luxury sedan in the market. Immerse yourself in the epitome of comfort, technology, and style. Indulge in the art of automotive luxury.',
    },
    {
        title: 'Racing Car Championship: Final Round Recap',
        image: 'https://i1.wp.com/www.btcc.net/wp-content/uploads/2022/07/Cook-PM6_5640-scaled.jpg?resize=720%2C400&ssl=1',
        description: 'Witness the heart-pounding excitement of the final round of the Racing Car Championship. The worlds best drivers compete for glory in an adrenaline-fueled spectacle that will leave you breathless.',
    },
    {
        title: 'Car Design Trends for 2023 and Beyond',
        image: 'https://images.prismic.io/findandfundmycarcom/d09852ab-6ef1-4648-aad4-093b0e333c0e_trends.jpg?auto=compress,format&rect=77,0,1298,913&w=640&h=450',
        description: 'Explore the future of car design in 2023 and beyond. From sleek aerodynamics to innovative interiors, the automotive industry is shaping the cars of tomorrow. Get a glimpse of whats to come!',
    },
    {
        title: 'Affordable Electric Cars for the Masses',
        image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/11-dacia-spring-top-10.jpg',
        description: 'Making the switch to electric has never been more accessible. Affordable electric cars are revolutionizing the way we commute. Join the movement and embrace a cleaner, more sustainable future.',
    }
];


const LatestNewsPage = () => {
    const { user } = useAuth();
    const [selectedArticle, setSelectedArticle] = useState(null);

    const openModal = (article) => {
        if (!user) {
            // Redirect to the login page if the user is not logged in
            window.location.href = '/login'; // Replace '/login' with the actual path to your login page
        } else {
            setSelectedArticle(article);
        }
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="inline bg-purple-600 text-white px-2">Latest News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                {newsData.map((article, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{article.title}</div>
                            <p className="text-gray-700 text-base">
                                {article.description.length > 56
                                    ? article.description.substring(0, 56) + '...'
                                    : article.description}
                                {article.description.length > 56 && (
                                    <span>
                                        <a
                                            href="#"
                                            className="text-purple-600 mt-2"
                                            onClick={() => openModal(article)}
                                        >
                                            Read More
                                        </a>
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedArticle && (
                <div className="fixed inset-0 flex items-center justify-center px-96">
                    <div className="modal bg-gradient-to-b from-indigo-50 to-purple-900 p-4 shadow-lg rounded-lg">
                        <h2 className=" mb-4 italic">{selectedArticle.title}</h2>
                        <p className="text-white">{selectedArticle.description}</p>
                        <button
                            className="border px-1 text-white font-extrabold mt-4"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LatestNewsPage;