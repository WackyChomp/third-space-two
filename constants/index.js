
const words = [
  { text: 'Area', imgPath: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhbmQtcGxvdC1pY29uIGx1Y2lkZS1sYW5kLXBsb3QiPjxwYXRoIGQ9Im0xMiA4IDYtMy02LTN2MTAiLz48cGF0aCBkPSJtOCAxMS45OS01LjUgMy4xNGExIDEgMCAwIDAgMCAxLjc0bDguNSA0Ljg2YTIgMiAwIDAgMCAyIDBsOC41LTQuODZhMSAxIDAgMCAwIDAtMS43NEwxNiAxMiIvPjxwYXRoIGQ9Im02LjQ5IDEyLjg1IDExLjAyIDYuMyIvPjxwYXRoIGQ9Ik0xNy41MSAxMi44NSA2LjUgMTkuMTUiLz48L3N2Zz4=` },
  { text: 'Environment', imgPath: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRlbnQtdHJlZS1pY29uIGx1Y2lkZS10ZW50LXRyZWUiPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PHBhdGggZD0ibTE0IDUgMy0zIDMgMyIvPjxwYXRoIGQ9Im0xNCAxMCAzLTMgMyAzIi8+PHBhdGggZD0iTTE3IDE0VjIiLz48cGF0aCBkPSJNMTcgMTRIN2wtNSA4aDIwWiIvPjxwYXRoIGQ9Ik04IDE0djgiLz48cGF0aCBkPSJtOSAxNCA1IDgiLz48L3N2Zz4=` },
  { text: 'Location', imgPath: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvY2F0ZS1maXhlZC1pY29uIGx1Y2lkZS1sb2NhdGUtZml4ZWQiPjxsaW5lIHgxPSIyIiB4Mj0iNSIgeTE9IjEyIiB5Mj0iMTIiLz48bGluZSB4MT0iMTkiIHgyPSIyMiIgeTE9IjEyIiB5Mj0iMTIiLz48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSI1Ii8+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSIxOSIgeTI9IjIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48L3N2Zz4=` },
  { text: 'Place', imgPath: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlLWljb24gbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PC9zdmc+` },
  { text: 'Space', imgPath: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJvY2tldC1pY29uIGx1Y2lkZS1yb2NrZXQiPjxwYXRoIGQ9Ik00LjUgMTYuNWMtMS41IDEuMjYtMiA1LTIgNXMzLjc0LS41IDUtMmMuNzEtLjg0LjctMi4xMy0uMDktMi45MWEyLjE4IDIuMTggMCAwIDAtMi45MS0uMDl6Ii8+PHBhdGggZD0ibTEyIDE1LTMtM2EyMiAyMiAwIDAgMSAyLTMuOTVBMTIuODggMTIuODggMCAwIDEgMjIgMmMwIDIuNzItLjc4IDcuNS02IDExYTIyLjM1IDIyLjM1IDAgMCAxLTQgMnoiLz48cGF0aCBkPSJNOSAxMkg0cy41NS0zLjAzIDItNGMxLjYyLTEuMDggNSAwIDUgMCIvPjxwYXRoIGQ9Ik0xMiAxNXY1czMuMDMtLjU1IDQtMmMxLjA4LTEuNjIgMC01IDAtNSIvPjwvc3ZnPg==` },
]

const counterItems = [
  { value: 1.5, suffix: "+", label: "Decades being online" },
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 50, suffix: "+", label: "Satisfied clients" },
  { value: 70, suffix: "+", label: "Completed projects" },
  { value: 120000, suffix: "+ hours", label: "Media consumption" },
  { value: 2, suffix: "% :P", label: "Client retention rate" },
  { value: 1000000000000, suffix: "%", label: "Big number goes brrrr" },
  { value: 100, suffix: "%", label: "You remember my name" },
];

const navLinks = [
  {
    name: "Project",
    link: "#project",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Test 1",
    link: "#test1",
  },
  {
    name: "Test 2",
    link: "#test2",
  },
  /*
  {
    name: "",
    link: "",
  } 
  */
];

const logoIconsList = [
  {
    imgPath: `https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg`,
    imgPath: `https://www.svgrepo.com/show/303108/google-icon-logo.svg`,
    imgPath: `https://www.svgrepo.com/show/303110/apple-black-logo.svg`,
    imgPath: `https://www.svgrepo.com/show/303115/twitter-3-logo.svg`,
    imgPath: `https://www.svgrepo.com/show/303121/forbes-logo.svg`,
    imgPath: `https://www.svgrepo.com/show/303143/microsoft-logo.svg`,
    imgPath: `https://www.svgrepo.com/show/303135/soundcloud-logo.svg`,
    imgPath: `https://img.icons8.com/ios-filled/100/google.png`,
    imgPath: `https://img.icons8.com/ios-filled/100/facebook.png`,
    imgPath: `https://img.icons8.com/ios-filled/100/amazon.png`,
    // imgPath: ``,
  }
]

export{ words, counterItems, navLinks, logoIconsList }