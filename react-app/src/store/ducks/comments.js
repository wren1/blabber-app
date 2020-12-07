
// get comments related to post
// make comment on post
// edit comment
// delete comment

export const GET_COMMENTS = 'babble/comments/get';
export const NEW_COMMENT = 'babble/comments/new';
export const EDIT_COMMENT = 'babble/comments/edit';
export const DELETE_COMMENT = 'babble/comments/delete';

export const getComments = (comments) => ({ type: GET_COMMENTS, comments })
export const newComment = (comment) => ({ type: NEW_COMMENT, comment })
export const editComment = (comment) => ({ type: EDIT_COMMENT, comment })
export const deleteComment = (commentId) => ({ type: DELETE_COMMENT, commentId })


export const loadComments = () => async (dispatch) => {

}

export const createComment = () => async (dispatch) => {

}

export const updateComment = () => async (dispatch) => {

}

export const removeComment = () => async (dispatch) => {

}


export default function comments(state = {}, state) {
    switch (action.type) {
        case GET_COMMENTS:
            return {};
        case NEW_COMMENT:
            return {};
        case EDIT_COMMENT:
            return {};
        case DELETE_COMMENT:
            return {};
        default:
            return state;
    }
}