
import { getUsers } from './users';

export const GET_LIKES = 'blabber/likes/get';
export const NEW_LIKE = 'blabber/likes/new';
export const DELETE_LIKE = 'blabber/likes/delete';

export const getLikes = (comments) => ({ type: GET_LIKES, likes })
export const newLike = (comment) => ({ type: NEW_LIKE, like })
export const deleteLike = (commentId) => ({ type: DELETE_LIKE, like })


export const loadLikes = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}`)
    if (res.ok) {
        const { comments, users } = await res.json();
        dispatch(getComments(comments))
        dispatch(getUsers(users))
    } else {
        console.error(res)
    }
}

export const like = (postId, content) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
    if (res.ok) {
        const { comment } = await res.json();
        dispatch(newComment(comment))
    } else {
        console.error(res)
    }
}


export const unlike = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/posts/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { comment } = await res.json();
        dispatch(deleteComment(commentId))
    } else {
        console.error(res)
    }
}


export default function likes(state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case GET_COMMENTS:
            action.comments.forEach(comment => newState[`"${comment.id}"`] = comment);
            return newState;
        case NEW_COMMENT:
            newState[`"${action.comment.id}"`] = action.comment;
            return newState;
        case EDIT_COMMENT:
            newState[`"${action.comment.id}"`] = action.comment;
            return newState;
        case DELETE_COMMENT:
            delete newState[`"${action.comment.id}"`]
            return newState;
        default:
            return state;
    }
}