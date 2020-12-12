import { getUsers } from './users';
import { getUserGroups, getGroup } from './groups';


export const GET_POSTS = 'blabber/posts/get';
// export const GET_USER_POSTS = 'blabber/posts/get/user';
// export const GET_GROUP_POSTS = 'blabber/posts/get/group'
export const NEW_POST = 'blabber/posts/new';
export const NEW_GROUP_POST = 'blabber/posts/new/group';
export const EDIT_POST = 'blabber/posts/edit';
export const DELETE_POST = 'blabber/posts/delete';
export const LIKE_POST = 'blabber/posts/like';
export const UNLIKE_POST = 'blabber/posts/unlike';


export const getPosts = (posts) => ({ type: GET_POSTS, posts })
// export const getGroupPosts = (posts) => ({ type: GET_GROUP_POSTS, posts })
// export const getUserPosts = (posts) => ({ type: GET_USER_POSTS, posts })
export const newPost = (post) => ({ type: NEW_POST, post })
export const newGroupPost = (post) => ({ type: NEW_GROUP_POST, post })
export const editPost = (post) => ({ type: EDIT_POST, post })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const likePost = (postId) => ({ type: LIKE_POST, postId })
export const unlikePost = (postId) => ({ type: UNLIKE_POST, postId })


export const loadPosts = () => async (dispatch, getState) => {
    const { currentUser } = getState();
    if (currentUser) {
        const res = await fetch(`/api/users/${currentUser.id}/posts`);
        if (res.ok) {
            const { posts, users, groups } = await res.json();
            console.log('users: ', users)
            dispatch(getPosts(posts))
            dispatch(getUsers(users))
            dispatch(getUserGroups(groups))
        } else {
            console.error(res)
        }
    }
}

export const loadUserPosts = (userId) => async (dispatch) => {
    const res = await fetch(`/api/posts/users/${userId}`);
    if (res.ok) {
        const { posts, groups } = await res.json();
        dispatch(getPosts(posts))
        dispatch(getUserGroups(groups))
    } else {
        console.error(res)
    }
}

export const loadGroupPosts = (groupId) => async (dispatch) => {
    console.log(groupId)
    const res = await fetch(`/api/posts/groups/${groupId}`);
    if (res.ok) {
        const { posts, users, group } = await res.json();
        console.log(posts, users, group)
        if (posts) dispatch(getPosts(posts))
        if (users) dispatch(getUsers(users))
        if (group) dispatch(getGroup(group))
    } else {
        console.error(res)
    }
}

export const createPost = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post })
    })
    if (res.ok) {
        const post = await res.json();
        dispatch(newPost(post))
    } else {
        console.error(res)
    }
}

export const createGroupPost = (groupId, post) => async (dispatch) => {
    const res = await fetch(`/api/posts/groups/${groupId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post })
    })
    if (res.ok) {
        const post = await res.json();
        dispatch(newPost(post))
    } else {
        console.error(res)
    }
}

export const updatePost = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts/${post.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post })
    })
    if (res.ok) {
        const post = await res.json();
        dispatch(editPost(post))
    } else {
        console.error(res)
    }
}

export const removePost = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const post = await res.json();
        dispatch(deletePost(postId))
    } else {
        console.error(res)
    }
}

export const like = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const post = await res.json();
        // edit likes
        dispatch(likePost(postId))
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
        const post = await res.json();
        // edit likes
        dispatch(unlikePost(postId))
    } else {
        console.error(res)
    }
}


export default function posts(state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case GET_POSTS:
            newState = {};
            action.posts.forEach(post => newState[`"${post.id}"`] = post);
            return newState;
        case NEW_POST:
            newState[`"${action.post.id}"`] = action.post;
            return newState;
        case NEW_GROUP_POST:
            newState[`"${action.post.id}"`] = action.post;
            return newState;
        case EDIT_POST:
            newState[`"${action.post.id}"`] = action.post;
            return newState;
        case DELETE_POST:
            delete newState[`"${action.postId}"`]
            return newState;
        default:
            return state;
    }
}