import React from 'react'
import { counterItems } from '../../constants'

const AnimatedCounter = () => {
  return (
    <div className='xl:mt-0 mt-32'>
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-red-900 rounded-lg p-10 flex flex-col justify-center">
            <div key={counterItems.label} className="text-white text-5xl font-bold mb-2">
              {item.value} {item.suffix}
            </div>
            <div className="text-blue-500 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter