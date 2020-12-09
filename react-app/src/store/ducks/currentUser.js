export const GET_CURRENT_USER = 'blabber/currentUser/get';

export const setCurrentUser = (user) => ({ type: GET_CURRENT_USER, user })

export default function currentUser(state = null, action) {
    switch (action.type) {
        case GET_CURRENT_USER: {
            return action.user
        }
        default:
            return state;
    }
}