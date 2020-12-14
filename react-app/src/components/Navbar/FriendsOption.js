import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const FriendsOption = ({ user }) => {

    return (
        <div className='profilenav__dropdown-option'>
            Friends ( {!user.friends.length ? 0 : user.friends.length} )
        </div>
    )
}

export default FriendsOption;