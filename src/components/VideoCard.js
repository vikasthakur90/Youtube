import React from 'react'

function VideoCard({info}) {
  const {snippet,statistics} = info;
  const {channelTitle,thumbnails,title} = snippet;  
  return (
    <div className='w-[21rem] m-2'>
        <img alt='video' className='rounded-2xl p-2' src={thumbnails.medium.url} />
        <h4 className='font-bold p-2'>{title}</h4>
        <p className='text-gray-500 px-2'>{channelTitle}</p>
        <p className='text-gray-500 px-2'>{statistics.viewCount} views</p>
    </div>
  )
}

export default VideoCard