import React from 'react'
import HeroBanner from '../HOME/HeroBanner'
import Features_copy_1 from '../HOME/Features_copy_1'
import Features_copy_2 from '../HOME/Features_copy_2'
import Features_copy_3 from '../HOME/Features_copy_3'


function Home() {
  return (
    
    <div>
      <HeroBanner></HeroBanner>
      <div className='grid grid-cols-3'>
        <Features_copy_1></Features_copy_1>
        <Features_copy_2></Features_copy_2>
        <Features_copy_3></Features_copy_3>
      </div>
    </div>
  )
}

export default Home
