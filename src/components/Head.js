import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Utils/Constants';



const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  
  useEffect(()=>{
    
    const timer=setTimeout(()=>getSearchSuggesstions(),200);
    return ()=>{
      clearTimeout(timer);
    };
    //make an api call after every key press
    //but if the difference between 2 api calls is<200ms decline api call
  },[searchQuery]);
  /**
   * key -i
   *  -render the component
   *  -use effect
   *  -start timer => make api call after 200ms
   * 
   * key -ip
   * -rerenders the component
   * -use effect();
   * time for api call is different because rendering every time with new variable
   */
  const getSearchSuggesstions=async ()=>{
    console.log(searchQuery);
    const data=await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);
    /**
     * use state is used for triggerring reconcilliation process
     */
  }
  const dispatch=useDispatch();
  

  
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());

  };
  
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
      
        <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' alt='menu' src="https://tse3.mm.bing.net/th?id=OIP.3oWC_8moLxKDTYSSdd_ELAHaHa&pid=Api&P=0&h=180"/>
        <a href='/'>
          <img className='h-8 mx-2' alt='youtube-logo' src='https://tse4.mm.bing.net/th?id=OIP._IfEaUssjZQwZ1u92b1_GgHaEK&pid=Api&P=0&h=180' />
        </a>
      </div>
      <div className='col-span-10 px-10 '>
        <div>

          <input className='  px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200'>🔍</button>
      </div>
      <div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border-gray-100'>
        <ul>
        
          {suggestions.map(s=><li key={s} className=' py-2 px-3 shadow-sm hover:bg-gray-200'>🔍 {s}</li>)}
        


        </ul>

      </div>
    </div>
    
      <div className='col-span-1'>
        <img className='h-8' alt='usericon' src='https://tse3.mm.bing.net/th?id=OIP.mrfb_atnkblnmsDiAbLNKwHaHa&pid=Api&P=0&h=180'/>
      </div>
      
    </div>
  )
}

export default Head;