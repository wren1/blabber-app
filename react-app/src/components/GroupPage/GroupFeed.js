import React from 'react';
import { useSelector } from 'react-redux';

import Posts from '../Posts/Posts';
import MakePostBlock from '../Feed/MakePostBlock';


const GroupFeed = ({ groupId }) => {
    const allPosts = useSelector(state => state.posts)
    const user = useSelector(state => state.currentUser)
    const group = useSelector(state => state.groups[`"${groupId}"`])

    let posts = [];
    for (let post in allPosts) {
        if (allPosts[post].group_id === parseInt(groupId)) {
            posts.push(allPosts[post])
        }
    }
    if (!group) return null;

    return (
        <div className='main-feed'>
            <MakePostBlock user={user} group={group} />
            <Posts posts={posts} />
        </div>
    )
}

export default GroupFeed;