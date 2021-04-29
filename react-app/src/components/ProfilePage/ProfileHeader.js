import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import UserInfo from './UserInfo';
import Banner from '../Banner';


const ProfileHeader = ({ user }) => {
    const invites = useSelector(state => state.invites.sent)
    const [requested, setRequested] = useState(false)

    if (!user) return null;

    user.banner_url = 'https://i.pinimg.com/originals/50/c5/1e/50c51e02a205b44c3449fc128400ff20.jpg';

    if (invites) {
        for (let i in invites) {
            if (invites[i].type === 'friend' && invites[i].invitee_id === user.id && !requested) {
                setRequested(true)
            }
        }
    }

    return (
        <div className='profile_header' >
            <Banner user={user} />
            <UserInfo user={user} requested={requested} setRequested={setRequested}/>
        </div>
    )
}

export default ProfileHeader;