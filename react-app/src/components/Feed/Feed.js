import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Posts from '../Posts/Posts';
import MakePostBlock from './MakePostBlock';


const Feed = ({ posts }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.currentUser)
    // const posts = useSelector(state => state.posts)

    return (
        <div className='main-feed'>
            <MakePostBlock user={user} />
            <Posts posts={posts} />
        </div>
    )
}

export default Feed;