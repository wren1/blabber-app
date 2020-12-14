import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const ActivityOption = ({ user }) => {
    const invites = useSelector(state => state.invites.received)
    console.log('rec inv: ', invites)


    if (!user) return null;

    return (
        <div className='profilenav__dropdown-option'>
            {!invites.length ? 0 : invites.length } Notifications
        </div>
    )
}

export default ActivityOption;