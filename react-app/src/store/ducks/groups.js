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
export const leaveGroup = (groupId) => ({type: LEAVE_GROUP, groupId });
export const deleteMod = (groupId, modId) => ({type: DELETE_MOD, groupId, modId });
export const newMod = (modId) => ({type:  NEW_MOD, modId });


export const loadGroup = () => async (dispatch) => {

}

export const loadUserGroups = () => async (dispatch) => {

}

export const createGroup = () => async (dispatch) => {

}

export const removeGroup = () => async (dispatch) => {

}

export const updateGroup = () => async (dispatch) => {

}

export const addMember = () => async (dispatch) => {

}

export const removeMember = () => async (dispatch) => {

}

export const addMod = () => async (dispatch) => {

}

export const removeMod = () => async (dispatch) => {

}


export default function groups(state = {}, action) {
    switch (action.type) {
        case GET_GROUP:
            return {};
        case GET_USER_GROUPS:
            return {};
        case NEW_GROUP:
            return {};
        case DELETE_GROUP:
            return {};
        case EDIT_GROUP:
            return {};
        case JOIN_GROUP:
            return {};
        case LEAVE_GROUP:
            return {};
        case DELETE_MOD:
            return {};
        case NEW_MOD:
            return {};
        default:
            return state;
    }
}