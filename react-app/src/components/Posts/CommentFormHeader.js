import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon';


const CommentFormHeader = ({ post }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser)


    return (
        <div className='make-comment__header'>
            <ProfileIcon user={user} size={'small'} />
        </div>
    )
}

export default CommentFormHeader;