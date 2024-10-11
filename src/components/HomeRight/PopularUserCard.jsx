import { Avatar, Button, CardHeader, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const PopularUserCard = ({uid}) => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {uid.firstName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Button>Follow</Button>
          </IconButton>
        }
        title={uid.firstName+" "+uid.lastName}
        subheader={uid.email}
      />
    </div>
  )
}

export default PopularUserCard
