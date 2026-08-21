import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { setActiveTabs } from '../redux/searchslices';

export default function Tabs() {
    const Tabs = ['Photos','Videos']
    const dispatch = useDispatch()
    const activeTabs = useSelector((state)=>state.search.activeTabs)
  return (
   <div className='flex gap-5 p-10 '>
    {Tabs.map(function(elem,index){
    return <button key={index} 
    className={`${(activeTabs && activeTabs.toLowerCase() === elem.toLowerCase() ? 'bg-blue-500' : 'bg-gray-700')} rounded text-white p-3`} 
    onClick={()=>{
    dispatch(setActiveTabs(elem))
    }}>{elem}</button>
   })}
   </div>
  )
}
