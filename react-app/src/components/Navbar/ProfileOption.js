import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const ProfileOption = ({ user }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/users/${user.id}`)
    }

    if (!user) return null;

    return (
        <div className='profilenav__dropdown-option' onClick={handleClick}>
            {user.username}
        </div>
    )
}

export default ProfileOption;