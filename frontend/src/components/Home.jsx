import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [showSecondLogo, setShowSecondLogo] = useState(false);
    const [spinningButton, setSpinningButton] = useState(null); // For targeted spin effect
    const navigate = useNavigate();

    const handleClickWithSpin = (id, navigateFunction) => {
        setSpinningButton(id); // Identify the clicked button
        setTimeout(() => {
            setSpinningButton(null); // Stop spinning after 0.5s
            navigateFunction();     // Redirect after spin
        }, 500);
    };

    function calculateTimeLeft() {
        const eventDate = new Date("2025-03-22T00:00:00").getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        const logoTimer = setTimeout(() => setShowSecondLogo(true), 3000);

        return () => {
            clearInterval(timer);
            clearTimeout(logoTimer);
        };
    }, []);

    const handleRegisterhackathonClick = () => navigate('/hackathon');
    const handleRegisterGenAiClick = () => navigate('/genai');
    const handleRegisterDebugClick = () => navigate('/debug');
    const handleAbout = () => navigate('/about')

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 shadow-md z-10">
                <div className="flex justify-between items-center px-4">
                    <h1 className="text-2xl mt-2.5 mb-2.5 font-bold">DevNexus 2025</h1>
                    <ul className="flex gap-6">
                        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
                        <li className="hover:text-yellow-300 cursor-pointer">Events</li>
                        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
                    </ul>
                </div>
            </nav>

            <div className="flex flex-col items-start justify-center min-w-full min-h-screen p-4 bg-gray-100 pt-20">
                <img src="/wallpapersden.com_programming-coding-language_3840x2160.jpg"
                    alt="KSR College of Engineering"
                    className="w-auto h-auto object-cover rounded-2xl shadow-lg" />

                <div className="flex flex-row items-start justify-between w-full px-10 py-20 space-x-10">
                    <div className="flex-1 text-left">
                        <h1 className="text-5xl font-bold mb-6">
                            <span className="text-violet-300">Forge </span>
                            <span className="text-red-300">Your </span>
                            <span className="text-blue-300">Future </span>
                            at <span className="text-orange-300">DevNexus 2K25!</span>
                        </h1>
                        <p className="text-lg max-w-xl mb-6">
                            KSR College of Engineering, Department of Computer Science and Engineering presents DevNexus,
                            a techno-cultural fest on <b>March 22</b>. Join us for an unforgettable experience!
                        </p>
                    </div>

                    <div className="flex-1 flex items-center">
                        {showSecondLogo ? (
                            <div className="flex items-center space-x-4">
                                <img src="/images/logo.jpg" alt="KSR College Logo" className="w-40 shadow-md rounded-lg transition-all duration-500 ease-in-out transform scale-105" />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-700">KSR College of Engineering</h2>
                                    <p className="text-sm text-gray-500">Tiruchengode - 637215, Tamil Nadu, India</p>
                                </div>
                            </div>
                        ) : (
                            <img src="/images/logo-png.png" alt="Initial Logo" className="w-40 shadow-md rounded-lg transition-all duration-500 ease-in-out transform scale-105" />
                        )}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center ml-[666px]">
                    <button
                        className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 
                   text-white font-bold px-6 py-3 rounded-lg shadow-lg 
                   animate-bounce hover:animate-none 
                   transition-all duration-300" onClick={handleAbout}
                    >
                        Register Now
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center w-full mt-10 space-y-6">
                    <div className="flex space-x-6">

                        {/* Box 1 - Algnite */}
                        <div className="relative w-60 h-60 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-6 rounded-xl shadow-2xl border-4 border-yellow-400 
                            hover:ring-4 hover:ring-yellow-500 hover:ring-opacity-50 animate-float transition-all duration-300">
                            <h2 className="text-3xl font-extrabold text-center mb-4">Algnite</h2>
                            <p className="text-center">Coding challenges await you!</p>
                            <button
                                onClick={() => handleClickWithSpin('algnite', handleRegisterGenAiClick)}
                                className={`bg-white text-yellow-600 text-xl px-6 py-3 mt-4 rounded-full shadow-md 
                                hover:bg-yellow-700 hover:text-white transition-transform duration-500
                                ${spinningButton === 'algnite' ? 'animate-spin' : ''}`}
                            >
                                ₹150
                            </button>
                        </div>

                        {/* Box 2 - CodeStorm */}
                        <div className="relative w-60 h-60 bg-gradient-to-r from-blue-400 to-blue-500 text-black p-6 rounded-xl shadow-2xl border-4 border-blue-400 
                            hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50 animate-float transition-all duration-300">
                            <h2 className="text-3xl font-extrabold text-center mb-4">CodeStorm</h2>
                            <p className="text-center">Conquer the code challenge!</p>
                            <button
                                onClick={() => handleClickWithSpin('codestorm', handleRegisterhackathonClick)}
                                className={`bg-white text-blue-600 text-xl px-6 py-3 mt-4 rounded-full shadow-md 
                                hover:bg-blue-700 hover:text-white transition-transform duration-500
                                ${spinningButton === 'codestorm' ? 'animate-spin' : ''}`}
                            >
                                ₹150
                            </button>
                        </div>

                        {/* Box 3 - Algorush */}
                        <div className="relative w-60 h-60 bg-gradient-to-r from-pink-400 to-pink-500 text-black p-6 rounded-xl shadow-2xl border-4 border-pink-400 
                            hover:ring-4 hover:ring-pink-500 hover:ring-opacity-50 animate-float transition-all duration-300">
                            <h2 className="text-3xl font-extrabold text-center mb-4">Algorush</h2>
                            <p className="text-center">Rush into algorithmic puzzles!</p>
                            <button
                                onClick={() => handleClickWithSpin('algorush', handleRegisterDebugClick)}
                                className={`bg-white text-pink-600 text-xl px-6 py-3 mt-4 rounded-full shadow-md 
                                hover:bg-pink-700 hover:text-white transition-transform duration-500
                                ${spinningButton === 'algorush' ? 'animate-spin' : ''}`}
                            >
                                ₹150
                            </button>
                        </div>
                    </div>

                    <div className="text-center text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        Countdown to Event:
                        <div className="mt-2 text-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-300 text-transparent bg-clip-text shadow-md rounded-lg p-4 w-80">
                            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
