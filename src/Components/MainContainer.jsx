import React from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import Users_Groups from './Users_Groups'
 function MainContainer() {
  // const []
  return (
    <div  className='main-container'>
      <Sidebar />
      {/* <CreateGroups /> */}
      {/* <Welcome /> */}
      {/* <ChatArea /> */}
      <Users_Groups />
    </div>
  )
}

export default MainContainer
