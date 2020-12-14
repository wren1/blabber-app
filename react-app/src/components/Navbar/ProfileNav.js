import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileDropdown from './ProfileDropdown';


const ProfileNav = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const user = useSelector(state => state.currentUser)

    const handleClick = () => {
        console.log('boop')
        setOpenDropdown(!openDropdown)
    }
    if (!user) return null;

    return (
        <div className='navbar__profilenav'>
            <div className='bop' onClick={handleClick}>
                {!user.icon ? 
                <img src={require('../../images/whaledude.jpg')} className='navbar-usericon' /> : 
                <img src={user.icon_url} className='navbar-usericon'/>}
            </div>
            {!openDropdown ? null :
            <ProfileDropdown user={user} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} /> }
        </div>
        
    )
}

export default ProfileNav;