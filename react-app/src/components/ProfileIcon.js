import React from 'react';


const ProfileIcon = ({ user, size, group }) => {

    if (!user && !group) return null;
    
    let icon;
    if (group) {
        icon = group.icon_url;
    } else {
        icon = user.icon_url
    }

    return (
        <div className='icon' >
            {!icon ? 
            <img src={require('../images/cutewhaler.png')} className={`${size}-icon border-icon-${size}`} /> : 
            <img src={icon} className={`${size}-icon`} />}
        </div>
    )
}

export default ProfileIcon;