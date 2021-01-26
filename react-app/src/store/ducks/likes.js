
import { getUsers } from './users';
import { getPosts } from './posts';
import { updateCurrentUser } from './currentUser';

export const GET_LIKES = 'blabber/likes/get';
export const NEW_LIKE = 'blabber/likes/new';
export const DELETE_LIKE = 'blabber/likes/delete';

export const getLikes = (likeIds) => ({ type: GET_LIKES, likeIds })
export const newLike = (likeId) => ({ type: NEW_LIKE, likeId })
export const deleteLike = (likeId) => ({ type: DELETE_LIKE, likeId })


export const like = (postId) => async (dispatch, getState) => {
    let { currentUser } = getState();
    const res = await fetch(`/api/posts/${postId}/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ post })
    })
    if (res.ok) {
        const { post } = await res.json();
        currentUser.likes.push(postId)
        dispatch(updateCurrentUser(currentUser))
    } else {
        console.error(res)
    }
}


export const unlike = (postId) => async (dispatch, getState) => {
    let { currentUser } = getState();
    const res = await fetch(`/api/posts/${postId}/likes`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const { post } = await res.json();
        let idx = currentUser.likes.indexOf(postId)
        currentUser.likes = currentUser.likes.splice(idx, 1)
        dispatch(updateCurrentUser(currentUser));
        // dispatch(deleteLike(post))
    } else {
        console.error(res)
    }
}


// export default function likes(state = {}, action) {
//     let newState = { ...state };
//     switch (action.type) {
//         case GET_LIKES:
//             action.likes.forEach(comment => newState[`"${comment.id}"`] = comment);
//             return newState;
//         case NEW_LIKE:
//             newState[`"${action.comment.id}"`] = action.comment;
//             return newState;
//         case DELETE_LIKE:
//             delete newState[`"${action.comment.id}"`]
//             return newState;
//         default:
//             return state;
//     }
// }