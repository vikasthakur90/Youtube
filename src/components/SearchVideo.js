import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchCard from './SearchCard';
function SearchVideo() {
    const video = useSelector((store)=>store.video.video[0]);
  
    useEffect(()=>{
     //   dispatch(closeMenu());
      },[video])
  return (
    <div className='flex flex-wrap'>
        {video?.map((v,index)=>{
            return <Link to={'/watch?v='+v.id.videoId} key={index}><SearchCard  info={v}/></Link>
        })}
    </div>
  )
}

export default SearchVideo