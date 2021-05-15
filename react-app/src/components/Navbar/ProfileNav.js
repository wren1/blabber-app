import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProfileDropdown from './ProfileDropdown';


const ProfileNav = ({setAuthenticated}) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const user = useSelector(state => state.currentUser)

    const handleClick = () => {
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
            <ProfileDropdown user={user} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} setAuthenticated={setAuthenticated} /> }
        </div>
        
    )
}

export default ProfileNav;