import React from 'react';

import ProfileOption from './ProfileOption';
import ActivityOption from './ActivityOption';
import FriendsOption from './FriendsOption';
import SignoutOption from './SignoutOption';


const ProfileDropdown = ({ user, setAuthenticated }) => {

    return (
        <div className='navbar__profilenav-dropdown'>
            <ProfileOption user={user} />
            <ActivityOption user={user} />
            <FriendsOption user={user} />
            <SignoutOption user={user} setAuthenticated={setAuthenticated} />
        </div>
    )
}

export default ProfileDropdown;