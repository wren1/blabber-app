import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
import NewGroupForm from './NewGroupForm';
import RightSidebar from '../RightSidebar/RightSidebar';
import Loading from '../Loading';

import { loadInvites } from '../../store/ducks/invites';
import { loadCurrentUser } from '../../store/ducks/currentUser';
import { loadCurrentUserFriends } from '../../store/ducks/users';
import { loadCurrentUserGroups } from '../../store/ducks/groups';


const NewGroupPage = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false)
    const user = useSelector(state => state.currentUser)

    useEffect(() => {
        (async () => {
            await dispatch(loadCurrentUser())
            await dispatch(loadInvites())
            await dispatch(loadCurrentUserFriends())
            await dispatch(loadCurrentUserGroups())
            setLoaded(true)
        })();
    }, []);

    if (!user) return null;

    return (
        <div className='main' >
            {!loaded ? <Loading /> : null}
            <Navbar user={user} setAuthenticated={setAuthenticated} />
            <div className='mainpage' >
                <Sidebar user={user} />
                <NewGroupForm user={user} />
                <RightSidebar user={user} authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default NewGroupPage;