import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm({ setIsRegistering }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/auth/register', { username, password });
            setSuccess('User registered successfully!');
            setError('');
            setTimeout(() => setIsRegistering(false), 1500); 
        } catch (err) {
            console.error(err);
            setError('User already exists or server error');
            setSuccess('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-4000">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>

                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                {success && <p className="text-green-500 mb-4 text-center">{success}</p>}

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleRegister}
                    className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
                >
                    Register
                </button>

                <button
                    onClick={() => setIsRegistering(false)}
                    className="mt-4 w-full text-blue-600 hover:underline text-center"
                >
                    Already have an account? Log In
                </button>
            </div>
        </div>
    );
}
