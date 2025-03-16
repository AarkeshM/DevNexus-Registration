import React from 'react'
import { useNavigate } from 'react-router-dom'
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import bird from '../assets/pic3.jpg';
import ph from '../assets/phon.jpg'

const About = () => {

    const navigate = useNavigate();

    const handleRegisterOneClick = () => navigate('/genai');
    const handleRegisterTwoClick = () => navigate('/hackathon')
    const handleRegisterThreeClick = () => navigate('/debug')

    return (

        <div className="relative min-h-screen w-full">
       
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${pic1})`,
                filter: 'brightness(0.4)', // Dim effect
                zIndex: -1
            }}
        />

        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 shadow-md z-10">
                <div className="flex justify-between items-center px-4">
                    <h1 className="text-2xl mt-2.5 mb-2.5 font-extrabold">DevNexus 2025</h1>
                    <ul className="flex gap-6">
                        <li className="hover:text-yellow-300 font-semibold cursor-pointer">Home</li>
                        <li className="hover:text-yellow-300 font-semibold cursor-pointer">Events</li>
                        <li className="hover:text-yellow-300 font-semibold cursor-pointer">Contact</li>
                    </ul>
                </div>
            </nav>
            <div className="flex flex-col items-center w-full max-w-[950px] mx-auto mt-32 gap-10 relative">
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-7xl  mt-8 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-transparent'>
                    Welcome to DevNexus 2K25!
                </h1>
                <br />
                <p className='text-semibold text-m text-slate-200'>
                    The ultimate tech showdown where developers, problem-solvers, and innovators come together to push the boundaries of creativity and execution! Get ready for a day filled with intense challenges, groundbreaking ideas, and coding excellence.
                </p>
            </div>
            <div className="relative flex w-full justify-center gap-10">
                <div
                    className="w-1/2 bg-center text-white p-6 rounded-2xl shadow-lg  animate-glow "
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),url(${ph})` }}
                >
                    <h2 className="text-2xl font-extrabold">Algnite</h2> <br />
                    <p className='font-bold'>
                        🧠 AIgnite - Gen AI Challenge
                        <br />
                        Ignite Innovation with AI!
                        <br />
                        💡 Description:
                        Step into the future of AI! This challenge tests your ability to harness the power of Generative AI to solve real-world problems. From text generation to image synthesis, let your AI-driven solutions shine.
                        <br />
                        🔹 Rules:
                        <br />
                        1. Participants can work individually or in teams of up to 3 members. <br />
                        2. Any AI framework or model (e.g., OpenAI, Hugging Face, Llama, Stable Diffusion) is allowed. <br />
                        3. Teams will be given a problem statement and must develop a working AI-powered solution. <br />
                        4. Round 1: Pitch your idea and showcase a basic prototype. <br />
                        5. Round 2: A deep-dive technical review of implementation and performance. <br />
                        6. Judging will be based on innovation, feasibility, and impact. <br />
                    </p>
                    <button
                        onClick={handleRegisterOneClick}
                        className="bg-slate-400 text-white text-xl px-4 py-1.5 ml-36 mt-2 mb-2 rounded-lg shadow-lg hover:bg-cyan-400  transition duration-300 items-center justify-center">
                        ₹150
                    </button>

                </div>
                <div
                    className="w-1/2 bg-center bg-cover text-white p-6 rounded-2xl shadow-lg  animate-glow "
                    style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${pic2})` }}
                >
                    <h2 className="text-2xl font-bold">CodeStorm</h2><br />
                    
                    <p className='font-bold'>
                        💡 CodeStorm - Hackathon
                        <br />
                        Brainstorm. Build. Breakthrough!<br />

                        💡 Description:<br />
                        A high-energy hackathon where teams take on a real-world problem statement and build a working prototype within a few hours. Creativity, problem-solving, and execution speed are key!
                        <br />
                        🔹 Rules:<br />

                        1. Teams of 2-4 members are allowed.<br />
                        2. The problem statement will be revealed at the start of the event.<br />
                        3. Participants must develop a full-stack solution (Web/App/ML-based).<br />
                        4. Round 1: Present a basic working prototype.<br />
                        5. Round 2: Judges evaluate scalability, code quality, and real-world applicability.<br />
                        6. Use of AI tools (ChatGPT, GitHub Copilot) is allowed, but copy-pasting without understanding is a no-go.<br />
                    </p>
                    <button
                        onClick={handleRegisterTwoClick}
                        className=" text-white bg-slate-400 text-xl px-4 py-1.5 ml-36 mt-6 mb-1 rounded-lg shadow-lg hover:bg-cyan-500 transition duration-300 items-center justify-center">
                        ₹150
                    </button>
                </div>
            </div>

            <div
                    className="w-1/2 bg-center mb-3 bg-cover text-white p-6 rounded-2xl shadow-lg animate-glow "
                    style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${bird})` }}
                >
                <h2 className="text-2xl font-bold">AlgoRush</h2><br />

                <p className='font-bold'>
                    ⚡ AlgoRush - Efficient Code Challenge <br />

                    Code Smart, Run Fast!<br />

                    💡 Description:<br />
                    Speed meets optimization! Compete against the clock to solve algorithmic problems with the most efficient and optimized solutions.<br />
                    🔹 Rules:<br />

                    1. Solo participation only.<br />
                    2. Problems will range from DSA, dynamic programming, and graph theory to real-world optimization tasks.<br />
                    3. Round 1: Solve a set of algorithmic challenges within 3 hours.<br />
                    4. Round 2: The top performers compete in a rapid-fire coding battle.<br />
                    5. Code efficiency, time complexity, and correctness will be strictly evaluated.<br />
                </p>
                <button
                    onClick={handleRegisterThreeClick}
                    className="bg-slate-400 text-white text-xl px-4 py-1.5 ml-48 mt-3 mb-2 rounded-lg shadow-lg hover:bg-cyan-400  transition duration-300 items-center justify-center">
                    ₹150
                </button>
            </div>
        </div>
        </div>
    )
}

export default About
