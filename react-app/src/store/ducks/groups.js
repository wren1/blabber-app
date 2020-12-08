export const GET_GROUP = 'blabber/groups/get';
export const GET_USER_GROUPS = 'blabber/groups/user/get';
export const NEW_GROUP = 'blabber/groups/new';
export const DELETE_GROUP = 'blabber/groups/delete';
export const EDIT_GROUP = 'blabber/groups/edit';
export const JOIN_GROUP = 'blabber/groups/join';
export const LEAVE_GROUP = 'blabber/groups/leave';
export const DELETE_MOD = 'blabber/group/mods/delete';
export const NEW_MOD = 'blabber/groups/mods/neGET_GROUP w'

export const getGroup = () => ({type: GET_GROUP });
export const getUserGroups = () => ({type: GET_USER_GROUPS });
export const newGroup = () => ({type: NEW_GROUP });
export const deleteGroup = () => ({type: DELETE_GROUP });
export const editGroup = () => ({type: EDIT_GROUP });
export const joinGroup = () => ({type: JOIN_GROUP });
export const leaveGroup = () => ({type: LEAVE_GROUP });
export const deleteMod = () => ({type: DELETE_MOD });
export const newMod = () => ({type:  NEW_MOD });