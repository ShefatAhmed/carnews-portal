'use client';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const NavBar = () => {
    const { user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const dynamicLinks = [
        { href: '/', label: 'Home' },
        { href: '/latestnews', label: 'Latest News' },
        user !== null ? { href: '/review', label: 'Review' } : null,
        { href: '/about', label: 'About Us' },
    ].filter(Boolean); 

    const handleLogout = async () => {
        const toastId = toast.loading("Loading...");
        try {
            await logout();
            toast.dismiss(toastId);
            toast.success("Successfully logged out");
        } catch (error) {
            toast.error("Failed to log out");
            toast.dismiss(toastId);
        }
    };

    return (
        <nav className="bg-gradient-to-r from-indigo-400 to-purple-600 shadow-2xl">
            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
                <div className="flex items-center">
                    <Link href="/">
                        <p className="text-white text-xl font-extrabold">
                            <span className="text-white">CARS</span>NEWS
                        </p>
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        {menuOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                {menuOpen && (
                    <div className="lg:hidden absolute top-16 right-0 bg-white w-full p-4 z-10">
                        {dynamicLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <span className="block text-gray-800 py-2">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="hidden lg:flex items-center space-x-4">
                    {dynamicLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <span className="text-white hover:text-gray-300">{link.label}</span>
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center md:mt-4 lg:mt-0 lg:ml-4 md:w-full lg:w-auto">
                    <div className="relative">
                        <input
                            type="text"
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Search..."
                        />
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M13.293 14.293a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414zM9 15a6 6 0 100-12 6 6 0 000 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    {user ? (
                        <button onClick={handleLogout} className="text-white">
                            Logout
                        </button>
                    ) : (
                        <Link href="/login">
                            <span className="text-white">Login</span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;