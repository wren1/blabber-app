import React, { useState, useEffect } from 'react';

import ProfileIcon from '../ProfileIcon';


const CommentHeader = ({ comment, user }) => {


    return (
        <div className='comment-header'>
            <ProfileIcon user={user} size={'small'} />
            <div className='comment-header__username' >
                {user.username}
            </div>
        </div>
    )
}

export default CommentHeader;