import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={'About us - Swift Cart'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className='bg-dark p-2 text-white text-center'>About Us</h1>
          <p className="text-justify mt-2">
            Welcome to our ecommerce platform, where passion meets convenience.
            At <b>Swift Cart</b>, we're dedicated to providing you with an
            unparalleled online shopping experience. With a curated selection of products
            spanning various categories, we strive to cater to every need and desire.
            Our commitment to quality, affordability, and customer satisfaction is
            unwavering. Whether you're seeking the latest fashion trends, innovative
            tech gadgets, or unique lifestyle products, we've got you covered. Shop
            with confidence, knowing that each item has been meticulously chosen to
            meet our standards of excellence. Join us in redefining the way you shop
            online, where convenience, reliability, and excitement converge seamlessly.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
