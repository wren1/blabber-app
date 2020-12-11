import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const CommentHeader = ({ comment, user }) => {


    return (
        <div className='comment-header'>
            {user.username}
        </div>
    )
}

export default CommentHeader;