import React from 'react'

function Button(props) {
    const {name} = props;
  return (
    <div className='m-2 '>
        <button className='bg-gray-200 p-1 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button