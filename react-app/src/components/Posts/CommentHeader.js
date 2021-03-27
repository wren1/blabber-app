import React, { useState, useEffect } from 'react';


const CommentHeader = ({ comment, user }) => {


    return (
        <div className='comment-header'>
            {user.username}
        </div>
    )
}

export default CommentHeader;