import React, { useEffect } from 'react'
import { fetchPhotos } from "../redux/MediaApi";
import { setActiveTabs,setError,setLoading,setQuery,setResults } from "../redux/searchslices";
import { useDispatch,useSelector } from "react-redux";

export default function ResultGrid() {
   const {query,activeTabs,loading,result,error}= useSelector((state)=>state.search)
    const getData = ()=>{
        
    }
    
  return (
    <div>
      
    </div>
  )
}
