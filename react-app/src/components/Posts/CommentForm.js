import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createComment } from '../../store/ducks/comments';

import CommentFormHeader from './CommentFormHeader';


const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const newComment = async () => {
        await dispatch(createComment(post.id, content));
    }

    return (
        <div className='make-comment__container'>
            {/* <CommentFormHeader /> */}
            <form className='make-comment-form'>
                <textarea className='make-comment-input' onChange={(e) => setContent(e.target.value)} placeholder='Make a comment...' />
            </form>
            <div className='make-comment__submit' onClick={newComment} >
                Submit
            </div>
        </div>
    )
}

export default CommentForm;