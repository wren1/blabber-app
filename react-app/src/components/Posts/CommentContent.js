import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const CommentContent = ({ comment }) => {
    if (!comment) return null;

    return (
        <div className='comment-content'>
            {comment.content}
        </div>
    )
}

export default CommentContent;