'use client'
import React, { useState } from 'react';

const AddReview = () => {
    const [formData, setFormData] = useState({
        carMake: '',
        carModel: '',
        rating: '',
        review: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.carMake || !formData.carModel || !formData.rating || !formData.review) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log('Form submitted with data:', formData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <h2 className="text-3xl font-semibold mb-4">Add a Review</h2>

                    <div>
                        <label htmlFor="carMake" className="block text-sm font-medium text-gray-700">
                            Author Name
                        </label>
                        <input
                            type="text"
                            id="carMake"
                            name="carMake"
                            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Enter a author name"
                            required
                            value={formData.carMake}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="carModel" className="block text-sm font-medium text-gray-700">
                            Car Model
                        </label>
                        <input
                            type="text"
                            id="carModel"
                            name="carModel"
                            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Enter car model"
                            required
                            value={formData.carModel}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            min="1"
                            max="5"
                            className="mt-1 p-3 w-1/4 border border-gray-300 rounded-md"
                            placeholder="1-5"
                            required
                            value={formData.rating}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                            Review
                        </label>
                        <textarea
                            id="review"
                            name="review"
                            rows="5"
                            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Write your review here"
                            required
                            value={formData.review}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    {/* Add more form fields as needed for additional information */}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;