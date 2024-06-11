import React from 'react'
import Button from './Button'


const Buttonlist = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Romance"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Food"/>
    </div>
  )
}

export default Buttonlist