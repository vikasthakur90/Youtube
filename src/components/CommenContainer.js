import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY, YOUTUBE_COMMENTS_API } from '../utils/constants';

function CommenContainer({id}) {
   
    const [comnt,setComnt] = useState([]);
    const CommentList = ({data})=>{
        
        return (
            <div>
                {data?.map((e,i)=>{
                    return <Comment key={i} info={e}/>
                })}
            </div>
        )
      }
      const Comment = ({info})=>{
        const {snippet} = info;
        
        return (
         <> 
         <div className='flex'>
            <img className='w-10 h-12 p-2 rounded-2xl' alt='user' src={snippet?.topLevelComment?.snippet.authorProfileImageUrl || snippet.authorProfileImageUrl}/>
           <div>
            <h4 className='font-semibold'><a href={snippet?.topLevelComment?.snippet.authorChannelUrl || snippet.authorChannelUrl}>{snippet?.topLevelComment?.snippet.authorDisplayName || snippet.authorDisplayName}</a></h4>
            <p className=''>{snippet?.topLevelComment?.snippet.textOriginal || snippet.textOriginal}</p>
            </div>
            </div>
            
            <div className='ml-2 p-2 border-l-4'>
                <CommentList data = {info?.replies?.comments}/>
            </div>
         </>   
        )
      }
      useEffect(()=>{
        getComment();
      },[]);
      const getComment = async () =>{
        const d = await fetch(YOUTUBE_COMMENTS_API+id+"&key="+GOOGLE_API_KEY);
        const j = await d.json();
        setComnt(j.items);
        console.log(j);
      }
  return (
    <div>
        <h2 className='font-bold'>Comments</h2>
        <CommentList data={comnt}/>
    </div>
  )
}

export default CommenContainer