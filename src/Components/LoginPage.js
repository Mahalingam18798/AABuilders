import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin123') {
            setLoggedIn(true);
            navigate('/main');

        }
        if (username === 'mahalingam' && password === '12345') {
            setLoggedIn(true);
            navigate('/main');

        }
        else {
            alert('Please enter both username and password.');
        }
    };

    return (
        <div className="min-h-screen bg-[#5e73d3] flex justify-center items-center">
            {loggedIn ? (
                <p>Redirecting...</p>
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <input
                        className="border border-gray-300 rounded-md w-full mb-2 px-3 py-2"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        className="border border-gray-300 rounded-md w-full mb-2 px-3 py-2"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleLogin}>
                        Login
                    </button>
                </div>
            )}
        </div>
    );
}

export default LoginPage;
