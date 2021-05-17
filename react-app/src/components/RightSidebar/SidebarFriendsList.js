import React from 'react';

import FriendListItem from './FriendListItem';


const SidebarFriendsList = ({ friends }) => {


    return (
        <div className='sidebar__friendsList'>
            <div className='sidebar-title'>
                Friends
            </div>
            {!friends ? null : friends.map(friend => (
                <FriendListItem friend={friend} key={friend.id} />
            )
            )}
        </div>
    )
}

export default SidebarFriendsList;