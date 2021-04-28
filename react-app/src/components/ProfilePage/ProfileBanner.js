import React from 'react';


const ProfileBanner = ({ user }) => {

    if (!user.banner_url) return null;

    return (
        <div className='profile_banner' >
            <img src={`${user.banner_url}`} />
        </div>
    )
}

export default ProfileBanner;