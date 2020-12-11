const SEARCH_QUERY = 'blabber/search/query';
const SEARCH_CAT = 'blabber/search/category';

const setQuery = (query) => ({ type: SEARCH_QUERY, query });
const setCategory = (cat) => ({ type: SEARCH_CAT, cat });


const searchGroups = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/groups/${query}`);
    if (res.ok) {

    } else {
        console.error(res)
    }
}

const searchUsers = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/users/${query}`);
    if (res.ok) {

    } else {
        console.error(res)
    }
}

const searchAll = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/${query}`);
    if (res.ok) {

    } else {
        console.error(res)
    }
}

export default function(state = { query: null, category: null }, action) {
    let newState = {...state};
    switch (action.type) {
        case SEARCH_QUERY:
            newState.query = action.query;
            return newState
        case SEARCH_CAT:
            newState.category = action.cat
            return newState;
        default:
            return state;
    }
}