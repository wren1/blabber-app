import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Loading from './Loading';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Footer from './Footer/Footer';
import RightSidebar from './RightSidebar/RightSidebar';

import { loadPosts } from '../store/ducks/posts';
import { loadInvites } from '../store/ducks/invites';
import { setCurrentUser, loadCurrentUser } from '../store/ducks/currentUser';
import { loadCurrentUserFriends } from '../store/ducks/users';
import { loadCurrentUserGroups } from '../store/ducks/groups';


const Main = ({authenticated, setAuthenticated, currentUser}) => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser)
    const allPosts = useSelector(state => state.posts)
    // let currentUser = useSelector(state => state.currentUser)

    // const user = useSelector(state => state.currentUser)

    useEffect(() => {
        (async () => {
            await dispatch(loadCurrentUser())
            await dispatch(loadPosts())
            await dispatch(loadInvites())
            await dispatch(loadCurrentUserFriends())
            await dispatch(loadCurrentUserGroups())
            setLoaded(true)
        })();
    }, []);


    return (
        <div className='main' >
            {!loaded ? <Loading /> : null}
            <Navbar user={user} setAuthenticated={setAuthenticated} />
            <div className='mainpage' >
                <Sidebar user={user} />
                <Feed posts={allPosts} />
                <RightSidebar user={user} authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Main;