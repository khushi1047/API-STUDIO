import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ setIsLoggedIn, setIsRegistering }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
        } catch (err) {
            console.error(err);
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back!</h2>

                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
                >
                    Log In
                </button>

                <button
                    onClick={() => setIsRegistering(true)}
                    className="mt-4 w-full text-blue-600 hover:underline text-center"
                >
                    Don't have an account? Register here
                </button>
            </div>
        </div>
    );
}
