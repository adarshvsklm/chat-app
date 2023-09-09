import React from 'react'
import "./myStyles.css"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';import { IconButton } from '@mui/material';

function CreateGroups() {
  return (
    <div className='createGroups-container'>
      <input placeholder='Enter Group Name' className='search-box'></input>
     <IconButton>
        <DoneOutlineIcon />
     </IconButton>
    </div>
  )
}

export default CreateGroups
