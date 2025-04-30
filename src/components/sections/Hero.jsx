import React from 'react'
import { words } from '../../../constants'
import Button from '../Button'

import HeroExperience from '../HeroModels/HeroExperience'

import triangle from '/public/layered_triangle.svg'     // import name is a made-up alias

const Hero = () => {
  const bgOne = `https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?semt=ais_hybrid&w=740`

  return (
    <section id='hero' className='bg-red-950 relative overflow-hidden'>

      <div className="pry_gradient absolute top-0 left-0 z-10">
        <img src={triangle} alt="random background" className='rotate-x-180'/>
        <img src={bgOne} alt="random background" className='h-[400px]'/>
      </div>

      <div className="hero_layout">
        {/* LEFT SIDE: content */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className="flex flex-col gap-7">
            <div className="hero_text">
              <h1>Let this
                <span className='hero_text_slide slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span key={word.text} className='bg-red-500 flex items-center md:gap-2 gap-1 pb-2'>
                        <img src={word.imgPath} alt={word.text} 
                          className='bg-yellow-500 xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full'
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Become your</h1>
              <h1>Sanctuary</h1>
            </div>

            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Greetings, I am Walter, a fearsome leader from the depths of the abyss
            </p>

            <Button
              id='button'
              className='md:w-80 md:h-16 w-60 h-12'
              text='See my work'
            />
          </div>
        </header>

        {/* RIGHT SIDE: 3d model  */}
          <figure>
            <div className="hero_3d_layout border-blue-300 border-2">
              <HeroExperience />
            </div>
          </figure>

      </div>
    </section>
  )
}

export default Hero