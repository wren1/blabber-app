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

    return (
        <div className='main' >
            <Sidebar />
            <Navbar />
            <Feed posts={posts} />
            <Footer />
        </div>
    )
}

export default Main;