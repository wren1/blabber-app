import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const ProfileIcon = ({ user, size, group }) => {
    const history = useHistory();
    // console.log('id: ', user.id)
    if (!user && !group) return null;
    const handleClick = () => {
        history.push(`/users/${user.id}`)
    }
    let icon;
    if (group) {
        icon = group.icon_url;
    } else {
        icon = user.icon_url
    }

    return (
        <div className='icon' onClick={handleClick}>
            {!icon ? 
            <img src={require('../images/cutewhaler.png')} className={`${size}-icon border-icon-${size}`} /> : 
            <img src={icon} className={`${size}-icon`} />}
        </div>
    )
}

export default ProfileIcon;