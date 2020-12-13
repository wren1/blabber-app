import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Posts from '../Posts/Posts';
import MakePostBlock from '../Feed/MakePostBlock';


const GroupFeed = ({ group }) => {
    const posts = useSelector(state => state.posts)
    const user = useSelector(state => state.currentUser)

    return (
        <div className='group-feed'>
            <MakePostBlock />
            <Posts posts={posts} />
        </div>
    )
}

export default GroupFeed;