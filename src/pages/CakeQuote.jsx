import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const CakeQuote = () => {
    const navigate = useNavigate();
    const [fileName, setFileName] = useState("No file chosen");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your inquiry! We'll be in touch shortly to discuss your event.");
    };

    const handleFileChange = (e) => {
        setFileName(e.target.files[0]?.name || "No file chosen");
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="my-20">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                    {/* Form Header */}
                    <div className="bg-primary text-white px-8 py-6">
                        <h2 className="text-3xl font-bold mb-2">Request a Custom Quote</h2>
                        <p className="opacity-90">
                            Complete the form below and our event specialists will prepare a personalized proposal within 24 hours.
                        </p>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="px-8 py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Personal Information */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Event Details */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Type of Cake *</label>
                                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
                                    <option value="">Select event type</option>
                                    <option>Birthday Cake</option>
                                    <option>Custom Design</option>
                                    <option>Edible Print</option>
                                    <option>Cup Cake with Design</option>
                                    <option>Engagement Cake</option>
                                    <option>Wedding Cake</option>
                                    <option>Anniversary Cake</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Serving Size *</label>
                                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
                                    <option value="">Select cuisine style</option>
                                    <option>35-40 pieces</option>
                                    <option>45-50 pieces</option>
                                    <option>55-60 pieces</option>
                                    <option>65-70 pieces</option>
                                    <option>75-80 pieces</option>
                                    <option>More than 80 pieces</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Required Date *</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Reference Image (Optional)</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="file-upload"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        accept="image/*"
                                    />
                                    <div className="flex items-center">
                                        <label
                                            htmlFor="file-upload"
                                            className="px-4 py-2.5 border border-gray-200 rounded-l-lg bg-gray-50 text-gray-700 cursor-pointer hover:bg-gray-100"
                                        >
                                            Choose File
                                        </label>
                                        <span className="px-4 py-2.5 border border-l-0 border-gray-200 rounded-r-lg bg-white text-gray-500 flex-grow truncate">
                                            {fileName}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Venue Details */}
                            <div className="md:col-span-2">
                                <label className="block text-gray-700 font-medium mb-2">Venue Address *</label>
                                <textarea
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    rows="3"
                                    placeholder="Please include full venue details"
                                    required
                                ></textarea>
                            </div>

                            {/* Additional Notes */}
                            <div className="md:col-span-2">
                                <label className="block text-gray-700 font-medium mb-2">Special Requirements</label>
                                <textarea
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    rows="2"
                                    placeholder="Dietary restrictions, theme details, or special requests"
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CakeQuote;