import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import ProfileNav from './ProfileNav';


const Navbar = () => {

    return (
        <div className='navbar'>
            <SearchBar />
            <ProfileNav />
        </div>
    )
}

export default Navbar;