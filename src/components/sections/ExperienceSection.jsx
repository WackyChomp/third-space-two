import React from 'react'
import TitleHeader from '../TitleHeader'

const ExperienceSection = () => {
  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section_padding xl:px-0'>
      <div className="w-full h-full md:px-20 px-5">
        <h3 className='text-3xl font-semibold'>Professional Work Experience</h3>
        <p className='text-[20px]'>My Career Overview</p>

        <TitleHeader title='Professional Work Experience' sub='My Career Overview' />
      </div>
    </section>
  )
}

export default ExperienceSection