import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon';
import Post from '../Posts/Post';


const PostSearchResult = ({ post }) => {
    const user = useSelector(state => state.users[`"${post.user_id}"`]);

    return (
        <NavLink to={`/users/${post.user_id}`} exact={true} activeClassName="active">
        <div className='searchresult-post'>
            {/* <ProfileIcon user={user} size={'med'} /> */}
            {/* <div className='searchuser-username'>{user.username}</div> */}
            <Post post={post} user={user} />
        </div>
        </NavLink>
    )
}

export default PostSearchResult;