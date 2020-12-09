export const GET_INVITES = 'blabber/invites/get';
export const SEND_INVITE = 'blabber/invites/send';
export const ACCEPT_INVITE = 'blabber/invites/accept';
export const DECLINE_INVITE = 'blabber/invites/decline';
// export const SEND_GROUP_INVITE = 'blabber/invites/groups/send';
// export const ACCEPT_GROUP_INVITE = 'blabber/invites/groups/accept';
// export const DECLINE_GROUP_INVITE = 'blabber/invites/groups/decline';

export const getInvites = (sent, received) => ({ type: GET_INVITES, sent, received });
export const sendInvite = (invite) => ({ type: SEND_INVITE, invite });
export const acceptInvite = (inviteId) => ({ type: ACCEPT_INVITE, inviteId });
export const declineInvite = (inviteId) => ({ type: DECLINE_INVITE, inviteId });
// export const acceptGroupInvite = (invite) => ({ type: ACCEPT_GROUP_INVITE, invite });
// export const sendGroupInvite = (invite) => ({ type: SEND_GROUP_INVITE, invite });
// export const declineGroupInvite = (invite) => ({ type: DECLINE_GROUP_INVITE, invite });


export const loadInvites = () => async (dispatch, useState) => {
    const { currentUser } = useState();
    const res = await fetch(`/api/users/${currentUser.id}/invites`)
    if (res.ok) {
        const { received_invites, sent_invites } = await res.json();
        dispatch(getInvites(sent_invites, received_invites))
    } else {
        console.error(res)
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
        const { invite } = await res.json();
        dispatch(sendInvite(invite))
    } else {
        console.error(res)
    }
}

export const acceptFriendRequest = (userId) => async (dispatch) => {
    const res = await fetch(`/api/invites/users/${userId}/friends/accept`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { invite } = await res.json();
        // add friends
        dispatch(acceptInvite(invite.id))
    } else {
        console.error(res)
    }
}

export const declineFriendRequest = (userId) => async (dispatch) => {
    const res = await fetch(`/api/invites/users/${userId}/friends/decline`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { invite } = await res.json();
        dispatch(declineInvite(invite.id))
    } else {
        console.error(res)
    }
}

export const sendGroupInvite = (userId, groupId) => async (dispatch) => {
    const res = await fetch(`/api/invites/users/${userId}/groups/${groupId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { invite } = await res.json();
        dispatch(sendInvite(invite))
    } else {
        console.error(res)
    }
}

export const acceptGroupInvite = (userId, groupId) => async (dispatch) => {
    const res = await fetch(`/api/invites/users/${userId}/groups/${groupId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { invite } = await res.json();
        // add group
        dispatch(acceptInvite(invite.id))
    } else {
        console.error(res)
    }
}

export const declineGroupInvite = (userId, groupId) => async (dispatch) => {
    const res = await fetch(`/api/invites/users/${userId}/groups/${groupId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { invite } = await res.json();
        dispatch(declineInvite(invite.id))
    } else {
        console.error(res)
    }
}


export default function invites(state = {}, action) {
    let newState = { ...state }
    switch (action.type) {
        case GET_INVITES:
            newState = {};
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