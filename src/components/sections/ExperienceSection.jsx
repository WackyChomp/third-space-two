import React from 'react'
import TitleHeader from '../TitleHeader'
import { experienceCards } from '../../../constants'

const ExperienceSection = () => {
  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section_padding xl:px-0'>
      <div className="w-full h-full md:px-20 px-5">
        <h3 className='text-3xl font-semibold'>Professional Work Experience</h3>
        <p className='text-[20px]'>My Career Overview</p>

        <TitleHeader title='Professional Work Experience' sub='My Career Overview' />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {experienceCards.map(({ review, title, date, accomplishments}) => (
              <div className="exp_card_wrapper">
                <div className="bg-blue-500 p-2">
                  <div className='bg-red-500'>{review}</div>
                  <div className='bg-orange-300'>{title}</div>
                  <div className='bg-green-300'>{date}</div>
                  <div className='bg-amber-300'>{accomplishments}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection