import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function Sidebar() {
    const isMenu = useSelector(store=>store.app.isMenu)
    if(!isMenu){
        return null;
    }
  return (
    <div className='shadow-lg w-48 m-2 py-4 px-5'>
         <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Lives</li>
        </ul> 
        <h1 className='font-bold'>Subcriptions</h1>
       <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Comedy</li>
        <li>Movies</li>
        </ul> 
        <h1 className='font-bold'>Watch Later</h1>
       <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Comedy</li>
        <li>Movies</li>
        </ul> 
    </div>
  )
}

export default Sidebar