import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../Posts/Posts';
import MakePostBlock from './MakePostBlock';


const Feed = ({ posts }) => {
    const dispatch = useDispatch();
    let postsArr = [];
    for (let post in posts) {
        postsArr.push(posts[post])
    }

    const user = useSelector(state => state.currentUser)
    

    if (!posts || !user) return null;

    return (
        <div className='main-feed'>
            <MakePostBlock user={user} />
            <Posts posts={postsArr} />
        </div>
    )
}

export default Feed;