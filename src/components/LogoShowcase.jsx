import React from 'react'
import { logoIconsList } from '../../constants'

const LogoIcon = ({ icon }) => {
  return(
    <div className="flex-none flex-center marquee_item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  )
}

const LogoShowcase = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className="gradient_edge" />
      <div className="gradient_edge" />

      <div className="marquee h-52">
        <div className="marquee_box md:gap-14 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoShowcase