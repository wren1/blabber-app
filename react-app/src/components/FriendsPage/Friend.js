import React from 'react';

import Link from '../Link';


const Friend = ({ friend }) => {

    return (
        <div className='friends-page__list-item' >
            <Link item={friend} />
        </div>
    )
}

export default Friend;