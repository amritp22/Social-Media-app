import { Avatar, Card, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from './StoryCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from '../DisplayPost/PostCard';
import CreatePostOpenModal from '../CreatePost/CreatePostOpenModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostAction } from '../../Redux/Post/post.action';
const story = [1, 1, 1, 1];
const posts = [1, 1, 1, 1];

const MiddlePart = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpenPostModal = () => {
    setOpen(true);
    console.log("model opened ");
  }
  const dispatch=useDispatch();
  const {post}=useSelector(store=>store);
  console.log("post data from redux store",post);
  //it we re render ie fetch all post again is comment is added to any post
  useEffect(()=>{
      dispatch(getAllPostAction())
  },[post.newComment])
  return (
    <div className='px-20'>
      <div className='flex items-center p-3 rounded-b-md'>
        <div className='flex flex-col items-center p-3'>
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>
            New
          </p>
        </div>
        {story.map((item) => <StoryCircle />)}
      </div>
      <Card className='p-5 mt-5'>
        <div className='flex justify-between cursor-pointer '>
          <Avatar />
          <input onClick={handleOpenPostModal} type='text' className='outline-none w-[90%] rounded-full bg-transparent border-gray-500 border px-5' />
        </div>
        <div className='flex justify-center space-x-8 mt-5'>
          <div className='flex items-center'>
            <IconButton  color='primary' onClick={handleOpenPostModal}>
              <CameraAltIcon />
            </IconButton>
            <span>camera</span>
          </div>
          <div className='flex items-center'>
            <IconButton color='primary' onClick={handleOpenPostModal}>
              <VideocamIcon />
            </IconButton>
            <span>video</span>
          </div>
          <div className='flex items-center'>
            <IconButton  color='primary' onClick={handleOpenPostModal}>
              <ArticleIcon />
            </IconButton>
            <span>post</span>
          </div>
        </div>
      </Card>
      <div className='mt-5 space-y-5'>
        {post.posts.map((item)=><PostCard item={item}/>)}
      </div>
      {/* this will open when it clicked from frontend and handleOpenpost model sets
      it to true */}
      <CreatePostOpenModal open={open} handleClose={handleClose} />
    </div>
  )
}

export default MiddlePart
