import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createComment } from '../../store/ducks/comments';


const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const newComment = async () => {
        await dispatch(createComment(post.id, content));
        setContent('')
    }

    return (
        <div className='make-comment__container'>
            <form className='make-comment-form'>
                <textarea className='make-comment-input' onChange={(e) => setContent(e.target.value)} placeholder='Make a comment...' />
            </form>
            <div className='make-comment__submit' onClick={newComment} type='submit' >
                Submit
            </div>
        </div>
    )
}

export default CommentForm;