export const GET_FRIENDS = 'blabber/users/friends';
export const GET_USER = 'blabber/users/user';
export const GET_GROUP_MEMBERS = 'blabber/users/groupMembers';


export const getFriends = (friends) => ({ type: GET_FRIENDS, friends })
export const getUser = (user) => ({ type: GET_USER, user })
export const getGroupMembers = (members) => ({ type: GET_GROUP_MEMBERS, members })


export const loadFriends = () => async (dispatch) => {

}

export const loadUser = () => async (dispatch) => {

}

export const loadGroupMembers = () => async (dispatch) => {

}


export default function users(state = {}, action) {
    switch (action.type) {
        case GET_FRIENDS:
            return {};
        case GET_USER:
            return {};
        case GET_GROUP_MEMBERS:
            return {};
        default:
            return state;
    }
}