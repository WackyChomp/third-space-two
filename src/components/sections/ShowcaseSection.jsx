import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const imgOne = `https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif`

  const sectionRef = useRef(null);
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);
  const projectRef4 = useRef(null);
  
  useGSAP(() => {
  const projects = [projectRef1.current, projectRef2.current, projectRef3.current, projectRef4.current]

  projects.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 50, opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2 * (index + 1),
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
        }
      }
    )
  })

    gsap.fromTo(sectionRef.current, 
    { opacity: 0},
    { opacity: 1, duration: 1.5 },
  )
  }, []);

  return (

    <section id='work' ref={sectionRef} className='showcase_work'>
      <div className="w-full">
        <div className='showcase_layout'>
        {/* Left side */}
        <div className="showcase_wrapper_one" ref={projectRef1}>
          <div className="showcase_image_wrapper_one">
            <img src={imgOne} alt="left-img-here" 
              className=''
            />
          </div>
          <div className="showcase_text_content">
            <h2>This is what you came for!</h2>
            <p className='text-yellow-400 md:text-xl'>
              Why else would you be here? There are so many other places where you 
              could be and dedicate your time towards but you're here
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="showcase_list_wrapper overflow-hidden">
          <div className="project" ref={projectRef2}>
            <div className="showcase_list_image_wrapper">
              <img src={imgOne} alt="project list item # 1" 
            />
            </div>
            <h2>Project #1 - Great Goliath Grouper</h2>
          </div>
          <div className="project" ref={projectRef3}>
            <div className="showcase_list_image_wrapper">
              <img src={imgOne} alt="project list item # 1" 
            />
            </div>
            <h2>Project #2 - Searing Volcanic Integration</h2>
          </div>
          <div className="project" ref={projectRef4}>
            <div className="showcase_list_image_wrapper">
              <img src={imgOne} alt="project list item # 1" 
            />
            </div>
            <h2>Project #3 - Acoustic Single String Guitar</h2>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection