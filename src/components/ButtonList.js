import React from 'react'

const ButtonList = ({ name }) => {
  return (
    <div className='px-2 py-1.5 flex'>
        <button className="px-4 py-1.5 text-sm flex font-medium bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer whitespace-nowrap">{name}</button>
    </div>
  )
}

export default ButtonList
