import React from 'react'

function CommenContainer() {
    const comnt = [{
        name:"Vikas Thakur",
        text:"Very nice video",
        replies:[{
            name:"Vikas Thakur",
        text:"Very nice video",
        replies:[{
            name:"Vikas Thakur",
            text:"Very nice video",
        }] 
        }]
      },
      {
        name:"Vikas Thakur",
        text:"Very nice video",
        replies:[{
            name:"Vikas Thakur",
        text:"Very nice video",
        replies:[{
            name:"Vikas Thakur",
            text:"Very nice video",
        }] 
        }]
      },
    ]  
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
        
        return (
         <> 
         <div className='flex'>
            <img className='w-10 p-2' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
           <div>
            <h4 className='font-semibold'>{info.name}</h4>
            <p className=''>{info.text}</p>
            </div>
            </div>
            
            <div className='ml-2 p-2 border-l-4'>
                <CommentList data = {info.replies}/>
            </div>
         </>   
        )
      }
  return (
    <div>
        <h2 className='font-bold'>Comments</h2>
        <CommentList data={comnt}/>
    </div>
  )
}

export default CommenContainer