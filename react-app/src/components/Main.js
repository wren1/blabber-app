import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Footer from './Footer/Footer';

import { loadPosts } from '../store/ducks/posts';
import { loadInvites } from '../store/ducks/invites';

const Main = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.posts)
    const user = useSelector(state => state.currentUser)

    useEffect(() => {
        (async () => {
            await dispatch(loadPosts())
            await dispatch(loadInvites())
        })();
    }, []);

    let posts = [];
    for (let post in allPosts) {
        posts.push(allPosts[post])
    }

    // if (!user) return null;

    return (
        <div className='main' >
            <Navbar user={user} />
            <Sidebar />
            <Feed posts={posts} />
            <Footer />
        </div>
    )
}

export default Main;