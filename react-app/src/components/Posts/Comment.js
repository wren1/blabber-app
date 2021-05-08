import React from 'react';
import { useSelector } from 'react-redux';

import CommentContent from './CommentContent';
import CommentHeader from './CommentHeader';



const Comment = ({ comment }) => {
    const user = useSelector(state => state.users[`"${comment.user_id}"`])

    return (
        <div className='comment'>
            <CommentHeader comment={comment} user={user} />
            <CommentContent comment={comment} user={user} />
        </div>
    )
}

export default Comment;