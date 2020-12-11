import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Posts from '../Posts/Posts';


const ProfileFeed = () => {

    const allPosts = useSelector(state => state.posts);
    if (!allPosts) return null;
    let posts = [];
    for (let post in allPosts) {
        posts.push(allPosts[post])
    }
    console.log('usrer page posts: ', posts)

    return (
        <div className='profile__feed'>
            <Posts posts={posts} />
        </div>
    )
}

export default ProfileFeed;