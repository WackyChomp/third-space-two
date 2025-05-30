import React from 'react'
import TitleHeader from '../TitleHeader'
import { testimonials } from '../../../constants'
import GlowCard from '../GlowCard'

const Testimonials = () => {
  return (
    <section id='testimonials' className="flex_center section_padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title='What people are people thinking about me'
          sub='Word on the Steet'
        />

        <div className="bg-blue-950 lg:columns-3 md:columns-2 columns-1 mt-5">
          {testimonials.map(({ imgPath, mentions, name, review }) => (
            <GlowCard card={{review}}>
              <div className="flex items-center gap-5">
                <div>
                  <img src={imgPath} alt={name} className='size-30 rounded-4xl' />
                </div>
                <div>
                  <p className='text-yellow-500 font-bold'>{name}</p>
                  <p className='text-green-500'>{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials