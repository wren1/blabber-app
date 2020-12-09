export const GET_COMMENTS = 'blabber/comments/get';
export const NEW_COMMENT = 'blabber/comments/new';
export const EDIT_COMMENT = 'blabber/comments/edit';
export const DELETE_COMMENT = 'blabber/comments/delete';

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


export default function comments(state = {}, action) {
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