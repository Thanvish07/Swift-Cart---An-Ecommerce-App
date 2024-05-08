import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={'Privacy policy - Swift Cart'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className='bg-dark p-2 text-white text-center'>Privacy Policy</h1>
          <p><b>Introduction</b>:
            Welcome to our <b>Swift Cart </b> shopping website's privacy policy. We are committed to protecting the privacy and security of our users' personal information.
          </p>
          <p><b>Information Collected</b></p>
          <p><b>Use of Information</b></p>
          <p><b>Information Sharing</b></p>
          <p><b>Security Measures</b></p>
          <p><b>User Rights and Choices</b></p>
          <p><b>Changes to the Privacy Policy</b></p>
        </div>
      </div>
    </Layout>
  );
}

export default Policy;
