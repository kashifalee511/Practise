import React from 'react'
import { fetchPhotos } from "../redux/MediaApi";

export default function App() {
 
  return (
    <div>
      <button className='bg-white rounded p-3 m-5 text-black' onClick={async()=>{
       const data = await fetchPhotos('cat')
       console.log(data.results);
       
      }}>Get Photos</button>
    </div>
  )
}
