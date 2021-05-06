import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';


const ActivityOption = ({ user }) => {
    const invites = useSelector(state => state.invites.received)

    let sent = [];
    for (let invite in invites) {
        sent.push(invites[invite])
    }


    if (!user) return null;

    return (
        <div className='profilenav__dropdown-option'>
            <NavLink to='/notifications' exact={true}>
            {!sent.length ? 0 : sent.length } Notifications
            </NavLink>
        </div>
    )
}

export default ActivityOption;