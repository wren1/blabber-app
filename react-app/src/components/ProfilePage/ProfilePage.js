import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileHeader from './ProfileHeader';
import ProfileFeed from './ProfileFeed';
import Sidebar from '../Sidebar/Sidebar';
import Loading from '../Loading';
import Navbar from '../Navbar/Navbar';

import { loadUserPosts } from '../../store/ducks/posts';
import { loadUser } from '../../store/ducks/users';
import { loadInvites } from '../../store/ducks/invites';



const ProfilePage = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    let { userId } = useParams();
    
    const user = useSelector(state => state.users[`"${userId}"`]);
    const currentUser = useSelector(state => state.currentUser)
    
    useEffect(() => {
        (async () => {
            await dispatch(loadUser(userId))
            await dispatch(loadUserPosts(userId))
            await dispatch(loadInvites())
            setLoaded(true)
        })();
    }, []);
    
    
    return (
        <div className='profile'>
            {!loaded ? <Loading /> : null}
            <Navbar />
            <ProfileHeader user={user} />
            <ProfileFeed />
        </div>
    )
}

export default ProfilePage;