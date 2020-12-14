import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const ProfileOption = ({ user }) => {

    if (!user) return null;

    return (
        <div className='profilenav__dropdown-option'>
            {user.username}
        </div>
    )
}

export default ProfileOption;