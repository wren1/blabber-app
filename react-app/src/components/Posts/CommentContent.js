import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const CommentContent = ({ comment }) => {

    return (
        <div className='comment-content'>
            {comment.content}
        </div>
    )
}

export default CommentContent;