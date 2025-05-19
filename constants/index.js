
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
    imgPath: `https://www.svgrepo.com/show/303135/soundcloud-logo.svg`,
    imgPath: `https://img.icons8.com/ios-filled/100/google.png`,
    imgPath: `https://img.icons8.com/ios-filled/100/facebook.png`,
    imgPath: `https://img.icons8.com/ios-filled/100/amazon.png`,
    imgPath: '../layered_triangle.svg',
    imgPath: '../vite.svg',
    imgPath: `https://www.svgrepo.com/show/303143/microsoft-logo.svg`,
    // imgPath: ``,
  }
]

const services = [
  {
    imgPath: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZS1pY29uIGx1Y2lkZS1leWUiPjxwYXRoIGQ9Ik0yLjA2MiAxMi4zNDhhMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSAxOS44NzYgMCAxIDEgMCAwIDEgMCAuNjk2IDEwLjc1IDEwLjc1IDAgMCAxLTE5Ljg3NiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg==',
    title: "Quality Focus",
    desc: "Scrutinize anomalies and clarity ambiguity to deliver high-quality results",
  },
  {
    imgPath: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFudmlsLWljb24gbHVjaWRlLWFudmlsIj48cGF0aCBkPSJNNyAxMEg2YTQgNCAwIDAgMS00LTQgMSAxIDAgMCAxIDEtMWg0Ii8+PHBhdGggZD0iTTcgNWExIDEgMCAwIDEgMS0xaDEzYTEgMSAwIDAgMSAxIDEgNyA3IDAgMCAxLTcgN0g4YTEgMSAwIDAgMS0xLTF6Ii8+PHBhdGggZD0iTTkgMTJ2NSIvPjxwYXRoIGQ9Ik0xNSAxMnY1Ii8+PHBhdGggZD0iTTUgMjBhMyAzIDAgMCAxIDMtM2g4YTMgMyAwIDAgMSAzIDMgMSAxIDAgMCAxLTEgMUg2YTEgMSAwIDAgMS0xLTEiLz48L3N2Zz4=',
    title: "Forging Bonds",
    desc: "Cultivate powerful relationships through integrity and reciprocity",
  },
  {
    imgPath: 'https://www.svgrepo.com/show/404161/speaking-head.svg',
    title: 'Platinum Communication',
    desc: 'Sensitive to little details and deliver concise information with empathy',
  },
  {
    imgPath: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvY2stb3Blbi1pY29uIGx1Y2lkZS1sb2NrLW9wZW4iPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgeD0iMyIgeT0iMTEiIHJ4PSIyIiByeT0iMiIvPjxwYXRoIGQ9Ik03IDExVjdhNSA1IDAgMCAxIDkuOS0xIi8+PC9zdmc+',
    title: 'Locking In',
    desc: 'Deadline on the horizon takes priority and requires special attention',
  },
  {
    imgPath: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhc3RsZS1pY29uIGx1Y2lkZS1jYXN0bGUiPjxwYXRoIGQ9Ik0yMiAyMHYtOUgydjlhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0yWiIvPjxwYXRoIGQ9Ik0xOCAxMVY0SDZ2NyIvPjxwYXRoIGQ9Ik0xNSAyMnYtNGEzIDMgMCAwIDAtMy0zYTMgMyAwIDAgMC0zIDN2NCIvPjxwYXRoIGQ9Ik0yMiAxMVY5Ii8+PHBhdGggZD0iTTIgMTFWOSIvPjxwYXRoIGQ9Ik02IDRWMiIvPjxwYXRoIGQ9Ik0xOCA0VjIiLz48cGF0aCBkPSJNMTAgNFYyIi8+PHBhdGggZD0iTTE0IDRWMiIvPjwvc3ZnPg==',
    title: 'Reliability',
    desc: 'Adapt to uncertainty anytime/anywhere to deliver the latest information',
  },
  {
    imgPath: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJpY2Vwcy1mbGV4ZWQtaWNvbiBsdWNpZGUtYmljZXBzLWZsZXhlZCI+PHBhdGggZD0iTTEyLjQwOSAxMy4wMTdBNSA1IDAgMCAxIDIyIDE1YzAgMy44NjYtNCA3LTkgNy00LjA3NyAwLTguMTUzLS44Mi0xMC4zNzEtMi40NjItLjQyNi0uMzE2LS42MzEtLjgzMi0uNjItMS4zNjJDMi4xMTggMTIuNzIzIDIuNjI3IDIgMTAgMmEzIDMgMCAwIDEgMyAzIDIgMiAwIDAgMS0yIDJjLTEuMTA1IDAtMS42NC0uNDQ0LTItMSIvPjxwYXRoIGQ9Ik0xNSAxNGE1IDUgMCAwIDAtNy41ODQgMiIvPjxwYXRoIGQ9Ik05Ljk2NCA2LjgyNUM4LjAxOSA3Ljk3NyA5LjUgMTMgOCAxNSIvPjwvc3ZnPg==',
    title: 'Resilience',
    desc: 'You will get your services/deliverables no matter the obstacles/circumstances',
  },
  // {
  //   imgPath: '',
  //   title: '',
  //   desc: '',
  // },
]

