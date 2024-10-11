import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentAction, likeUserPostAction } from '../../Redux/Post/post.action';
import { isLikeByReqUser } from '../../utils/isLikedByReqUser';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const PostCard = ({item}) => {
    const dispatch=useDispatch();
    const {post,auth}=useSelector(store=>store);
    const [showLike,setShowLike]=useState(false);
    const [showComments,setShowComments]=useState(false);
    const handleLike=()=>{
        console.log('like triggered');
        dispatch(likeUserPostAction(item.id))
    }
    const handleShowComment=()=>{
        setShowComments(!showComments);
    }
    const handleShowLike=()=>{
        console.log("like triggered");
        setShowLike(!showLike);
    }
    const handleCreateComment=(content)=>{
        const reqData={
            postId:item.id,
            data:{content}
        }
        dispatch(createCommentAction(reqData));
    }
    return (
        <Card className=''>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={item.user.firstName+" "+item.user.lastName}
                subheader={"@"+item.user.firstName+"_"+item.user.lastName}
            />
            <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className='flex justify-between'>
                <div>
                <IconButton aria-label="like" onClick={handleLike}>
                    {isLikeByReqUser(auth.user.id,item)?<FavoriteIcon />:<FavoriteBorderIcon/>}
                    
                </IconButton>
                <span onClick={handleShowLike} className='cursor-pointer size-10 font-bold'>
                    {item.liked.length}<KeyboardArrowDownIcon/></span>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="comment" onClick={handleShowComment}>
                    <ChatBubbleIcon />
                </IconButton>
                </div>
                <div>
                <IconButton aria-label="bookmark" >
                {true?<BookmarkBorderIcon/>:<BookmarkIcon/>}
                </IconButton>
                </div>
            </CardActions>
           {showComments && <section>
            <div className=' flex items-center space-x-5 mx-3 my-5'>
                <Avatar/>
                    <input onKeyPress={(e)=>{
                        if(e.key=="Enter"){
                            handleCreateComment(e.target.value)
                            console.log("enter pressed---",e.target.value);
                        }
                    }} className='w-full outline-none bg-transparent border border-[#3b4054]
                    rounded-full px-5 py-2' placeholder='write your comments....' type="text" />
                </div>
                <Divider />
                <div className='mx-3 space-y-2 my-5 text-xs '>
                    {
                        item.comment.map((com)=>
                        <div className='flex items-center space-x-5'>
                            <Avatar >
                                {com.user.firstName[0].toUpperCase()}
                            </Avatar>
                            <p>{com.content}</p>
                        </div>
                    )}
                </div>
            </section>}
            {showLike && <section>
                
                <div className='mx-3 space-y-2 my-5 text-xs '>
                    {
                        item.liked.map((like)=>
                        <div className='flex items-center space-x-5'>
                            <Avatar >
                                {like.firstName[0].toUpperCase()}
                            </Avatar>
                            <p>{like.firstName+" "+like.lastName}</p>
                        </div>
                    )}
                </div>
            </section>}
        </Card>
    )
}

export default PostCard
