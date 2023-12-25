import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoComponent() {
  const [video,setvideo] = useState([]);
  useEffect(()=>{
   getVideo();
  },[]);
  const getVideo = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setvideo(json.items);
  }  
  return (
    <div className='flex flex-wrap'>
        {video.map((v)=>{
            return <Link to={'/watch?v='+v.id} key={v.id}><VideoCard  info={v}/></Link>
        })}
    </div>
  )
}

export default VideoComponent