import React from 'react';


const Footer = () => {

    return (
        <div>
            <div className="bg-gray-800 text-white p-8">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2">
                        <a href="/" className="text-gray-300 text-xl font-extrabold">
                            <span className="text-purple-600">CARS</span>NEWS
                        </a>
                        <p className='my-5 pe-24'>
                            Newsmag is your news, entertainment, music fashion website. We provide
                            you with the latest breaking news and videos straight from the
                            entertainment industry.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p className="mt-2">
                                Address: 123 Main Street, City, State ZIP
                                <br />
                                Phone: (123) 456-7890
                            </p>
                        </div>
                        <p className='py-8'>Contact us: <span className='text-purple-600'>contact@yoursite.co</span></p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="font-bold text-black bg-white inline px-1">EVEN MORE NEWS</h1>
                        <div className="flex space-x-4 my-4">
                            <img
                                src="https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/88-100x75.jpg"
                                alt=""
                                className="w-1/5"
                            />
                            <div className="w-2/3">
                                <h1 className="font-semibold">
                                    BFGoodrich Unveils G-Force Tires
                                </h1>
                                <p>May 10, 2016</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-4">
                            <img
                                src="https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/87-100x75.jpg"
                                alt=""
                                className="w-1/5"
                            />
                            <div className="w-2/3">
                                <h1 className="font-semibold">
                                    New Car Financing and Cash Back
                                </h1>
                                <p>May 10, 2016</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <img
                                src="https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/86-100x75.jpg"
                                alt=""
                                className="w-1/5"
                            />
                            <div className="w-2/3">
                                <h1 className="font-semibold">10 Best Car Deals of the Month</h1>
                                <p>May 10, 2016</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center flex justify-between px-8 py-1 text-xs text-white bg-purple-600">
                <p>&copy; 2023 CarsNews</p>
                <p>Developed by Shefat Ahmed</p>
            </div>
        </div>
    );
};

export default Footer;