export const GET_CURRENT_USER = 'blabber/currentUser/get';
export const UPDATE_CURR_USER = '/blabber/currentUser/update';

export const setCurrentUser = (user) => ({ type: GET_CURRENT_USER, user })
export const updateCurrentUser = (user) => ({ type: UPDATE_CURR_USER, user })

export const loadCurrentUser = () => async (dispatch) => {
    const res = await fetch(`/api/users/`)
    if (res.ok) {
        const user = await res.json();
        dispatch(setCurrentUser(user))
    } else {
        console.error(res)
    }
}

export default function currentUser(state = null, action) {
    switch (action.type) {
        case GET_CURRENT_USER: {
            return action.user;
        }
        case UPDATE_CURR_USER:
            return action.user;
        default:
            return state;
    }
}