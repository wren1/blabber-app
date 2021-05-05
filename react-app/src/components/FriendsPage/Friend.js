import React, { useState, useEffect } from 'react';


const Friend = ({ friend }) => {

    return (
        <div className='friends-page__list-item' >
            {friend.username}
        </div>
    )
}

export default Friend;