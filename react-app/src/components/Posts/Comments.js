import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';
import CommentForm from './CommentForm';


const Comments = ({ post, commentIds, users }) => {
    const allComments = useSelector(state => state.comments)
    const posts = useSelector(state => state.posts)
    // commentIds = posts[`"${post.id}"`].comments;
    const comments = [];
    // const [comments, setComments] = useState([])
    console.log('ids: ', commentIds)
    if (commentIds) {
        console.log('all: ', allComments)
        commentIds.forEach(id => comments.push(allComments[`"${id}"`]))
    }


    console.log('COMMENTS: ', comments)
    // if (!commentIds) {
    //     return (
    //         <div className='comments-container'>
    //             <CommentForm post={post}/>
    //         </div>
    //     );
    // } else {

    if (commentIds.length !== comments.length) return null;

    return (
        <div className='comments-container'>
            
            {!commentIds ? 'hi' : comments.map(comment => 
                (
                    <Comment comment={comment} key={comment.id} />
                ))}
            <CommentForm post={post} comments={comments} />
        </div>
    )
}

export default Comments;