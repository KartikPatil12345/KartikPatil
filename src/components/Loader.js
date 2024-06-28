import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
      <div className="flex gap-3 text-3xl size-4xl sm:text-2xl font-semibold">
            <h1 className='text-secondary K'>Kartik</h1>
            <h1 className='text-white P'>Patil</h1>
            <h1 className='text-tetiary W'>World</h1>
      </div>
    </div>
  )
}

export default Loader
