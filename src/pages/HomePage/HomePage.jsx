import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MiddlePart from '../../components/MiddlePart/MiddlePart'; // Make sure this is correctly imported
import CreateReelsForm from '../../components/Reels/CreateReelsForm'; // Check the path and export type
import Profile from '../Profile/Profile';
import SideBar from '../../components/SideBar/SideBar';
import Reels from '../../components/Reels/Reels';
import HomeRight from '../../components/HomeRight/HomeRight';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../Redux/auth.action';

const HomePage = () => {
  console.log('Rendering HomePage');
    const location = useLocation();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    //accessing user
    const {auth}=useSelector(store=>store);
    console.log("auth",auth);
    
    console.log('Location:', location);
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={0} lg={3}>
                    <div className='px-5 sticky top-0'>
                        <SideBar />
                    </div>
                </Grid>
                <Grid item className='px-5 flex justify-center' xs={12} lg={location.pathname === "/" ? 6 : 9}>
                    <Routes>
                        <Route path="/" element={<MiddlePart />} />
                        <Route path="/reels" element={<Reels />} />
                        <Route path="/create-reels" element={<CreateReelsForm />} />
                        <Route path="/profile/:id" element={<Profile />} />
                    </Routes>
                </Grid>
                {location.pathname==="/" && <Grid item lg={3} className='relative'>
                    <div className='px-5 w-full sticky top-0'>
                        <HomeRight />
                    </div>
                </Grid>}
            </Grid>
        </div>
    );
};

export default HomePage;
