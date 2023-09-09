import React from 'react'
import "./myStyles.css"


function Conversations({conversation}) {
  return (
    <div className='conversation-container'>
      <p className='con-icon' >{conversation.name[0]}</p>
      <p className='con-title' >{conversation.name}</p>
      <p className='con-lastMessage' >{conversation.lastMessage}</p>
      <p className='con-timeStamp' >{conversation.timeStamp}</p>
    </div>
  )
}

export default Conversations
