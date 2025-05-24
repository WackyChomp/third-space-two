import React from 'react'
import TechIcons from '../Models/TechLogos/TechIcons'

const TechStackSection = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
      <div>
        <TitleHeader className='capitalize w-full h-full md:px-10 px-5'
          title='My arsenal' 
          sub='The skills that pay the bills for my kitchen grillz'
        />

        <div className="">
          {techStackIcons.map((icon) => (
            <div 
              key={icon.name} 
              className="card_border overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="">
                <TechIcon model={icon} />
              </div>

              <div className="padding_x w-full">
                <p>{icon.name}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStackSection