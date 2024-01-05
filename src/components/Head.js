import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_VIDEO } from '../utils/constants';
import { addCache } from '../utils/searchSlice';
import { Link } from 'react-router-dom';
import { addVideo } from '../utils/videoSlice';
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
    const handleClick =async (j,e)=>{
    setSearchKey(e);
  //  j.stopPropagation();
    const data = await fetch(YOUTUBE_SEARCH_VIDEO+e+"&key="+GOOGLE_API_KEY);
    const json = await data.json();
    setShowSuggestion(false);
    dispatch(addVideo(json.items));
    
    }
    
  return (
    <div className='grid grid-flow-col shadow-lg w-[100%]'>
        <div className='col-span-1 flex h-20 '>
            <img className='w-12 py-7 px-3 cursor-pointer' onClick={toggle} alt='icon' src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"/>
           <Link to={'/'}><img className='w-32 py-2' alt='youtube icon' src='https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg'/></Link>
           </div>
        <div className='col-span-10 mt-6 text-center px-2'  >
            <div >
            <input type='text'  placeholder='Search' onFocus={()=>setShowSuggestion(true)} onChange={(e)=>setSearchKey(e.target.value)} className='w-1/2 border border-solid p-2 rounded-l-full' value={searchKey}/>
            <button className='py-2 px-4 border border-solid rounded-r-full bg-gray-100'>🔍</button>
            </div>
            <div className='absolute shadow-lg bg-white w-[27rem] ml-[195px] rounded-lg mt-1 font-semibold'>
            <ul >
               {showSuggestion && suggestion.map((e)=><li className='p-2 text-left cursor-pointer hover:bg-gray-200' key={e} onClick={(j)=>handleClick(j,e)}><Link to={'searchVideo'}>🔍  {e}</Link></li>)} 
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