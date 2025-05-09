import React from 'react'
import { counterItems } from '../../constants'
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div className='bg-blue-500 padding_x_lg xl:mt-0 mt-32'>
      <div className="mx-auto grid_4_cols">
        {counterItems.map((item) => (
          <div className="bg-red-900 rounded-lg p-8 flex flex-col justify-center">
            <div key={counterItems.label} className="text-white text-3xl font-bold mb-5">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-blue-500 text-[20px] capitalize">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter