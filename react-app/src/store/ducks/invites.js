import {updateCurrentUser} from './currentUser'
import { getUsers, updateUser } from './users';
import { getUserGroups } from './groups';

export const GET_INVITES = 'blabber/invites/get';
export const SEND_INVITE = 'blabber/invites/send';
export const ACCEPT_INVITE = 'blabber/invites/accept';
export const DECLINE_INVITE = 'blabber/invites/decline';

export const getInvites = (sent, received) => ({ type: GET_INVITES, sent, received });
export const sendInvite = (invite) => ({ type: SEND_INVITE, invite });
export const acceptInvite = (inviteId) => ({ type: ACCEPT_INVITE, inviteId });
export const declineInvite = (inviteId) => ({ type: DECLINE_INVITE, inviteId });


export const loadInvites = () => async (dispatch, useState) => {
    const { currentUser } = useState();
    if (currentUser) {
        const res = await fetch(`/api/users/${currentUser.id}/invites`)
        if (res.ok) {
            const { received_invites, sent_invites, users, groups } = await res.json();
            dispatch(getUsers(users));
            dispatch(getUserGroups(groups))
            dispatch(getInvites(sent_invites, received_invites))
        } else {
            console.error(res)
        }
    }
}

export const sendFriendRequest = (userId) => async (dispatch) => {
    const res = await fetch(`/api/invites/users/${userId}/friends`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const invite = await res.json();
        dispatch(sendInvite(invite))
    } else {
        console.error(res)
    }
}

export const acceptFriendRequest = (userId) => async (dispatch, useState) => {
    const { currentUser } = useState();
    const { users } = useState();
    const res = await fetch(`/api/invites/users/${userId}/friends/accept`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const invite = await res.json();
        currentUser.friends.push(userId)
        let user = users[`"${userId}"`]
        user.friends.push(userId)
        dispatch(updateCurrentUser(currentUser))
        dispatch(updateUser(user))
        dispatch(acceptInvite(invite.id))
    } else {
        console.error(res)
    }
}

export const declineFriendRequest = (userId) => async (dispatch, useState) => {
    const { currentUser } = useState();
    const res = await fetch(`/api/invites/users/${userId}/friends/decline`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const invite = await res.json();
        dispatch(declineInvite(invite.id))
    } else {
        console.error(res)
    }
}

export const sendGroupInvite = (username, groupId) => async (dispatch) => {
    const res = await fetch(`/api/invites/users/${username}/groups/${groupId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const invite = await res.json();
        dispatch(sendInvite(invite))
    } else {
        console.error(res)
    }
}

export const acceptGroupInvite = (userId, groupId) => async (dispatch, useState) => {
    const { currentUser } = useState();
    const res = await fetch(`/api/invites/users/${userId}/groups/${groupId}/accept`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const invite = await res.json();
        currentUser.groups.push(groupId);
        dispatch(updateCurrentUser(currentUser));
        dispatch(acceptInvite(invite.id))
    } else {
        console.error(res)
    }
}

export const declineGroupInvite = (userId, groupId) => async (dispatch, useState) => {
    const { currentUser } = useState();
    const res = await fetch(`/api/invites/users/${userId}/groups/${groupId}/decline`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const invite = await res.json();
        dispatch(declineInvite(invite.id));
    } else {
        console.error(res)
    }
}


export default function invites(state = { received: {}, sent: {} }, action) {
    let newState = { ...state }
    switch (action.type) {
        case GET_INVITES:
            newState = { received: {}, sent: {} };
            action.received.forEach(invite => newState.received[`"${invite.id}"`] = invite);
            action.sent.forEach(invite => newState.sent[`"${invite.id}"`] = invite);
            return newState;
        case SEND_INVITE:
            newState.sent[`"${action.invite.id}"`] = action.invite;
            return newState;
        case ACCEPT_INVITE:
            delete newState.received[`"${action.inviteId}"`]
            return newState;
        case DECLINE_INVITE:
            delete newState.received[`"${action.inviteId}"`]
            return newState;
        default:
            return state;
    }
}