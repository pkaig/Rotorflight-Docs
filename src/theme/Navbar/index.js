import './rfNavbar.css';
import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  return (
    <>
      <div className='rfNavbar navbar--fixed-top'>
        <Navbar {...props} />
      </div>
    </>
  );
}
