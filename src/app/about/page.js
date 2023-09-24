import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto py-12">
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-6">About Us</h1>
                    <p className="text-gray-600">
                        Welcome to CarNews, your ultimate source for the latest car news, reviews, and updates. We are passionate about all things automotive and strive to provide you with the most up-to-date and accurate information from the world of cars.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Our team of experienced writers and automotive enthusiasts is dedicated to delivering high-quality content that covers everything from new car releases and industry trends to in-depth vehicle reviews and buying guides.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Whether you're a car enthusiast or simply looking for practical advice on buying or maintaining your vehicle, CarNews has got you covered.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        At CarNews, we are on a mission to empower car enthusiasts and consumers with the knowledge they need to make informed decisions about their automotive passions. We believe that by providing accurate, unbiased, and engaging content, we can elevate the car news and information industry.
                    </p>
                    <div className="mt-8 border-t border-gray-300 pt-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                        <p className="text-gray-600">Have questions, feedback, or want to collaborate with us? Feel free to reach out to our team.</p>
                        <div className="mt-4">
                            <p className="text-gray-600">Email: <a href="mailto:info@carnews.com" className="text-blue-500">info@carnews.com</a></p>
                            <p className="text-gray-600">Phone: <a href="tel:+123456789" className="text-blue-500">+1 (234) 567-89</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;