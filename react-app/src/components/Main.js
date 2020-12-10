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
    

    useEffect(() => {
        (async () => {
            await dispatch(loadPosts())
            await dispatch(loadInvites())
        })();
    }, []);

    return (
        <div className='main' >
            <Sidebar />
            <Navbar />
            <Feed />
            <Footer />
        </div>
    )
}

export default Main;