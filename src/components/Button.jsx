import React from 'react'

const Button = ({ text, className, id }) => {
  const arrowDownIconOne = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93bi1pY29uIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==`
  const arrowDownIconTwo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdmUtZG93bi1pY29uIGx1Y2lkZS1tb3ZlLWRvd24iPjxwYXRoIGQ9Ik04IDE4TDEyIDIyTDE2IDE4Ii8+PHBhdGggZD0iTTEyIDJWMjIiLz48L3N2Zz4=`

  return (
    <a className={`${className ?? ''} cta_wrapper`}>
      <div className="cta_button group">
        <div className="bg_circle"/>
        <p className="text">{text}</p>
        <div className="arrow_wrapper">
          <img src={arrowDownIconOne} alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button