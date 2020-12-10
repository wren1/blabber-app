export const GET_USERS = 'blabber/users/get';
export const GET_USER = 'blabber/users/user';
export const GET_GROUP_MEMBERS = 'blabber/users/groupMembers';


export const getUser = (user) => ({ type: GET_USER, user })
export const getUsers = (users) => ({ type: GET_USERS, users })


export const loadUser = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}`)
    if (res.ok) {
        const user = await res.json();
        dispatch(getUser(user))
    } else {
        console.error(res)
    }
}

export const loadFriends = (userId) => async (dispatch) => {
    const res = await fetch(`/users/${userId}/friends`);
    if (res.ok) {
        const { friends } = await res.json();
        dispatch(getUsers(friends))
    } else {
        console.error(res)
    }
}

export const loadGroupMembers = (groupId) => async (dispatch) => {
    const res = await fetch(`/groups/${groupId}/users`);
    if (res.ok) {
        const { members } = await res.json();
        dispatch(getUsers(members))
    } else {
        console.error(res)
    }
}


export default function users(state = {}, action) {
    let newState = { ...state }
    switch (action.type) {
        case GET_USERS:
            newState = {};
            action.users.forEach(user => newState[`"${user.id}"`] = user)
            return newState;
        case GET_USER:
            newState[`"${action.user.id}"`] = action.user;
            return newState;
        default:
            return state;
    }
}