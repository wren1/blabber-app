import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import EditPost from './EditPost';
import ProfileIcon from '../ProfileIcon';



const PostHeader = ({ post, user }) => {
    const history = useHistory();
    const groups = useSelector(state => state.groups);
    const currentUser = useSelector(state => state.currentUser)
    let group;
    const [openEditPost, setOpenEditPost] = useState(false)
    if (post.group_id) {
        group = groups[`"${post.group_id}"`]
    }

    const handleEdit = () => {
        setOpenEditPost(!openEditPost);
    }

    const handleClick = () => {
        if (!group) {
            history.push(`/users/${user.id}`)
        } else {
            history.push(`/groups/${group.id}`)
        }
    }
    const dateCreated = new Date(post.created_on)

    return (
        <>
            <div className='post-header'>
                <div className='post-header__info'>
                    <ProfileIcon user={user} size={'med'} group={group} />
                    <div className='post-header__txt'>
                        <div className='post-header__username' onClick={handleClick}>
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
                    <EditIcon onClick={handleEdit} className='post__edit-button' />
                }
            </div>
            {!openEditPost ? null : 
            <EditPost openMakePost={openEditPost} setOpenMakePost={setOpenEditPost} post={post} user={user}/>}
        </>
    )
}

export default PostHeader;