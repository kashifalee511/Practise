import React from 'react'

export default function ResultCard({item}) {
  return (
    <div className='w-60 h-60 rounded bg-white'>
        <div className='h-full'>
            {item.type == 'photos'?<img className='w-full h-full object-cover object-center' src={item.src} alt={item.title} />:''}
        </div>
      
    </div>
  )
}
