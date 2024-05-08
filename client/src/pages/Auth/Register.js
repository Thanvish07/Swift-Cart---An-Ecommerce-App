import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import '../../styles/AuthStyles.css'
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [key, setKey] = useState("");
    const navigate = useNavigate();

    // form function
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlekeyChange = (event) => {
        setKey(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address, key });
            if (res && res.data.success) {
                setTimeout(() => {
                    toast.success(res.data.message); // Clear toast after 5 seconds
                }, 5000);
                navigate('/login');
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error occurred while registering!');
        }
    };
    console.log(process.env.REACT_APP_API);
    return (
        <Layout title={'Register - Swift Cart'}>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>Register Form</h4>
                    <div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                className="form-control"
                                id="nameInput"
                                placeholder='Enter Your Name'
                                required
                            />
                        </div>
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
                        <div className="mb-3">
                            <input
                                type="text"
                                value={phone}
                                onChange={handlePhoneChange}
                                className="form-control"
                                id="phoneInput"
                                placeholder='Enter Your Phone Number'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                className="form-control"
                                id="addressInput"
                                placeholder='Enter Your Address'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={key}
                                onChange={handlekeyChange}
                                className="form-control"
                                id="addressInput"
                                placeholder='Enter Your Secret key'
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
