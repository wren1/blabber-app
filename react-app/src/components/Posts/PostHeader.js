import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

import EditPost from './EditPost';
import ProfileIcon from '../ProfileIcon';



const PostHeader = ({ post, user }) => {
    const groups = useSelector(state => state.groups);
    const currentUser = useSelector(state => state.currentUser)
    const [openEditPost, setOpenEditPost] = useState(false)

    let group;
    if (post.group_id) {
        group = groups[`"${post.group_id}"`]
    }

    const dateCreated = new Date(post.created_on)

    return (
        <>
            <div className='post-header'>
                <div className='post-header__info'>
                    <ProfileIcon user={user} size={'med'} group={group} />
                    <div className='post-header__txt'>
                        <div className='post-header__username' >
                            <NavLink to={group ? `/groups/${group.id}` : `/users/${user.id}`}>{!group ? user.username : group.name}</NavLink>
                        </div>
                        <div className='post-header__date'>
                            {!group ? `posted on ${dateCreated.getMonth()}/${dateCreated.getDay()}/${dateCreated.getFullYear()}`
                            : `${user.username} posted on ${dateCreated.getMonth()}/${dateCreated.getDay()}/${dateCreated.getFullYear()}`
                            }
                        </div>
                    </div>
                </div>
                {currentUser.id !== post.user_id ? null :
                    <EditIcon onClick={() => setOpenEditPost(!openEditPost)} className='post__edit-button' />
                }
            </div>
            {!openEditPost ? null : 
            <EditPost openMakePost={openEditPost} setOpenMakePost={setOpenEditPost} post={post} user={user}/>}
        </>
    )
}

export default PostHeader;