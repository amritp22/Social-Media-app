import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateProfileAction } from '../../Redux/auth.action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  outline:"none",
  overFlow:"scroll-y",
  bgcolor: 'background.paper',
  borderRadius:3,
  boxShadow: 24,
  p:2,
};

const ProfileModal = ({open,handleClose}) => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const dispatch=useDispatch();
    const handleSubmit=(values)=>{
        console.log("values",values);
        
    }
    const formik=useFormik({
        initialValues:{
            firstName:"",
            lastName:""
        },
        onSubmit:(values)=>{
            console.log("values",values);
            dispatch(updateProfileAction(values))
            handleClose();
        },
    })
    return (
      <div>
        {/* //<Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <p>Edit profile</p>
                    </div>
                    <Button type="submit">Save</Button>
                </div>
                <div>
                    <div className='h-[15rem]'>
                        <img className='w-full h-full rounded-t-md' src="https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_960_720.jpg" alt="" />
                    </div>
                
                <div className="pl-5 ">
                <Avatar sx={{height:"10rem",width:"10rem"}} className='transform -translate-y-24'
                    src='https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337_1280.jpg'
                 />
                </div>
                </div>
                <div className='space-y-5'>
                    
                        <TextField
                        name="firstName" 
                        placeholder="firstName add"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        />
                        <TextField
                        name="lastName" 
                        placeholder="lastName add"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        />
                </div>
            </form>
          </Box>
        </Modal>
      </div>
    );
}

export default ProfileModal
