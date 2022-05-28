import React from 'react';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';

export default function container({children}) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}
