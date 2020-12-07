export const GET_POSTS = 'blabber/posts/get';
export const GET_USER_POSTS = 'blabber/posts/get/user';
export const NEW_POST = 'blabber/posts/new';
export const NEW_GROUP_POST = 'blabber/posts/new/group';
export const EDIT_POST = 'blabber/posts/edit';
export const DELETE_POST = 'blabber/posts/delete';
export const LIKE_POST = 'blabber/posts/like';
export const UNLIKE_POST = 'blabber/posts/unlike';


export const getPosts = (posts) => ({ type: GET_POSTS, posts })
export const getUserPosts = (posts) => ({ type: GET_USER_POSTS, posts })
export const newPost = (post) => ({ type: NEW_POST, post })
export const newGroupPost = (post) => ({ type: NEW_GROUP_POST, post })
export const editPost = (post) => ({ type: EDIT_POST, post })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const likePost = (postId) => ({ type: LIKE_POST, postId })
export const unlikePost = (postId) => ({ type: UNLIKE_POST, postId })


export const loadPosts = () => async (dispatch) => {

}

export const loadUserPosts = () => async (dispatch) => {

}

export const createPost = () => async (dispatch) => {

}

export const createGroupPost = () => async (dispatch) => {

}

export const updatePost = () => async (dispatch) => {

}

export const removePost = () => async (dispatch) => {

}

export const like = () => async (dispatch) => {

}

export const unlike = () => async (dispatch) => {

}


export default function posts(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return {};
        case GET_USER_POSTS:
            return {};
        case NEW_POST:
            return {};
        case NEW_GROUP_POST:
            return {};
        case EDIT_POST:
            return {};
        case DELETE_POST:
            return {};
        case LIKE_POST:
            return {};
        case UNLIKE_POST:
            return {};
        default:
            return state;
    }
}