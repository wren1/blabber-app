import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const PostContent = ({ post }) => {

    return (
        <div className='post-body'>
            <div className='post-body__title'>
                {post.title}
            </div>
            <div className='post-content'>
                {post.content}
            </div>
        </div>
    )
}

export default PostContent;