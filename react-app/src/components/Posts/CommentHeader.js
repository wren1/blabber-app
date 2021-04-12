import React, { useState, useEffect } from 'react';

import ProfileIcon from '../ProfileIcon';


const CommentHeader = ({ comment, user }) => {
    const dateCreated = new Date(comment.created_on)


    return (
        <div className='comment-header'>
            <ProfileIcon user={user} size={'small'} />
            <div className='comment-header__username' >
                {user.username}
            </div>
            <div className='comment-header__txt' >
                posted on
            </div>
            <div className='comment-header__date' >
                {dateCreated.getMonth()}/{dateCreated.getDay()}/{dateCreated.getFullYear()}
                 at {dateCreated.getHours()}:{dateCreated.getMinutes()}
            </div>
        </div>
    )
}

export default CommentHeader;