import React from 'react'

const Hero = () => {
  const bgOne = `https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?semt=ais_hybrid&w=740`

  const rocket = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJvY2tldC1pY29uIGx1Y2lkZS1yb2NrZXQiPjxwYXRoIGQ9Ik00LjUgMTYuNWMtMS41IDEuMjYtMiA1LTIgNXMzLjc0LS41IDUtMmMuNzEtLjg0LjctMi4xMy0uMDktMi45MWEyLjE4IDIuMTggMCAwIDAtMi45MS0uMDl6Ii8+PHBhdGggZD0ibTEyIDE1LTMtM2EyMiAyMiAwIDAgMSAyLTMuOTVBMTIuODggMTIuODggMCAwIDEgMjIgMmMwIDIuNzItLjc4IDcuNS02IDExYTIyLjM1IDIyLjM1IDAgMCAxLTQgMnoiLz48cGF0aCBkPSJNOSAxMkg0cy41NS0zLjAzIDItNGMxLjYyLTEuMDggNSAwIDUgMCIvPjxwYXRoIGQ9Ik0xMiAxNXY1czMuMDMtLjU1IDQtMmMxLjA4LTEuNjIgMC01IDAtNSIvPjwvc3ZnPg==`
  const tent = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRlbnQtdHJlZS1pY29uIGx1Y2lkZS10ZW50LXRyZWUiPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PHBhdGggZD0ibTE0IDUgMy0zIDMgMyIvPjxwYXRoIGQ9Im0xNCAxMCAzLTMgMyAzIi8+PHBhdGggZD0iTTE3IDE0VjIiLz48cGF0aCBkPSJNMTcgMTRIN2wtNSA4aDIwWiIvPjxwYXRoIGQ9Ik04IDE0djgiLz48cGF0aCBkPSJtOSAxNCA1IDgiLz48L3N2Zz4=`
  const house = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlLWljb24gbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PC9zdmc+`
  const location = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvY2F0ZS1maXhlZC1pY29uIGx1Y2lkZS1sb2NhdGUtZml4ZWQiPjxsaW5lIHgxPSIyIiB4Mj0iNSIgeTE9IjEyIiB5Mj0iMTIiLz48bGluZSB4MT0iMTkiIHgyPSIyMiIgeTE9IjEyIiB5Mj0iMTIiLz48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSI1Ii8+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSIxOSIgeTI9IjIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48L3N2Zz4=`
  const land = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhbmQtcGxvdC1pY29uIGx1Y2lkZS1sYW5kLXBsb3QiPjxwYXRoIGQ9Im0xMiA4IDYtMy02LTN2MTAiLz48cGF0aCBkPSJtOCAxMS45OS01LjUgMy4xNGExIDEgMCAwIDAgMCAxLjc0bDguNSA0Ljg2YTIgMiAwIDAgMCAyIDBsOC41LTQuODZhMSAxIDAgMCAwIDAtMS43NEwxNiAxMiIvPjxwYXRoIGQ9Im02LjQ5IDEyLjg1IDExLjAyIDYuMyIvPjxwYXRoIGQ9Ik0xNy41MSAxMi44NSA2LjUgMTkuMTUiLz48L3N2Zz4=`

  const words = [
    { text: 'Area', imgPath: {land} },
    { text: 'Environment', imgPath: {tent} },
    { text: 'Location', imgPath: {location} },
    { text: 'Place', imgPath: {house} },
    { text: 'Space', imgPath: {rocket} },
  ]

  return (
    <section id='hero' className='bg-red-950 relative overflow-hidden'>

      <div className="pry_gradient absolute top-0 left-0 z-10">
        <img src={bgOne} alt="random background" />
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
                      <span key={word.text} className='flex items-center md:gap-4 gap-1 pb-2'>
                        <img src={word.imgPath} alt={word.text} 
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
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
          </div>
        </header>
        
      </div>
    </section>
  )
}

export default Hero