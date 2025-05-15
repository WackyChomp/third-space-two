import React from 'react'
import { services } from '../../../constants/index.js'

const ServiceCards = () => {
  return (
    <div className='w-full padding_x_lg'>
      <div className="mx-auto grid-3-col">
        {services}
      </div>
    </div>
  )
}

export default ServiceCards