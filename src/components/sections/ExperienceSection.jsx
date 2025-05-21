import React from 'react'
import TitleHeader from '../TitleHeader'
import { experienceCards } from '../../../constants'
import GlowCard from '../GlowCard'

const ExperienceSection = () => {
  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section_padding xl:px-0'>
      <div className="w-full h-full md:px-20 px-5">
        <h3 className='text-3xl font-semibold'>Professional Work Experience</h3>
        <p className='text-[20px]'>My Career Overview</p>

        <TitleHeader title='Professional Work Experience' sub='My Career Overview' />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {experienceCards.map((card, index) => (
              <div className="exp_card_wrapper">

                {/* Left side: experience */}
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>

                {/* Right side: Timeline */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline_wrapper">
                      <div className='timeline'/>
                      <div className='w-1 h-full'/>
                    </div>

                    <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline_logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className='font-semibold text-3xl'>{card.title}</h1>
                        <p className="my-5 text-blue-900">{card.date}</p>

                        <p className='italic'>Accomplishments</p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-pink-800'>
                          {card.accomplishments.map((accomplishment) => (
                            <li key={accomplishment} className='text-lg'>
                              {accomplishment}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                  </div>

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