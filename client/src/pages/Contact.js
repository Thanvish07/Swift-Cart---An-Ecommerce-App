import React from 'react';
import Layout from '../components/Layout/Layout';
import { TfiEmail } from "react-icons/tfi";
import { MdAddCall } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Contact = () => {
    return (
        <Layout title={'Contact Us'} >
            <div className='row contactus'>
                <div className='col-md-6'>
                    <img
                        src="/images/contact.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>Contact Us</h1>
                    <p className='text-justify mt-2'>
                        For any query and info about the products, feel free to call us anytime.
                        We are available 24x7
                    </p>
                    <p className='mt-3'>
                        <TfiEmail /> : www.helpline@Ecom_app.com
                    </p>
                    <p className='mt-3'>
                        <MdAddCall /> : 123-4567890
                    </p>
                    <p className='mt-3'>
                        <BiSupport /> : 1800-0000-0000 (Toll Free)
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
