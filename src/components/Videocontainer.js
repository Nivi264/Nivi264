import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Utils/Constants';
import Videocard from './Videocard';

import { Link } from 'react-router-dom';


const Videocontainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos=async ()=>{
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json=await data.json();
    console.log(json.items);
    setVideos(json.items);
  }
   
  
  return (
    <div className='flex flex-wrap'>{videos.map((video)=>(<Link to={"/watch?v="+video.id}><Videocard key={video.id} info={video}/></Link>))}</div>
  )
}

export default Videocontainer;