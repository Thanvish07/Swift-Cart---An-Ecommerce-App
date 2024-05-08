import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import '../../styles/AuthStyles.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [key, setKey] = useState("");
    const navigate = useNavigate();

    // form function
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleKeyChange = (event) => {
        setKey(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/forgot-password', { email, newPassword, key });
            if (res && res.data.success) {
                setTimeout(() => {
                    toast.success(res.data && res.data.message); // Clear toast after 5 seconds
                }, 5000);
                navigate('/login');
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
        <Layout title="Fogot Password - Swift Cart">
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>Reset Password</h4>
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
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                                className="form-control"
                                id="passwordInput"
                                placeholder='Enter Your New Password'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={key}
                                onChange={handleKeyChange}
                                className="form-control"
                                id="keyInput"
                                placeholder='Enter Your Secret key'
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default ForgotPassword;
