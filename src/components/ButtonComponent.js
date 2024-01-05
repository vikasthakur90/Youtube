import React from 'react'
import Button from './Button'

function ButtonComponent() {
 const list = ["All","Gaming","Music","Cricket","Politics","WWE","Gaming","Music","Cricket","Politics","WWE"]
  return (
    <div className='flex m-2 bg-white w-full my-4'>
        {list.map((e,index) => {
           return <Button key={index} name = {e}/>
        })}
    </div>
  )
}

export default ButtonComponent