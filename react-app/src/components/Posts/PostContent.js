import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const PostContent = ({ post }) => {

    return (
        <div className='post-content'>
            {post.content}
        </div>
    )
}

export default PostContent;