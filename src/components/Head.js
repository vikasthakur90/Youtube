import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { addCache } from '../utils/searchSlice';
function Head() {
    const dispatch = useDispatch();
    const [searchKey,setSearchKey] = useState("");
    const [suggestion,setSuggestion] = useState([]);
    const [showSuggestion,setShowSuggestion] = useState(false);
    const toggle = () =>{
        dispatch(toggleMenu());
    }
    const cache = useSelector((store)=>store.search)
    useEffect(()=>{
       const timer = setTimeout(() => {
        if(cache[searchKey])
        {
            setSuggestion(cache[searchKey]);
        }
        else{
            searchSuggestion();
        }
        },200);
       return () => {
        clearTimeout(timer);
    }
       },[searchKey]);

    const searchSuggestion = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchKey);
        const json = await data.json();
        setSuggestion(json[1]);
        dispatch(addCache({
            [searchKey]:json[1]
        }));
    }
  return (
    <div className='grid grid-flow-col shadow-lg'>
        <div className='col-span-1 flex h-20'>
            <img className='w-12 py-7 px-3 cursor-pointer' onClick={toggle} alt='icon' src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"/>
            <img className='w-32 ' alt='youtube icon' src='https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg'/>
        </div>
        <div className='col-span-10 mt-6 text-center px-2'>
            <div>
            <input type='text' onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)} placeholder='Search' onChange={(e)=>setSearchKey(e.target.value)} className='w-1/2 border border-solid p-2 rounded-l-full' />
            <button className='py-2 px-4 border border-solid rounded-r-full bg-gray-100'>🔍</button>
            </div>
            <div className='absolute shadow-lg bg-white w-[27rem] ml-[195px] rounded-lg mt-1 font-semibold'>
            <ul >
               {showSuggestion && suggestion.map((e)=><li key={e} className='p-2 text-left hover:bg-gray-200'>🔍  {e}</li>)} 
            </ul>
            </div>
        </div>
        <div className='col-span-1 mt-6 h-16'>
            <img className='w-10 p-2' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>

        </div>
    </div>
  )
}

export default Head