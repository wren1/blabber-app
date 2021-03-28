import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';

import { sendFriendRequest } from '../../store/ducks/invites'


const UserInfo = ({ user, requested, setRequested }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)
    const invites = useSelector(state => state.invites.sent)
    console.log('inv: ', invites)
    // const [requested, setRequested] = useState(false)
    // if (invites) {
    //     for (let i in invites) {
    //         if (invites[i].type === 'friend' && invites[i].invitee_id === user.id && !requested) {
    //             // isRequested = true;
    //             setRequested(true)
    //         }
    //     }
    // }
    // const [requested, setRequested] = useState(isRequested)
    // const isRequested = () => {
    //     if (!invites) {
    //         return false;
    //     }
    //     for (let i in invites) {
    //         if (invites[i].type === 'friend' && invites[i].invitee_id === user.id) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    const handleAdd = () => {
        dispatch(sendFriendRequest(user.id))
        setRequested(true)
    }
    if (!user) return null;
    console.log('req: ', requested)

    const friendIcon = () => {
        if (currentUser.friends.includes(user.id)) {
            return (
                <div>
                    <PersonIcon />
                </div>
            )
        }
        if (requested) {
            return (
                <div>
                    <PersonOutlineIcon />
                </div>
            )
        } else {
            return (
                <div onClick={handleAdd}>
                    <PersonAddIcon />
                </div>
            )
        }
    }


    return (
        <div className='profile__user-info'>
            {!user ? null : user.username}
            {user.id === currentUser.id ? null :
                friendIcon()
            }
        </div>
    )
}

export default UserInfo;