import React, { useState, useEffect } from 'react';

import ProfileIcon from '../ProfileIcon';
import Link from '../Link';


const CommentHeader = ({ comment, user }) => {
    const dateCreated = new Date(comment.created_on)


    return (
        <div className='comment-header'>
            <Link item={user} />
            <div className='comment-header__txt' >
                posted on {dateCreated.getMonth()}/{dateCreated.getDay()}/{dateCreated.getFullYear()} at {dateCreated.getHours()}:{dateCreated.getMinutes()}
            </div>
        </div>
    )
}

export default CommentHeader;