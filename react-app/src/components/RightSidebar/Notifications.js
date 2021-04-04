import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';




const Notifications = ({ notifs }) => {
    const dispatch = useDispatch();


    return (
        <NavLink to='/notifications' exact={true}>
                <div className='sidebar-notifications'>
                    <div className={!notifs.length ? 'sidebar-notifications-num' : 'sidebar-notifications-num red'}>
                        {!notifs.length ? 0 : notifs.length }
                    </div>
                    <div>Notifications</div>
                </div>
            </NavLink>
    )
}

export default Notifications;