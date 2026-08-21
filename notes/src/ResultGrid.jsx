import React, { useEffect } from 'react'
import { fetchPhotos } from "../redux/MediaApi";
import { setActiveTabs,setError,setLoading,setQuery,setResults, } from "../redux/searchslices";
import { useDispatch,useSelector } from "react-redux";
import ResultCard from './ResultCard';

export default function ResultGrid() {
  const dispatch = useDispatch()
   const {query,activeTabs,loading,results,error}= useSelector((state)=>state.search)
  
    useEffect(function(){
      if(!query) return 
         const getData = async()=>{
            try {
              let data
              if (activeTabs=='photos') {
                 let response = await fetchPhotos(query)
                  data = response.results.map((item)=>({
                      id:item.id,
                      type:'photos',
                      title:item.alt_description,
                      tumbnail:item.urls.small,
                      src:item.urls.full,
                  }))
              }
              console.log(data);
              dispatch(setResults(data))
            } catch (err) {
              dispatch(setError(err.messege))
            }
         }
         getData()
    },[query,activeTabs])
    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading..</h1>
  return (
    <div className='flex w-full flex-wrap gap-3 overflow-auto justify-center'>
      {results.map((item,idx)=>{
        return <div key={idx}>
          <ResultCard item={item}/>
        </div>
      })}
    </div>
  )
}
