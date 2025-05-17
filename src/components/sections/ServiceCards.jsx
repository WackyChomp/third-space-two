import React from 'react'
import { services } from '../../../constants/index.js'

const ServiceCards = () => {
  return (
    <div className='w-full padding_x_lg'>
      <div className="mx-auto grid-3-cols">
        {services.map(({ imgPath, title, desc }) => (
          <div key={title} className="card_border rounded-xl p-8 flex flex-col gap-4">
            <div className="size-16 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} className='bg-amber-600 rounded-lg p-3 size-16' />
            </div>
            <h3 className='text-green-600 text-2xl font-semibold mt-2 '>{title}</h3>
            <p className='text-pink-600 text-lg'>{desc}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default ServiceCards