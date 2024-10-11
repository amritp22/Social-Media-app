import React, { useState } from 'react'
import { navigationMenu } from './SideBarNavigation'
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutUserAction } from '../../Redux/auth.action';
const SideBar = () => {
  //accsign user from database/user which has logined
  const {auth}=useSelector(store=>store);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate=(item)=>{
    if(item.title==='Profile'){
      navigate(`/profile/${auth.user?.id}`)
    }else{
      navigate(item.path)
    }
  }
  const handleLogout = () => {
    dispatch(logoutUserAction());
    // navigate('/login');  // or wherever your login page is
   };
  return (
    <Card className='card h-screen flex flex-col justify-between py-5 w-60'>
      <div className='space-y-8 pl-5'>
        <div className=''> 
          <span className='logo font-bold text-xl'>Social media app</span>
        </div>
        <div className='space-y-8 pl-5'>
          {navigationMenu.map((item)=>
          <div onClick={()=>handleNavigate(item)} className='cursor-pointer flex space-x-3' key={item.title}>
          {item.icon} {/* This will hold the logo */}
          <p className='text-xl'>{item.title}</p> {/* This will hold the name */}
        </div>)}
        </div>
      </div>
      <div>
        <Divider/>
        <div className='flex justify-between items-center pt-5'>
          <div className='flex items-center space-x-3'>
              <Avatar src='https://up.yimg.com/ib/th?id=OIP.aMrXppKRuvRyJoicXx3uxgHaHa&pid=Api&rs=1&c=1&qlt=95&w=122&h=122'/>
              <div>
                <p className='font-bold'>{auth.user?.firstName+" "+auth.user?.lastName}</p>
                <p className='opacity-70'>{"@"+auth.user?.firstName+"_"+auth.user?.lastName}</p>
              </div>
          </div>
          
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
    
        </div>
      </div>
    </Card>
  )
}

export default SideBar
