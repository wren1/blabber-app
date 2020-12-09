export const GET_COMMENTS = 'blabber/comments/get';
export const NEW_COMMENT = 'blabber/comments/new';
export const EDIT_COMMENT = 'blabber/comments/edit';
export const DELETE_COMMENT = 'blabber/comments/delete';

export const getComments = (comments) => ({ type: GET_COMMENTS, comments })
export const newComment = (comment) => ({ type: NEW_COMMENT, comment })
export const editComment = (comment) => ({ type: EDIT_COMMENT, comment })
export const deleteComment = (commentId) => ({ type: DELETE_COMMENT, commentId })


export const loadComments = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}`)
    if (res.ok) {
        const { comments } = await res.json();
        dispatch(getComments(comments))
    } else {
        console.error(res)
    }
}

export const createComment = (postId, comment) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment })
    })
    if (res.ok) {
        const { comment } = await res.json();
        dispatch(newComment(post))
    } else {
        console.error(res)
    }
}

export const updateComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/posts/comments/${comment.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment })
    })
    if (res.ok) {
        const { comment } = await res.json();
        dispatch(editComment(comment))
    } else {
        console.error(res)
    }
}

export const removeComment = (commentId) => async (dispatch) => {
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


export default function comments(state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case GET_COMMENTS:
            action.comments.forEach(commnet => newState[`"${comment.id}"`] = comment);
            return newState;
        case NEW_COMMENT:
            newState[`"${action.comment.id}"`] = comment;
            return newState;
        case EDIT_COMMENT:
            newState[`"${action.comment.id}"`] = comment;
            return newState;
        case DELETE_COMMENT:
            delete newState[`"${action.comment.id}"`]
            return newState;
        default:
            return state;
    }
}