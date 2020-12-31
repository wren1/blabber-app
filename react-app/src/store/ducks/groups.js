import { updateUser } from './users';
import { updateCurrentUser } from './currentUser';

export const GET_GROUP = 'blabber/groups/get';
export const GET_USER_GROUPS = 'blabber/groups/user/get';
export const NEW_GROUP = 'blabber/groups/new';
export const DELETE_GROUP = 'blabber/groups/delete';
export const EDIT_GROUP = 'blabber/groups/edit';
export const JOIN_GROUP = 'blabber/groups/join';
export const LEAVE_GROUP = 'blabber/groups/leave';
export const DELETE_MOD = 'blabber/group/mods/delete';
export const NEW_MOD = 'blabber/groups/mods/neew'

export const getGroup = (group) => ({type: GET_GROUP, group });
export const getUserGroups = (groups) => ({type: GET_USER_GROUPS, groups });
export const newGroup = (group) => ({type: NEW_GROUP, group });
export const deleteGroup = (groupId) => ({type: DELETE_GROUP, groupId });
export const editGroup = (group) => ({type: EDIT_GROUP, group });
export const joinGroup = (group) => ({type: JOIN_GROUP, group });
export const leaveGroup = (groupId, userId) => ({type: LEAVE_GROUP, groupId, userId });
export const deleteMod = (groupId, modId) => ({type: DELETE_MOD, groupId, modId });
export const newMod = (groupId, modId) => ({type:  NEW_MOD, groupId, modId });


export const loadGroup = (groupId) => async (dispatch) => {
    const res = await fetch(`/api/groups/${groupId}`)
    if (res.ok) {
        const group = await res.json();
        dispatch(getGroup(group))
    } else {
        console.error(res)
    }
}

export const loadUserGroups = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/groups`)
    if (res.ok) {
        const { groups } = await res.json();
        dispatch(getUserGroups(groups))
    } else {
        console.error(res)
    }
}

export const createGroup = (owner_id, name, description, isPrivate) => async (dispatch, getState) => {
    const { currentUser, users } = getState();
    const res = await fetch(`/api/groups`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ owner_id, name, description, "private": isPrivate })
    })
    if (res.ok) {
        const group = await res.json();
        dispatch(newGroup(group))
        currentUser.groups.push(group.id);
        let user = users[`"${owner_id}"`];
        console.log(user)
        // user.groups.push(group.id);
        dispatch(updateCurrentUser(currentUser));
        dispatch(updateUser(user));
    } else {
        console.error(res)
    }
}

export const removeGroup = (groupId) => async (dispatch) => {
    const res = await fetch(`/api/groups/${groupId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const group = await res.json();
        dispatch(getGroup(group.id))
    } else {
        console.error(res)
    }
}

export const updateGroup = (group) => async (dispatch) => {
    const res = await fetch(`/api/groups/${group.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ group })
    })
    if (res.ok) {
        const group = await res.json();
        dispatch(editGroup(group))
    } else {
        console.error(res)
    }
}

export const addMember = (groupId) => async (dispatch) => {
    const res = await fetch(`/api/groups/${groupId}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { user, group } = await res.json();
        // add group to member's list if
        dispatch(joinGroup(group))
    } else {
        console.error(res)
    }
}

export const removeMember = (groupId, userId) => async (dispatch) => {
    const res = await fetch(`/api/groups/${groupId}/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { user, group } = await res.json();
        // edit user so it doesn't show they're in that group
        dispatch(leaveGroup(group.id, user.id))
    } else {
        console.error(res)
    }
}

export const addMod = (groupId, userId) => async (dispatch) => {
    const res = await fetch(`/api/groups/${groupId}/moderators/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const group = await res.json();
        dispatch(newMod(group.id, userId))
    } else {
        console.error(res)
    }
}

export const removeMod = (groupId, userId) => async (dispatch) => {
    const res = await fetch(`/api/groups/${groupId}/moderators/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const group = await res.json();
        dispatch(deleteMod(groupId, userId))
    } else {
        console.error(res)
    }
}


export default function groups(state = {}, action) {
    let newState = { ...state }
    switch (action.type) {
        case GET_GROUP:
            newState[`"${action.group.id}"`] = action.group;
            return newState;
        case GET_USER_GROUPS:
            action.groups.forEach(group => newState[`"${group.id}"`] = group);
            return newState;
        case NEW_GROUP:
            newState[`"${action.group.id}"`] = action.group;
            return newState;
        case DELETE_GROUP:
            delete newState[`"${action.group.id}"`];
            return newState;
        case EDIT_GROUP:
            newState[`"${action.group.id}"`] = action.group;
            return newState;
        case JOIN_GROUP:
            newState[`"${action.group.id}"`] = action.group;
            return newState;
        case LEAVE_GROUP:
            newState[`"${action.group.id}"`] = action.group;
            return newState;
        case DELETE_MOD:
            newState[`"${action.group.id}"`] = action.group;
            return newState;
        case NEW_MOD:
            newState[`"${action.group.id}"`] = action.group;
            return newState;
        default:
            return state;
    }
}