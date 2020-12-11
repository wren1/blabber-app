import { bindActionCreators } from "redux";

const SEARCH_QUERY = 'blabber/search/query';
const SEARCH_CAT = 'blabber/search/category';
const SEARCH_RES = 'blabber/search/results'
// const SEARCH_USERS_RES = 'blabber/search/results/users'
// const SEARCH_ALL_RES = 'blabber/search/results/all'

const setQuery = (query) => ({ type: SEARCH_QUERY, query });
const setCategory = (cat) => ({ type: SEARCH_CAT, cat });
const searchGroupResults = (results) => ({ type: SEARCH_RES, results })
// const searchUserResults = (users) => ({ type: SEARCH_USERS_RES, users })
// const searchAllResults = (groups, users) => ({ type: SEARCH_ALL_RES, groups, users })


const searchGroups = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/groups/${query}`);
    if (res.ok) {
        const { results } = await res.json();
        dispatch(searchGroupResults(results))
    } else {
        console.error(res)
    }
}

const searchUsers = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/users/${query}`);
    if (res.ok) {
        const { results } = await res.json();
        dispatch(searchGroupResults(results))
    } else {
        console.error(res)
    }
}

const searchAll = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/${query}`);
    if (res.ok) {
        const { results } = await res.json();
        dispatch(searchGroupResults(results))
    } else {
        console.error(res)
    }
}

export default function(state = { query: null, category: null, results: {} }, action) {
    let newState = {...state};
    switch (action.type) {
        case SEARCH_QUERY:
            newState.query = action.query;
            return newState
        case SEARCH_CAT:
            newState.category = action.cat
            return newState;
        case SEARCH_RES:
            newState.results = {};
            action.results.forEach(result => {
                result.owner_id ? newState.results[`"group${result.id}"`] = result : 
                newState.results[`"user${result.id}"`] = result
            })
            return newState;
        default:
            return state;
    }
}