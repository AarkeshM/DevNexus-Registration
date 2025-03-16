import React, { useState } from 'react';

const GenAi = () => {
    const [formData, setFormData] = useState({
        name: "",
        college: "",
        year: "",
        department: "", 
        email: "",
        mobile: "",
        proof: null,
    });

    const [message, setMessage] = useState(""); // Success/Error Message

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files.length > 0) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch('http://localhost:5000/register-genai', {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                setMessage("✅ Form submitted successfully!");
            } else {
                setMessage("❌ Error submitting the form. Please try again.");
            }
        } catch (error) {
            setMessage("❌ Network error. Please check your connection.");
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center min-h-screen bg-gray-100 p-10 gap-8">
            {/* Event Details */}
            <div className="md:w-1/2 bg-white shadow-md rounded-xl p-6">
                <h1 className="text-2xl font-bold mb-4">Algnite 2025</h1>
                <p className="text-gray-700 mb-4">
                Step into the future of AI! This challenge tests your ability to harness the power of Generative AI to solve real-world problems. From text generation to image synthesis, let your AI-driven solutions shine.
                </p>
                <h3 className="font-bold text-lg mb-2">🔹 Rules:</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
               <li>Participants can work individually or in teams of up to 3 members.</li>
               <li>Any AI framework or model (e.g., OpenAI, Hugging Face, Llama, Stable Diffusion) is allowed.</li>
               <li>Teams will be given a problem statement and must develop a working AI-powered solution.</li>
               <li>Round 1: Pitch your idea and showcase a basic prototype.</li>
               <li>Round 2: A deep-dive technical review of implementation and performance.</li>
               <li>Judging will be based on innovation, feasibility, and impact.</li>
                </ul>
            </div>

            {/* Registration Form */}
            <div className="md:w-1/2 bg-white shadow-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-center mb-4">Event Registration</h2>

                {message && (
                    <div className={`text-center mb-4 ${message.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                    <input name="college" placeholder="College" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                    <input name="year" placeholder="Year" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                    <input name="department" placeholder="Department" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                    <input name="email" placeholder="Email ID" type="email" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                    <input name="mobile" placeholder="Mobile Number" type="tel" pattern="\d{10}" onChange={handleChange} className="w-full p-2 border rounded-lg" required />

                    <div className="flex items-center gap-4">
                        <a href="https://chat.whatsapp.com/BADur1Gs9p60ZGJ9sgmRz7" target="_blank" className="text-blue-500 underline">
                            Join WhatsApp Group
                        </a>
                    </div>

                    <div className="text-center my-4">
                        <h3 className="font-bold text-lg">Registration Fee</h3>
                        <img src="/images/qrcode.jpg" alt="QR Code for Payment" className="mx-auto w-36" />
                    </div>

                    <div className="text-center my-4">
                        <label className="block font-bold text-lg mb-2">Upload Payment Proof (Screenshot)</label>
                        <input type="file" name="proof" accept=".pdf, .jpg, .jpeg, .png" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                    </div>

                    <button type="submit" className="bg-blue-500 w-full text-white py-2 rounded-lg">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GenAi;


