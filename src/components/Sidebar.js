import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_VIDEO,GOOGLE_API_KEY } from '../utils/constants';
import { addVideo } from '../utils/videoSlice';
function Sidebar() {
    const isMenu = useSelector(store=>store.app.isMenu)
    const dispatch = useDispatch();
    if(!isMenu){
        return null;
    }
    
    const handleClick =async (name)=>{
        console.log(name);
        const data = await fetch(YOUTUBE_SEARCH_VIDEO+name+"&key="+GOOGLE_API_KEY);
        const json = await data.json();
        dispatch(addVideo(json.items));
        }
    const list = ["Shorts","Videos","Lives","Music","Sports","Comedy","Movies"];
  return (
    <div className='shadow-lg w-28 mr-3'>
        <ul>
        <li className='font-semibold px-4 py-2 hover:bg-slate-200'><Link to={'/'}>Home</Link></li>
        {list.map((e)=><li className='font-semibold px-4 py-2 hover:bg-slate-200' onClick={()=>handleClick(e)}><Link to={'searchvideo'}>{e}</Link></li>)}
        </ul> 
     
    </div>
  )
}

export default Sidebar