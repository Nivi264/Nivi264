import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='flex py-2 px-5 m-3 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button