import React from 'react'

const ShowcaseSection = () => {
  const imgOne = `https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif`

  return (
    <div id='work'>
      <div className="w-full">
        <div>
        {/* Left side */}
        <div className="">
          <div className="">
            <img src={imgOne} alt="left-img-here" />
          </div>
          <div className="">
            <h2>This is what you came for!</h2>
            <p>Why else would you be here? There are so many other places where you could be and dedicate your time towards but you're here</p>
          </div>
        </div>

        {/* Right side */}
        <div className="">
          <div className="">
            <img src="" alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection