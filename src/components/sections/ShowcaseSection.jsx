import React from 'react'

const ShowcaseSection = () => {
  const imgOne = `https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif`

  return (
    <div id='work' className='showcase_work'>
      <div className="w-full">
        <div className='showcase_layout'>
        {/* Left side */}
        <div className="showcase_wrapper_one">
          <div className="showcase_image_wrapper_one">
            <img src={imgOne} alt="left-img-here" 
              className=''
            />
          </div>
          <div className="showcase_text_content">
            <h2>This is what you came for!</h2>
            <p className='text-blue-400 md:text-xl'>
              Why else would you be here? There are so many other places where you 
              could be and dedicate your time towards but you're here
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="showcase_list_wrapper overflow-hidden">
          <div className="project">
            <div className="showcase_list_image_wrapper">
              <img src={imgOne} alt="project list item # 1" 
            />
            </div>
            <h2>Project #1</h2>
          </div>
          <div className="project">
            <div className="showcase_list_image_wrapper">
              <img src={imgOne} alt="project list item # 1" 
            />
            </div>
            <h2>Project #2</h2>
          </div>
          <div className="project">
            <div className="showcase_list_image_wrapper">
              <img src={imgOne} alt="project list item # 1" 
            />
            </div>
            <h2>Project #3</h2>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection