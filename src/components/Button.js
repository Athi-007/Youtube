import React from 'react'
import ButtonList from './ButtonList'

const Button = () => {
  const buttons = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Valentines", "Trending", "Music", "News", "Sports"]
  return (
    <div className='flex items-center overflow-x-auto pt-3'>
      {buttons.map((button , index) =>( 
        <ButtonList key ={index} name = {button}/>
      ))}
    </div>
  )
}

export default Button
