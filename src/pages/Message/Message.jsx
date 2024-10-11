import { Avatar, Grid } from '@mui/material'
import React from 'react'
import WestIcon from '@mui/icons-material/West';

const Message = () => {
    return (
        <div>
            <Grid className='h-screen overflow-y-hidden'>
                <Grid className='h-full px-5' item lg={3}>
                    <div className='h-full flex justify-between space-x-2'>
                        <div className=''>
                            <div className='flex space-x-4 items-center py-5'>
                                <WestIcon />
                                <h1>Home</h1>
                            </div>
                            <div className='h-[83vh]'>
                                <div>
                                    searhUser
                                </div>
                                <div className='h-full space-y-4 mt-5 overflow-y-scroll'>

                                </div>
                            </div>
                        </div>
                    </div>

                </Grid>
                <Grid className='h-full' item lg={9}>
                    shae
                    <div>
                        <div className='flex justify-between items-center border-1 p-5'>
                            <div className='flex items-center space-x-3'>
                                <Avatar src='https://tse4.mm.bing.net/th?id=OIP.0rHhkJGjUw37i-wGtakm3AHaHa&pid=Api&P=0&h=220' />
                                <p>code tih sam</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Message
