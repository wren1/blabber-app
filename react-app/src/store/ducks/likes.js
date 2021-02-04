
import { getUsers } from './users';
import { getPosts } from './posts';
import { updateCurrentUser } from './currentUser';

export const GET_LIKES = 'blabber/likes/get';
export const NEW_LIKE = 'blabber/likes/new';
export const DELETE_LIKE = 'blabber/likes/delete';


export const like = (postId) => async (dispatch, getState) => {
    let { currentUser } = getState();
    const res = await fetch(`/api/posts/${postId}/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
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
    } else {
        console.error(res)
    }
}