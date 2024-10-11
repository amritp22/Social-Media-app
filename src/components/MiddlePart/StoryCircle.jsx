import { Avatar } from '@mui/material'
import React from 'react'

const StoryCircle = () => {
    return (
        <div className='flex flex-col items-center p-5'>
            <Avatar src='https://up.yimg.com/ib/th?id=OIP.aMrXppKRuvRyJoicXx3uxgHaHa&pid=Api&rs=1&c=1&qlt=95&w=122&h=122' sx={{ width: "5rem", height: "5rem" }}/>
            <p>
                New code 
            </p>
        </div>
    )
}

export default StoryCircle
