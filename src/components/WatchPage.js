import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';
import CommenContainer from './CommenContainer';
import LiveChat from './LiveChat';
function WatchPage() {
  
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[])
  
  return (
    <div className='mt-1'>
        <div className='flex w-full'>
         <div className=''>   
        <iframe  width="800" height="400" src={"https://www.youtube.com/embed/"+params.get('v')} 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen ></iframe></div>
        
        <LiveChat />
        </div>
        <CommenContainer />
    </div>
  )
}

export default WatchPage