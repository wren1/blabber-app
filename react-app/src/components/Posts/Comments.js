import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Comment from './Comment';


const Comments = ({ post, commentIds, users }) => {
    const allComments = useSelector(state => state.comments)
    const comments = [];
    console.log('ids: ', commentIds)
    if (commentIds) {
        console.log('all: ', allComments)
        commentIds.forEach(id => comments.push(allComments[`"${id}"`]))
    }

    const makeCommentBlock = () => {
        return (
        <div className='make-comment__container'>
            <form className='make-comment-form'>
                <textarea className='make-comment-input' />
            </form>
        </div>
    )}

    console.log('COMMENTS: ', comments)
    if (!commentIds) {
        return (
        <div className='comments-container'>
            {makeCommentBlock()}
        </div>
        );
    } else {

    return (
        <div className='comments-container'>
            
            {!comments ? null : comments.map(comment => 
                (
                    <Comment comment={comment} key={comment.id} />
                ))}
            {makeCommentBlock()}
        </div>
    )}
}

export default Comments;