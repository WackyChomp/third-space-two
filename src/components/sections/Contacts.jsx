import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import TitleHeader from '../TitleHeader'
import { useState } from 'react'
import ContactExperience from '../Models/contact/ContactExperience'

const Contacts = () => {
  const downIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdmUtZG93bi1pY29uIGx1Y2lkZS1tb3ZlLWRvd24iPjxwYXRoIGQ9Ik04IDE4TDEyIDIyTDE2IDE4Ii8+PHBhdGggZD0iTTEyIDJWMjIiLz48L3N2Zz4=`

  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ... formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        formRef.current,
      )
      setFormData({ name: '', email: '', message: ''});
    } catch (error) {
      console.log('EMAILJS ERROR', error);
    } finally{
      setLoading(false)
    }
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


              <form onSubmit={handleSubmit} ref={formRef} className='w-full flex flex-col gap-7'>
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
                    value={formData.email}
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
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type='submit' disabled={loading}>
                  <div className="cta_button group">
                    <div className="bg_circle" />
                    <p className='text'>{loading ? 'Sending . .. ...': 'Sent It!'}</p>
                    <div className="arrow_wrapper">
                      <img src={downIcon} alt="down-icon" className='animate-bounce' />
                    </div>
                  </div>
                </button>
                
              </form>
            </div>

          </div>

        </div>


        {/* Right Side */}
        <div className="border-2 border-green-500 bg-blue-950 xl:col-span-7 min-h-96">
          <div className="w-full h-full bg-blue-500 rounded-3xl overflow-hidden">

          <ContactExperience />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contacts