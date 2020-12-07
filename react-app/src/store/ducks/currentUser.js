export const GET_CURRENT_USER = 'blabber/currentUser/get';

export const getCurrentUser = (user) => ({ type: GET_CURRENT_USER, user })

export default function currentUser(state={}, action) {
    switch (action.type) {
        case GET_CURRENT_USER:
            return { currentUser: action.user }
        default:
            return state;
    }
}