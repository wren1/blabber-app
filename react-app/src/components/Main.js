import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Footer from './Footer/Footer';
import RightSidebar from './RightSidebar/RightSidebar';

import { loadPosts } from '../store/ducks/posts';
import { loadInvites } from '../store/ducks/invites';
import { setCurrentUser, loadCurrentUser } from '../store/ducks/currentUser';
import { loadFriends } from '../store/ducks/users';

const Main = ({authenticated, setAuthenticated, currentUser}) => {
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
            await dispatch(loadFriends(user.id))
        })();
    }, [currentUser]);

    let posts = [];
    for (let post in allPosts) {
        posts.push(allPosts[post])
    }

    // if (!user) return null;

    return (
        <div className='main' >
            <Navbar user={user} setAuthenticated={setAuthenticated} />
            <Sidebar user={user} />
            <RightSidebar user={user} setAuthenticated={setAuthenticated} />
            <Feed posts={posts} />
            <Footer />
        </div>
    )
}

export default Main;