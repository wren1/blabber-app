import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
import NewGroupForm from './NewGroupForm';


const NewGroupPage = () => {
    const user = useSelector(state => state.currentUser)

    if (!user) return null;

    return (
        <div className='new-group__main'>
            <Navbar />
            <Sidebar user={user} />
            <NewGroupForm user={user} />
        </div>
    )
}

export default NewGroupPage;