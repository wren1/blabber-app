import React from 'react';

import ProfileIcon from './ProfileIcon';


const HeaderIcon = ({ item }) => {
    if (!item) return null;
        return (
            <div className='header-icon'>
                <ProfileIcon user={!item.username ? null : item} group={!item.username ? item : null} size={'large'} /> 
                 {!item.username ? item.name : item.username}
            </div>
        )
}

export default HeaderIcon;