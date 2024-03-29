import { setCurrentUser } from './currentUser';

export const GET_USERS = 'blabber/users/get';
export const GET_USER = 'blabber/users/user';
export const GET_SPEC_USERS = 'blabber/users/specific';
export const UPDATE_USER = 'blabber/users/update';


export const getUser = (user) => ({ type: GET_USER, user })
export const getUsers = (users) => ({ type: GET_USERS, users })
export const getSpecificUsers = (users) => ({ type: GET_SPEC_USERS, users })
export const updateUser = (user) => ({ type: UPDATE_USER, user })

export const loadUser = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}`)
    if (res.ok) {
        const user = await res.json();
        dispatch(getUser(user))
    } else {
        console.error(res)
    }
}

export const loadCurrentUserFriends = () => async (dispatch, getState) => {
    const { currentUser } = getState();
    const res = await fetch(`/api/users/${currentUser.id}/friends`);
    if (res.ok) {
        const { friends } = await res.json();
        dispatch(getUsers(friends))
    } else {
        console.error(res)
    }
}

export const loadFriends = (userId) => async (dispatch, useState) => {
    const res = await fetch(`/api/users/${userId}/friends`);
    if (res.ok) {
        const { friends } = await res.json();
        dispatch(getUsers(friends))
    } else {
        console.error(res)
    }
}

export const removeFriend = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/friends`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const user = await res.json();
        dispatch(setCurrentUser(user))
    } else {
        console.error(res)
    }
}

export const loadGroupMembers = (groupId) => async (dispatch) => {
    const res = await fetch(`/api/groups/${groupId}/users`);
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
            action.users.forEach(user => newState[`"${user.id}"`] = user)
            return newState;
        case GET_SPEC_USERS:
            newState = {};
            action.users.forEach(user => newState[`"${user.id}"`] = user)
            return newState;
        case GET_USER:
            newState[`"${action.user.id}"`] = action.user;
            return newState;
        case UPDATE_USER:
            newState[`"${action.user.id}"`] = action.user;
            return newState;
        default:
            return state;
    }
}