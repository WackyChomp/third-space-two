import React from 'react'
import TitleHeader from '../TitleHeader'
import { useState } from 'react'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ... formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', message: ''});
  }


  return (
    <section id='contact' className='flex_center section_padding'>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title='Contact'
          sub='Say my name <(o_o)>'
        />
          <p className='text-center'>
            Reach out for platinum service, questions, or be on my radar
          </p>
          <p className='text-center mt-4'>
            Email: example72@gmail.com
          </p>

        {/* Left Side */}
        <div className="mt-16 grid-12-cols">
          <div className="border-2 border-blue-500 xl-col-span-5">
            <div className="flex_center card_border rounded-2xl p-10">


              <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7'>
                <div className="">
                  <label htmlFor="name">Name</label>
                  <input type="text" 
                    id='name'
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="">
                  <label htmlFor="email">Email</label>
                  <input type="text" 
                    id='email'
                    name='email'
                    placeholder='Your Email'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="">
                  <label htmlFor="name">Message</label>
                  <textarea
                    id='message'
                    name='message'
                    rows='5'
                    placeholder='Your Message'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <button type='submit'>
                  Send It!
                </button>
                
              </form>
            </div>

          </div>

        </div>


        {/* Right Side */}
        <div className="border-2 border-green-500 xl:col-span-7 min-h-96">

        </div>
        
      </div>
    </section>
  )
}

export default Contacts