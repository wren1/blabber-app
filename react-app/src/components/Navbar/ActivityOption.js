import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


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