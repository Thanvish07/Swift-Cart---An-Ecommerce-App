import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ flex: '1', paddingBottom: '60px', marginBottom: '70px' }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Swift Cart - A Modern Ecommerce Website',
  description: 'Mern Stack Project',
  keywords: 'Mern, React. Node, Express, Mongodb',
  author: 'JTV',
};

export default Layout;
