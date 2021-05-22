import React from 'react';

import SearchBar from './SearchBar';
import Logo from './Logo';


const Navbar = () => {
    
    return (
        <div className='navbar'>
            <Logo />
            <SearchBar />
        </div>
    )
}

export default Navbar;