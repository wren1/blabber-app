export const GET_FRIENDS = 'blabber/users/friends';
export const GET_USER = 'blabber/users/user';
export const GET_GROUP_MEMBERS = 'blabber/users/groupMembers';


export const getUser = (user) => ({ type: GET_USER, user })
export const getFriends = (friends) => ({ type: GET_FRIENDS, friends })
export const getGroupMembers = (members) => ({ type: GET_GROUP_MEMBERS, members })


export const loadUser = () => async (dispatch) => {
    const res = await fetch(`/api/users`)
    if (res.ok) {
        const { user } = await res.json();
        dispatch(getUser(user))
    } else {
        console.error(res)
    }
}

export const loadFriends = (userId) => async (dispatch) => {
    const res = await fetch(`/${userId}/friends`);
    if (res.ok) {
        const { friends } = await res.json();
        dispatch(getFriends(friends))
    } else {
        console.error(res)
    }
}

export const loadGroupMembers = (groupId) => async (dispatch) => {
    const res = await fetch(`/groups/${groupId}/users`);
    if (res.ok) {
        const { members } = await res.json();
        dispatch(getGroupMembers(members))
    } else {
        console.error(res)
    }
}


export default function users(state = {}, action) {
    let newState = { ...state }
    switch (action.type) {
        case GET_FRIENDS:
            action.friends.forEach(friend => newState[`"${friend.id}"`] = friend)
            return newState;
        case GET_USER:
            newState[`"${action.user.id}"`] = action.user;
            return newState;
        case GET_GROUP_MEMBERS:
            action.members.forEach(member => newState[`"${member.id}"`] = member)
            return newState;
        default:
            return state;
    }
}