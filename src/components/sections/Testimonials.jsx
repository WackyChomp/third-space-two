import React from 'react'
import TitleHeader from '../TitleHeader'
import { testimonials } from '../../../constants'

const Testimonials = () => {
  return (
    <section id='testimonials' className="flex_center section_padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title='What people are people thinking about me'
          sub='Word on the Steet'
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-12">
          {testimonials.map((testimonial) => (
            <div className="bg-red-500">

            <p>{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials