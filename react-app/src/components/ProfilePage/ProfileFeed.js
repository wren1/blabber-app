import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../Posts/Posts';


const ProfileFeed = () => {

    const allPosts = useSelector(state => state.posts);

    if (!allPosts) return null;

    let posts = [];
    for (let post in allPosts) {
        posts.push(allPosts[post])
    }

    return (
        <div className='profile__feed'>
            <Posts posts={posts} />
        </div>
    )
}

export default ProfileFeed;