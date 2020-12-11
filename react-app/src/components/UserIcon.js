import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const UserIcon = ({ user }) => {
    const history = useHistory();
    console.log('id: ', user.id)
    const handleClick = () => {
        history.push(`/users/${user.id}`)
    }

    return (
        <div className='user-icon' onClick={handleClick}>
            {!user.icon ? 
            <img src={require('../images/whaledude.jpg')} className='icon-img' /> : 
            <img src={user.icon_url} className='icon-img'/>}
        </div>
    )
}

export default UserIcon;