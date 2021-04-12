import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from './UserInfo';


const ProfileHeader = ({ user }) => {
    const invites = useSelector(state => state.invites.sent)
    const [requested, setRequested] = useState(false)

    if (!user) return null;

    if (invites) {
        for (let i in invites) {
            if (invites[i].type === 'friend' && invites[i].invitee_id === user.id && !requested) {
                setRequested(true)
            }
        }
    }

    return (
        <div className='profile_header' >
            <div>
                <UserInfo user={user} requested={requested} setRequested={setRequested}/>
            </div>
        </div>
    )
}

export default ProfileHeader;