const experienceCards = [
  {
  review: "Experienced data analyst with a strong background in transforming raw data into actionable insights to drive business decisions.",
  imgPath: "https://jessup.edu/wp-content/uploads/2024/01/Is-Data-Analyst-a-Stressful-Job.jpg",
  logoPath: "",
  title: "Data Analyst",
  date: "02/2025 - Present",
  accomplishments: [
    "Developed and maintained dashboards to visualize key performance indicators, improving data accessibility for stakeholders.",
    "Conducted in-depth analysis of large datasets to identify trends and opportunities, contributing to strategic business decisions.",
    "Collaborated with cross-functional teams to optimize data collection processes and enhance reporting accuracy."
  ]
  },
  {
    review: "Experienced software engineer skilled in designing, developing, and optimizing scalable applications using modern programming languages and frameworks.",
    imgPath: "https://online.maryville.edu/wp-content/uploads/sites/97/2020/07/software-developer-coding.jpg",
    logoPath: "",
    title: "Software Engineer",
    date: "04/2024 - 12/2024",
    accomplishments: [
      "Led development of a high-performance web application, improving system efficiency by 30%.",
      "Implemented automated testing pipelines, reducing deployment errors and increasing reliability.",
      "Collaborated with cross-functional teams to build user-centric software solutions tailored to business needs."
    ]
  },
  {
    review: "Detail-oriented QA professional with expertise in manual and automated testing, ensuring software quality and optimal user experience.",
    imgPath: "https://www.asrintl.com/wp-content/uploads/2018/03/qualityassurance.jpg",
    logoPath: "",
    title: "QA Engineer",
    date: "08/2023 - 02/2024",
    accomplishments: [
      "Developed comprehensive test plans and executed manual testing to identify and resolve critical defects.",
      "Designed automated test scripts, reducing regression testing time by 40%.",
      "Worked closely with developers to enhance software stability and optimize performance through rigorous validation."
    ]
  },
  {
    review: "Creative and user-focused UX/UI designer passionate about crafting seamless and intuitive digital experiences through research-driven design.",
    imgPath: "https://miro.medium.com/v2/resize:fit:1400/0*jww-07rUpl41S5yB",
    logoPath: "",
    title: "UX/UI Designer",
    date: "01/2020 - 06/2023",
    accomplishments: [
      "Designed wireframes and prototypes that enhanced user engagement, increasing conversion rates by 25%.",
      "Conducted usability testing and gathered feedback to refine UI components for better accessibility.",
      "Collaborated with developers to translate design concepts into functional and visually appealing interfaces."
    ]
  },
  // {
  //   review: '',
  //   imgPath: '',
  //   logoPath: '',
  //   title: '',
  //   date: '',
  //   accomplishments: [
  //     '',
  //     '',
  //     '',
  //   ]
  // },
]

export{ words, counterItems, navLinks, logoIconsList, services, experienceCards }