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
// import { removePost } from '../../store/ducks/posts';
import { like, unlike } from '../../store/ducks/likes';


const PostFooter = ({ post, user, setOpenComments, openComments }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)
    let commentIds = post.comments
    const [openEditPost, setOpenEditPost] = useState(false)
    let isLiked = currentUser.likes.includes(post.id);
    const [liked, setLiked] = useState(isLiked)
    const [numLikes, setNumLikes] = useState(post.users_liked.length);

    // console.log('post: ', post)

    const handleClick = () => {
        (async () => {
            await dispatch(loadComments(post.id))
            setOpenComments(!openComments)
        })()
    }

    // const handleDelete = () => {
    //     dispatch(removePost(post.id))
    // }

    // const handleEdit = () => {
    //     setOpenEditPost(!openEditPost);
    // }

    const handleLike = () => {
        if (!liked) {
            console.log('like')
            setNumLikes(numLikes + 1)
            dispatch(like(post.id))
        } else {
            console.log('unlike')
            setNumLikes(numLikes - 1)
            dispatch(unlike(post.id))
        }
        setLiked(!liked)
    }


    return (
        <>
            <div className='post-footer'>
                <div onClick={handleClick} className='show-comments__button'>
                    <div className='comments-icon'>
                        <ChatBubbleOutlineIcon />
                    </div>
                    <div className='post-footer__comments-button'>
                            {!commentIds.length ? 0 : commentIds.length} Comments
                    </div>
                </div>
                {/* {currentUser.id !== post.user_id ? null : } */}
                <div className='post-footer__buttons'>
                    <div className='post-footer__likes'>{numLikes} likes</div>
                    {!liked ? <FavoriteBorderIcon onClick={handleLike} className='post-like-icon' /> : <FavoriteIcon onClick={handleLike} className='post-like-icon' />}
                {/* <DeleteIcon onClick={handleDelete} className='post-footer__button' /> */}
                </div>
            </div>
            {!openComments ? null : <Comments post={post} commentIds={commentIds} />}
        </>
    )
}

export default PostFooter;