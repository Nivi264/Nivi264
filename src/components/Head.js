import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
        <img className='h-8' alt='menu' src="https://tse3.mm.bing.net/th?id=OIP.3oWC_8moLxKDTYSSdd_ELAHaHa&pid=Api&P=0&h=180"/>
        <img className='h-8 mx-2' alt='youtube-logo' src='https://tse4.mm.bing.net/th?id=OIP._IfEaUssjZQwZ1u92b1_GgHaEK&pid=Api&P=0&h=180' />
      </div>
      <div className='col-span-10 px-10 '>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt='usericon' src='https://tse3.mm.bing.net/th?id=OIP.mrfb_atnkblnmsDiAbLNKwHaHa&pid=Api&P=0&h=180'/>
      </div>
      
    </div>
  )
}

export default Head;