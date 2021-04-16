import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import ProfileNav from './ProfileNav';
import Logo from './Logo';


const Navbar = ({setAuthenticated}) => {
    const user = useSelector(state => state.currentUser)
    
    return (
        <div className='navbar'>
            <Logo />
            <SearchBar />
            {/* <ProfileNav setAuthenticated={setAuthenticated} /> */}
        </div>
    )
}

export default Navbar;