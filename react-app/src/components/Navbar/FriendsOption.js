import React from 'react';
import { useHistory } from 'react-router-dom';


const FriendsOption = ({ user }) => {
    const history = useHistory();

    const redFriendsPage = () => {
        history.push(`/users/${user.id}/friends`)
    }

    return (
        <div className='profilenav__dropdown-option' onClick={redFriendsPage}>
            Friends ( {!user.friends.length ? 0 : user.friends.length} )
        </div>
    )
}

export default FriendsOption;