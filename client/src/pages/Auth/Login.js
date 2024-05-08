import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/login', { email, password });
            if (res && res.data.success) {
                setTimeout(() => {
                    toast.success(res.data && res.data.message); // Clear toast after 5 seconds
                }, 5000);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || '/');
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong!');
        }
    };

    return (
        <Layout title={'Login - Swift Cart'}>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>Login Form</h4>
                    <div>
                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="form-control"
                                id="emailInput"
                                placeholder='Enter Your Email'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-control"
                                id="passwordInput"
                                placeholder='Enter Your Password'
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <button type="button" className="btn btn-primary" onClick={() => { navigate('/forgot-password') }}>
                                Forgot Password
                            </button>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Login;
