import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addVideo } from '../utils/videoSlice';
import { YOUTUBE_SEARCH_VIDEO,GOOGLE_API_KEY } from '../utils/constants';
function Button(props) {
    const {name} = props;
    const dispatch =useDispatch();
    const handleClick =async ()=>{
        console.log(name);
        const data = await fetch(YOUTUBE_SEARCH_VIDEO+name+"&key="+GOOGLE_API_KEY);
        const json = await data.json();
        
        dispatch(addVideo(json.items));
        
        }
    
  return (
    <div className='m-2 '>
       <button className='bg-gray-200 p-1 rounded-lg' onClick={()=>handleClick()}><Link to={'searchvideo'}>{name}</Link></button>
    </div>
  )
}

export default Button