import { bindActionCreators } from "redux";

export const SEARCH_QUERY = 'blabber/search/query';
export const SEARCH_CAT = 'blabber/search/category';
export const SEARCH_RES = 'blabber/search/results'
// export const SEARCH_USERS_RES = 'blabber/search/results/users'
// export const SEARCH_ALL_RES = 'blabber/search/results/all'

export const setQuery = (query) => ({ type: SEARCH_QUERY, query });
export const setCategory = (cat) => ({ type: SEARCH_CAT, cat });
export const searchGroupResults = (results) => ({ type: SEARCH_RES, results })
// export const searchUserResults = (users) => ({ type: SEARCH_USERS_RES, users })
// export const searchAllResults = (groups, users) => ({ type: SEARCH_ALL_RES, groups, users })


export const searchGroups = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/groups/${query}`);
    if (res.ok) {
        const { results } = await res.json();
        dispatch(searchGroupResults(results))
    } else {
        console.error(res)
    }
}

export const searchUsers = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/users/${query}`);
    if (res.ok) {
        const { results } = await res.json();
        dispatch(searchGroupResults(results))
    } else {
        console.error(res)
    }
}

export const searchPosts = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/posts/${query}`);
    console.log('q: ', query)
    if (res.ok) {
        const { results } = await res.json();
        console.log('res: ', results)
        dispatch(setQuery(query))
        dispatch(searchGroupResults(results))
    } else {
        console.error(res)
    }
}

export const searchAll = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/${query}`);
    console.log('q: ', query)
    if (res.ok) {
        const { results } = await res.json();
        console.log('res: ', results)
        dispatch(setQuery(query))
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
            newState.results = action.results
            // action.results.forEach(result => {
            //     result.owner_id ? newState.results[`"group${result.id}"`] = result : 
            //     newState.results[`"user${result.id}"`] = result
                // newState.results.push(result)
            // })
            return newState;
        default:
            return state;
    }
}