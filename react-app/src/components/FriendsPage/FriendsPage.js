import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import FriendsList from './FriendsList'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Loading from '../Loading';

import { loadCurrentUser } from '../../store/ducks/currentUser';
import { loadFriends } from '../../store/ducks/users';


const FriendsPage = () => {
    const [loaded, setLoaded] = useState(false)
    const { userId } = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)
    
    useEffect(() => {
        (async () => {
            await dispatch(loadCurrentUser())
            await dispatch(loadFriends(userId))
            setLoaded(true)
        })();
    }, []);
    
    return (
        <div className='friends-main'>
            {!loaded ? <Loading /> : null}
            <Sidebar user={currentUser} />
            <Navbar user={currentUser} />
            <FriendsList userId={userId} />
        </div>
    )
}

export default FriendsPage;