import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/searchslices";

export default function Searchbar() {
  const [text,setText]=useState('')
  const dispatch = useDispatch()

  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex bg-gray-700 p-10 gap-15 w-full ' action="">
        <input className='w-full p-2 border border-amber-50'
        value={text}
        onChange={(e)=>{
          setText(e.target.value);
          
        }}
        type="text"
        required
        placeholder='Search Here' />
        <button className='active:scale-95 p-2 ml-2 bg-black text-white font-medium'>Search</button>
      </form>
    </div>
  )
}
