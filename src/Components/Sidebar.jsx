import React, { useState } from 'react'
import "./myStyles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import Conversations from './Conversations';

function Sidebar() {
    const [conversations, setConversations] = useState([
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
    ])
    return (
        <div className='side-bar-container'>
            <div className='sb-header'>
                <div>
                    <IconButton >
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton >
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton >
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton >
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton >
                        <NightlightIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sb-search'>
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <input placeholder='Search' className='search-box' />
            </div>
            <div className='sb-conversations'>
                {conversations.map((conversation) => {
                    return <Conversations conversation={conversation} key={conversation.name}/>
                })}
            </div>

        </div>
    )
}

export default Sidebar
