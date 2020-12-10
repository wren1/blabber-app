import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const UserInfo = ({ user }) => {

    return (
        <div className='profile__user-info'>
            {!user ? null : user.username}
        </div>
    )
}

export default UserInfo;