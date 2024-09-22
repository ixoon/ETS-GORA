// components/Layout.jsx
import React from 'react';
import MiniNavbar from './miniNavbar';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div>
            <MiniNavbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
