import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import Comments from './Comments';
import EditPost from './EditPost';

import { loadComments } from '../../store/ducks/comments';
import { removePost } from '../../store/ducks/posts';


const PostFooter = ({ post, user, setOpenComments, openComments }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)
    // let comments = [];
    // console.log(post.comments)
    // const allComments = useSelector(state => state.comments)
    // const comments = useSelector(state => post.comments.map(commentId => state.comments[`"${commentId}"`]));
    // console.log('all c: ', allComments)
    let commentIds = post.comments
    const [openEditPost, setOpenEditPost] = useState(false)

    const handleClick = () => {
        (async () => {
            await dispatch(loadComments(post.id))
            setOpenComments(!openComments)
        })()
    }

    const handleDelete = () => {
        dispatch(removePost(post.id))
    }

    const handleEdit = () => {
        setOpenEditPost(!openEditPost);
    }

    // useEffect(() => {
    //     (async () => {
    //         if (openComments) {
    //             dispatch(loadComments(post.id))
    //         }
    //     })();
    // }, []);

    return (
        <>
            <div className='post-footer'>
                {/* {!post.comments.length ? null : */}
                <div onClick={handleClick} className='show-comments__button'>
                    <div className='comments-icon'>
                        <ChatBubbleOutlineIcon />
                    </div>
                    <div className='post-footer__comments-button'>
                            {!commentIds.length ? 0 : commentIds.length} Comments
                    </div>
                </div>
                    {/* //  } */}
                {currentUser.id !== post.user_id ? null :
                <div className='post-footer__buttons'>
                <DeleteIcon onClick={handleDelete} className='post-footer__button' />
                {/* <EditIcon onClick={handleEdit} className='post-footer__button' /> */}
                </div>}
            </div>
            {!openComments ? null : <Comments post={post} commentIds={commentIds} />}
            {/* {!openEditPost ? null : 
            <EditPost openMakePost={openEditPost} setOpenMakePost={setOpenEditPost} post={post} user={user}/>} */}
        </>
    )
}

export default PostFooter;