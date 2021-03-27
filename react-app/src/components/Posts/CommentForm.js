import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const newComment = async () => {
        await dispatch(post.id, content);
    }

    return (
        <div className='make-comment__container'>
            <form className='make-comment-form' onSubmit={newComment}>
                <textarea className='make-comment-input' onChange={(e) => setContent(e.target.value)}/>
            </form>
        </div>
    )
}

export default CommentForm;