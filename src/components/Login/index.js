import { useState } from 'react';
import axios from 'axios';
import './index.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            localStorage.setItem('token', response.data.token); 
            console.log(response)
            window.location.href = '/'; 
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="form-main-container">
            <div className="form-container">
                <div className="form-card">
                    <h2>Welcome Back!</h2>
                    <p>Access your quizzes and reports</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username or Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                        {error && <p className="error">{error}</p>}
                        <p className="signup-link">Don’t have an account? <a href="#">Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
