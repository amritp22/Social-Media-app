import { Avatar, Box, Button, Card, Tab, Tabs } from '@mui/material'
import React, { useEffect } from 'react'
import PostCard from '../../components/DisplayPost/PostCard';
import UserReelsCard from '../../components/Reels/UserReelsCard';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';

const tabs=[
  {value:"Posts",name:"Posts"},
  {value:"Reels",name:"Reels"},
  {value:"Saved",name:"Saved"},
  {value:"RePosts",name:"RePosts"},

];
const posts=[1,1,1,1,2]
const reels=[1,1,1,1,2]
const saved=[1,1,1,1,2]
const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleProfileModalOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   //accsign user from database/user which has logined
   const {auth}=useSelector(store=>store);
  const [value, setValue] = React.useState('Posts');
  
  // This ensures the profile is updated in the component when the Redux store changes
  useEffect(() => {
    // Optionally, log the updated auth.user for debugging
    console.log("Updated profile info:", auth?.user);
  }, [auth?.user]); // Re-run whenever the user profile is updated

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className='p-5 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[15rem]' >
          <img className='h-full w-full rounded-t-md'
          src="https://cdn.pixabay.com/photo/2022/01/13/00/05/austria-6934162_1280.jpg" 
          alt="" />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar sx={{height:"10rem",width:"10rem"}} className='transform -translate-y-24'
          src='https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337_1280.jpg'
          />
          {
          true?
          <Button onClick={handleProfileModalOpen} sx={{borderRadius:'20px'}} variant='contained'>Edit Profile</Button>
          :
          <Button sx={{borderRadius:'20px'}} variant='contained'>FOLLOW</Button>
          }
        </div>
        <div className='flex'>
          <div className='items-center'>
          <h1 className='text-xl font-bold py-1'>{auth.user?.firstName+" "+auth.user?.lastName}</h1>
          <p>{"@"+auth?.user.firstName+"_"+auth?.user.lastName}</p>
          </div>
        </div>
        <div className='mt-1 flex gap-3 '>
          <span>23 post</span>
          <span>23 follower</span>
          <span>41 following</span>
        </div>
      </div>
      <section>
      <Box sx={{ width: '100%', borderBottom:1,borderColor:"divider" }} >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {tabs.map((item)=><Tab value={item.value} label={item.name} wrapped />)}
      </Tabs>
    </Box>
          <div className='flex justify-center'>
            {
            value==="Posts"?
            <div className='space-y-5 w-[70%] my-10'>
                {
                posts.map((item)=><div className='border'><PostCard/></div>)
                }
            </div>
            :value==="Reels"?
            <div className='flex flex-wrap justify-center my-10 gap-2'>
                {
                reels.map((item)=><UserReelsCard/>)
                }
            </div>
            :value==="Saved"?
            <div className='space-y-5 w-[70%] my-10'>
                {
                saved.map((item)=><div className='border'><PostCard/></div>)
                }
            </div>
            :<div>Repost</div>
            }
          </div>
      </section>
      <section><ProfileModal open={open} handleClose={handleClose}/></section>
    </Card>
  )
}

export default Profile
