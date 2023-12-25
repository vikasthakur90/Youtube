import React from 'react'

function Chat({name,message}) {
  return (
    <div className='flex items-center shadow-lg p-2'>
         <img className='w-7 mr-1' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
         <span className=' font-bold mx-1'>{name+" "}</span>
         <span className=''>{message}</span>
    </div>
  )
}

export default Chat