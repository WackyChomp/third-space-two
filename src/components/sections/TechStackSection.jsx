import React from 'react'
import TechIcons from '../Models/TechLogos/TechIcons'
import { techStackIcons } from '../../../constants'
import TitleHeader from '../TitleHeader'

const TechStackSection = () => {
  return (
    <div id='skills' className='flex-center section_padding'>
      <div>
        <TitleHeader className='capitalize w-full h-full md:px-10 px-5'
          title='My arsenal' 
          sub='The skills that pay the bills for my kitchen grillz'
        />

        <div className="tech_grid">
          {techStackIcons.map((icon) => (
            <div 
              key={icon.name} 
              className="card_border tech_card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech_card_animated_bg" />
              <div className="tech_icon_wrapper">
                <TechIcons model={icon} />
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