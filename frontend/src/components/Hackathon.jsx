import React, { useState } from 'react';

const Hackathon = () => {
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
            const response = await fetch('http://localhost:5000/register-hackathon', {
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
                <h1 className="text-2xl font-bold mb-4">CodeStrom 2025</h1>
                <p className="text-gray-700 mb-4">
                    A high-energy hackathon where teams take on a real-world problem statement and build a working prototype within a few hours. Creativity, problem-solving, and execution speed are key!
                </p>
                <h3 className="font-bold text-lg mb-2">🔹 Rules:</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Teams of 2-4 members are allowed.</li>
                    <li>The problem statement will be revealed at the start of the event.</li>
                    <li>Participants must develop a full-stack solution (Web/App/ML-based).</li>
                    <li>Round 1: Present a basic working prototype.</li>
                    <li>Round 2: Judges evaluate scalability, code quality, and real-world applicability.</li>
                    <li>Use of AI tools (ChatGPT, GitHub Copilot) is allowed, but copy-pasting without understanding is a no-go.</li>
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
                        <a href="https://chat.whatsapp.com/Km8WITfgdMsKUuH1Qk8Sfu" target="_blank" className="text-blue-500 underline">
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

export default Hackathon;
