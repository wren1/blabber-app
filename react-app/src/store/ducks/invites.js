export const GET_INVITES = 'blabber/invites/get';
export const SEND_FRIEND_REQUEST = 'blabber/invites/friends/send';
export const ACCEPT_FRIEND_REQUEST = 'blabber/invites/friends/accept';
export const DECLINE_FRIEND_REQUEST = 'blabber/invites/friends/decline';
export const SEND_GROUP_INVITE = 'blabber/invites/groups/send';
export const ACCEPT_GROUP_INVITE = 'blabber/invites/groups/accept';
export const DECLINE_GROUP_INVITE = 'blabber/invites/groups/decline';

export const getInvites = (invites) => ({ type: GET_INVITES, invites });
export const sendFriendRequest = (invite) => ({ type: SEND_FRIEND_REQUEST, invite });
export const acceptFriendRequest = (invite) => ({ type: ACCEPT_FRIEND_REQUEST, invite });
export const declineFriendRequest = (invite) => ({ type: DECLINE_FRIEND_REQUEST, invite });
export const sendGroupInvite = (invite) => ({ type: SEND_GROUP_INVITE, invite });
export const acceptGroupInvite = (invite) => ({ type: ACCEPT_GROUP_INVITE, invite });
export const declineGroupInvite = (invite) => ({ type: DECLINE_GROUP_INVITE, invite });


export const loadInvites = () => async (dispatch) => {

}

export const sendRequest = () => async (dispatch) => {

}

export const acceptRequest = () => async (dispatch) => {

}

export const declineRequest = () => async (dispatch) => {

}

export const sendInvite = () => async (dispatch) => {

}

export const acceptInvite = () => async (dispatch) => {

}

export const declineInvite = () => async (dispatch) => {

}

export default function invites(state = {}, action) {
    switch (action.type) {
        case GET_INVITES:
            return {};
        case SEND_FRIEND_REQUEST:
            return {};
        case ACCEPT_FRIEND_REQUEST:
            return {};
        case DECLINE_FRIEND_REQUEST:
            return {};
        case SEND_GROUP_INVITE:
            return {};
        case ACCEPT_GROUP_INVITE:
            return {};
        case DECLINE_GROUP_INVITE:
            return {};
        default:
            return state;
    }
}