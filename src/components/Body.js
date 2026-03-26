import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex pt-14'>
      <SideBar />
      <div className='ml-56  flex-1 min-w-0'>
        <MainContainer />
      </div>
    </div>
  )
}

export default Body