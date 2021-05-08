import React from 'react';
import { useSelector } from 'react-redux';

import ProfileIcon from '../ProfileIcon';


const CommentFormHeader = ({ post }) => {
    const user = useSelector(state => state.currentUser)


    return (
        <div className='make-comment__header'>
            <ProfileIcon user={user} size={'small'} />
        </div>
    )
}

export default CommentFormHeader;