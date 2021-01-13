
import { getUsers } from './users';

export const GET_LIKES = 'blabber/likes/get';
export const NEW_LIKE = 'blabber/likes/new';
export const DELETE_LIKE = 'blabber/likes/delete';

export const getLikes = (likeIds) => ({ type: GET_LIKES, likeIds })
export const newLike = (likeId) => ({ type: NEW_LIKE, likeId })
export const deleteLike = (likeId) => ({ type: DELETE_LIKE, likeId })


export const loadLikes = () => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}`)
    if (res.ok) {
        const { comments, users } = await res.json();
        dispatch(getComments(comments))
        dispatch(getUsers(users))
    } else {
        console.error(res)
    }
}

export const like = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
    if (res.ok) {
        const { post } = await res.json();
        dispatch(newLike(post))
    } else {
        console.error(res)
    }
}


export const unlike = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/likes`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { post } = await res.json();
        dispatch(deleteLike(post))
    } else {
        console.error(res)
    }
}


export default function likes(state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case GET_LIKES:
            action.comments.forEach(comment => newState[`"${comment.id}"`] = comment);
            return newState;
        case NEW_LIKE:
            newState[`"${action.comment.id}"`] = action.comment;
            return newState;
        case DELETE_LIKE:
            delete newState[`"${action.comment.id}"`]
            return newState;
        default:
            return state;
    }
}