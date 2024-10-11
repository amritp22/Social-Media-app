import { Avatar, Backdrop, Box, Button, CircularProgress, IconButton, Modal, Typography } from '@mui/material'
import { useFormik } from 'formik';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import React, { useState } from 'react'
import { uploadToCloudinary } from '../../utils/uploadToCloudniry';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../Redux/Post/post.action';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    outline: "none",
    bgcolor: 'background.paper',
    borderRadius: "0.6rem",
    boxShadow: 24,
    p: 4,
};
const CreatePostOpenModal = ({ open, handleClose }) => {
    const [selectedImage, setSelectedImage] = useState();
    const [selectedVideo, setSelectedVideo] = useState();
    const [isLoading,setIsLoading]=useState(false);
    const dispatch=useDispatch();

    const handleSelectVideo = async(event) => { 
        setIsLoading(true)
        const videoUrl=await uploadToCloudinary(event.target.files[0],"video");
        setSelectedImage(videoUrl);
        setIsLoading(false)
        formik.setFieldValue("video",videoUrl);
    }
    const handleSelectImage = async(event) => {
        setIsLoading(true)
        const imageUrl=await uploadToCloudinary(event.target.files[0],"image");
        setSelectedVideo(imageUrl);
        setIsLoading(false)
        formik.setFieldValue("image",imageUrl);
     }

    // const formik = useFormik({
    //     initialValues:{
    //         caption:"",
    //         image:"",
    //         video:""
    //     },
    //     onSubmit:(values)=>{
    //         console.log("formik alues",values);
    //     }
    // });
    const formik = useFormik({
        initialValues: {
            caption: "",
            image: "",
            video: ""
        },
        onSubmit: (values) => {
            console.log("Formik values", values);
            // handle form submission logic here
            dispatch(createPostAction(values));
        }
    });
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className='flex space-x-4 items-center'>
                                <Avatar />
                                <div>
                                    <p className='font-bold text-lg'>code with ma</p>
                                    <p className='text-sm'>@ovde</p>
                                </div>
                            </div>
                            <textarea
                                onChange={formik.handleChange}
                                placeholder='Write caption...'
                                name='caption'
                                value={formik.values.caption}
                                rows={4}
                                className='w-full p-2 border border-gray-300 rounded-md'
                            />
                            <div className='flex space-x-4 items-center'>
                                <div>
                                    <input
                                        type="file"
                                        accept='image/*'
                                        id='image-input'
                                        onChange={handleSelectImage}
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="image-input" component="span">
                                        <IconButton color='primary'>
                                            <ImageIcon />
                                        </IconButton>
                                        <span className='cursor-pointer'>image</span>
                                    </label>
                                    
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        accept='video/*'
                                        id='video-input'
                                        onChange={handleSelectVideo}
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor='video-input' component="span">
                                        <IconButton color='primary'>
                                            <VideoCallIcon />
                                        </IconButton>
                                        <span className='cursor-pointer'>video</span>
                                    </label>
                                    
                                </div>
                            </div>
                            {selectedImage && <div>
                                <img className="h-[10rem]" src={selectedImage} alt="" />
                            </div>}
                            <div>
                                <Button
                                    className='flex w-full justify-end'
                                    variant='contained' type='submit' sx={{ borderRadius: '1.5rem' }}>post</Button>
                            </div>
                        </div>

                    </form>
                    <Backdrop
                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                        open={isLoading}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Box>
            </Modal>
        </div>
    )
}

export default CreatePostOpenModal
