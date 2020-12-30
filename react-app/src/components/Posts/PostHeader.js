import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import UserIcon from '../UserIcon';
import ProfileIcon from '../ProfileIcon';


const PostHeader = ({ post, user }) => {
    const history = useHistory();
    const groups = useSelector(state => state.groups);
    let group;
    if (post.group_id) {
        group = groups[`"${post.group_id}"`]
    }

    const handleClick = () => {
        history.push(`/users/${user.id}`)
    }
    const dateCreated = new Date(post.created_on)

    return (
        <div className='post-header'>
            {/* <div className='post-header__link'>
            </div> */}
            <ProfileIcon user={user} size={'med'} group={group} />
            <div className='post-header__txt'>
                <div className='post-header__username' onClick={handleClick}>{user.username}</div>
                <div className='post-header__date'>
                    {`${dateCreated.getMonth()}/${dateCreated.getDay()}/${dateCreated.getFullYear()}`}
                </div>
            </div>
        </div>
    )
}

export default PostHeader;