import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/messageSlice';
import { randomName,generateRandomString } from '../utils/randomName';


function LiveChat() {
    const [livemessage,setLiveMessage] = useState([]);
    const chats = useSelector((store) => store.message.chats);
    const dispatch = useDispatch();
    const [userMessage,setUserMessage] = useState("");
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({name:randomName(),message:generateRandomString()}));
            setLiveMessage(chats);
        },1500);
        return ()=> clearInterval(i);
    },[]);
  return (
    <div className='flex-row'>
    <div className='border border-black h-[400px] w-full bg-slate-100 rounded-lg p-2 m-1 overflow-y-scroll flex-col-reverse'>
        {livemessage.map((e)=><Chat name={e.name} message={e.message}/>)}
    </div>
    <form className='p-1' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({name:"Vikas Thakur",message:userMessage}));
        setUserMessage("");
    }}>
        <input className='border p-1 border-black rounded-lg w-[330px] ml-1' value={userMessage} placeholder='Sent a message' onChange={(e)=>setUserMessage(e.target.value)} type='text'/><button className='p-1 ml-1 rounded-lg bg-green-200'>Submit</button>
    </form>
    </div>
  )
}

export default LiveChat