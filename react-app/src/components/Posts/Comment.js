import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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