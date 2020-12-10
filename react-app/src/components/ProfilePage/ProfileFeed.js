import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Posts from '../Posts/Posts';


const ProfileFeed = () => {

    const posts = useSelector(state => state.posts);

    return (
        <div className='profile__feed'>
            {!posts ? null : <Posts posts={posts} />}
        </div>
    )
}

export default ProfileFeed;