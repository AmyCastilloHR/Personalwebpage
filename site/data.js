// ─────────────────────────────────────────────────────────────
// Edit this file to update the site. No other file needs to change.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  name: "Amy Castillo",
  tagline: "HR executive with 25 years leading people strategy across manufacturing, medical devices and semiconductors. Founder of Amy Castillo Consulting.",
  email: "Acotton123@yahoo.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/amycastilloHR/" }
  ],

  headshot: "",   // set to "img/headshot.png" to show your photo

  about: [
    "I'm a transformational HR executive based in Parker, Texas. My work spans HR strategy, digital transformation, employee relations, leadership development, organizational design and talent management, always with a business-minded, data-driven approach.",
    "I've led HR for global divisions of up to ~5,000 people, integrated mergers and acquisitions, built an HR Center of Excellence from the ground up, and modernized payroll, rewards and recruitment. I care most about building HR functions that help companies grow sustainably."
  ],
  education: [
    { school: "Southern Methodist University", logo: "logos/smu.png", detail: "M.B.A., Strategic Leadership / Strategy" },
    { school: "Cornell University", logo: "logos/cornell.png", detail: "B.S., Industrial and Labor Relations" }
  ],
  certifications: [
    { logo: "logos/phr.png", name: "Professional in Human Resources (PHR)" },
    { logo: "logos/mbti.png", name: "MBTI Step I & II" },
    { logo: "logos/ddi.png", name: "Certified DDI Leadership Facilitator" }
  ],

  // Logos go in site/logos/. If a file is missing, the company name shows instead.
  companies: [
    { name: "Epiroc", role: "Mining & Construction", years: "2022 – 2026", logo: "logos/epiroc-navy.png",
      highlight: "Global Surface Division (~$2B, ~2,200 people across the US, Sweden, Canada, China, India, Australia and South Africa).",
      roles: [
        { title: "Vice President, Human Resources & SHEQ", years: "2022 – 2026",
          text: "Strategic HR and Safety, Health, Environment & Quality leader for the division, plus the NASA region and China (~3,000 people). Member of Epiroc's global People & Leadership Council.",
          points: [
            "Safety turnaround: 68% reduction in LTIFR and 45% in TRIFR since 2023",
            "Built the NASA HR Center of Excellence: 30+ hires, 50% lower external recruiting cost in year one, $1.3M annual savings mapped",
            "Integrated two divisions into one; engagement reached 82%, up 7 points",
            "Led HR for the Stanley Black & Decker division merger and three acquisitions in Perth, Australia",
            "Dayforce payroll, benefits and compensation transformation with $2M+ savings",
            "Multi-year Total Rewards refresh across 10 countries"
          ] }
      ] },
    { name: "DJO Global", role: "Medical Devices", years: "2021", logo: "logos/djo-trim.png",
      highlight: "Three global businesses with employees in the US, Europe and Asia.",
      roles: [
        { title: "Senior Director, Human Resources", years: "2021",
          text: "Strategic HR business leader overseeing strategic and transactional HR, M&A and integration.",
          points: [
            "Led M&A and integration activities as strategic HR business leader supporting 3 global businesses with employees in the US, Europe, and Asia; oversaw both strategic and transactional HR functions",
            "Restructured the sales organization, including territories and incentive plans"
          ] }
      ] },
    { name: "Commercial Metals Company", role: "Steel", years: "2015 – 2021", logo: "logos/cmc-trim.png",
      highlight: "Central US division: $2.5B, 3,400 people, 80 locations across eight states.",
      roles: [
        { title: "Division Director, Human Resources", years: "2016 – 2021",
          text: "Led a team of 18 with a $2.2M budget; full HR and workforce strategy for the SVP of the central region and four lines of business.",
          points: [
            "HR lead for a $600M, 3,000-employee acquisition",
            "Hired 225 people for the greenfield micro-mill in Durant, OK",
            "Grew Indeed to 60% of applications and the No. 2 source of hires",
            "Zero HR-related litigation or settlements",
            "Promoted 50%+ of the HR team into larger roles"
          ] },
        { title: "HR Director, Corporate & Trading Division", years: "2015 – 2016",
          text: "Business partner for corporate functions (~1,100 people), supporting the CAO, CIO, CFO and General Counsel. Partnered on the SuccessFactors HRIS, ATS, Compensation and Recruitment rollout." }
      ] },
    { name: "Texas Instruments", role: "Semiconductor", years: "2000 – 2015", logo: "logos/ti-trim.png", logoBox: "large",
      highlight: "~$15B revenue, Fortune 200. From HR intern to Senior HR Manager across R&D, manufacturing and global talent development.",
      roles: [
        { title: "Senior HR Manager, High Performance Analog (R&D)", years: "2013 – 2015",
          text: "Business partner for two worldwide units ($600M, 400 people) across the US, India, China, Germany and Denmark. Led restructuring, talent review and succession planning; assessed TI China's leadership bench." },
        { title: "Talent Development Manager, HPA & Power Management", years: "2010 – 2013",
          text: "First in a newly created role spanning leadership, organization and high-potential development for 2,000-person business units. Designed growth strategy sessions for VPs and GMs." },
        { title: "HR Manager, Worldwide Facilities", years: "2007 – 2010",
          text: "Partner to a 750-person organization across seven countries. Hired a 20-person factory start-up team in three months; built servant-leadership programs with an outside consultancy." },
        { title: "Executive Compensation Analyst", years: "2005 – 2007",
          text: "Analyzed competitor executive pay, selected proxy peer groups and recommended executive pay ranges." },
        { title: "Professional Development Consultant", years: "2003 – 2005",
          text: "Designed and facilitated global high-potential leader programs with C-suite mentoring and action learning." },
        { title: "HR Generalist, Kilby Wafer Fab", years: "2002 – 2003",
          text: "Supported a 650-person, 24/7 fabrication facility of engineers, technicians and operators." },
        { title: "HR Intern, Digital Signal Processing", years: "2000 – 2002", text: "" }
      ] }
  ],

  consulting: {
    status: "Launching soon",
    name: "Amy Castillo Consulting",
    logo: "logos/amy-castillo-consulting.png",
    pitch: "Twenty-five years building HR functions and the leaders inside them. Senior HR bench strength, on the terms that fit you.",
    services: [
      "Fractional & interim HR leadership",
      "Strategic HR business partnering",
      "Leadership development",
      "Executive search & assessment",
      "M&A due diligence & integration"
    ],
    models: [
      { name: "Fractional", text: "An ongoing few days a month as your most senior HR voice." },
      { name: "Interim", text: "Full-time hands on the wheel during a search or reorganization." },
      { name: "Project", text: "A scoped search, investigation, program or build." }
    ]
  },

  // HR EXPERTISE — one page per function (expertise.html#id). metric is optional.
  hrAreas: [
    { id: "talent-acquisition", title: "Talent Acquisition",
      intro: "Recruiting built as a system: sourcing channels, employer brand, and onboarding that holds on to the people you hire.",
      tools: ["SAP SuccessFactors ATS", "Indeed", "Dayforce"],
      projects: [
        { metric: "−50%", metricLabel: "External recruiting cost, year 1", company: "Epiroc", years: "2022 – 2026",
          title: "Regional HR Center of Excellence recruitment", text: "Built recruitment and onboarding into the new NASA HR Center of Excellence. External recruiting costs fell 50% in year one; NPS from managers and candidates ran 60–80." },
        { metric: "225", metricLabel: "Hires for a greenfield mill", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Mass recruitment for the Durant, OK micro-mill", text: "Created and executed the full sourcing, screening and hiring strategy, using state workforce resources alongside best-practice interview techniques." },
        { metric: "60%", metricLabel: "Of applications via Indeed", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Indeed partnership", text: "Started CMC's relationship with Indeed as a pilot and grew it to preferred-employer status. Indeed became the No. 2 source of hires companywide." },
        { company: "Commercial Metals Company", years: "2016 – 2021",
          title: "Modernized regional recruiting", text: "Owned talent acquisition for the central region: digital marketing, targeted referral and sign-on bonus programs, employer branding, and a digitized, rebranded application and onboarding process." },
        { metric: "20", metricLabel: "Hires in 3 months", company: "Texas Instruments", years: "2007 – 2010",
          title: "Factory start-up team", text: "Hired a 20-person start-up team in three months and introduced new interview and onboarding processes to improve screening and retention." }
      ] },
    { id: "talent-development", title: "Talent Development",
      intro: "Leadership programs, succession and talent reviews that build the bench a business needs next.",
      tools: ["MBTI Step I & II", "DDI", "StrengthsFinder", "Hogan", "Cornerstone"],
      projects: [
        { metric: "60+", metricLabel: "Leaders in the program", company: "Epiroc", years: "2022 – 2026",
          title: "Division Leadership Development Program", text: "Partnered with an external provider on a division-sponsored program, now in its fourth year." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Talent review & succession planning", text: "Introduced the talent review process for the Global Surface Division management team, with succession planning and follow-up on development plans." },
        { company: "Epiroc", years: "2024",
          title: "Learning & development strategy", text: "Convened a cross-functional leadership team to create a tailored L&D strategy supporting the business goal of \u201CAccelerating the Transformation.\u201D" },
        { metric: "50%+", metricLabel: "Of HR team promoted", company: "Commercial Metals Company", years: "2016 – 2021",
          title: "Upskilling the HR team", text: "Moved the team from tactical to strategic through key hires, development and a reorganization aligned to the business structure." },
        { metric: "2,000", metricLabel: "Employees supported", company: "Texas Instruments", years: "2010 – 2013",
          title: "First Talent Development Manager", text: "Newly created role combining leadership, organization and high-potential development. Designed strategy sessions for VPs and GMs on growth, innovation and China expansion." },
        { company: "Texas Instruments", years: "2013 – 2015",
          title: "Succession and China leadership bench", text: "Led talent review and succession strategy with custom development plans for high potentials; assessed TI China's leadership bench as part of the China HR priority team." },
        { company: "Texas Instruments", years: "2003 – 2005",
          title: "Global high-potential programs", text: "Designed and facilitated programs worldwide with C-suite mentoring and action learning, plus mentoring programs for diversity and technical talent." }
      ] },
    { id: "total-rewards", title: "Total Rewards",
      intro: "Compensation, benefits and payroll that are competitive, compliant and tied to performance.",
      tools: ["Dayforce", "Workday", "Market benchmarking"],
      projects: [
        { metric: "10", metricLabel: "Countries", company: "Epiroc", years: "2022 – 2026",
          title: "Total Rewards transformation", text: "Won support and funding for a multi-year refresh: new Total Rewards strategy, a Global Job Framework tied to benchmark data, and an automated salary review using performance data for pay-for-performance and transparency." },
        { metric: "$2M+", metricLabel: "Savings", company: "Epiroc", years: "2022 – 2026",
          title: "Payroll, benefits & compensation, US & Canada", text: "Sponsored and led a two-year transformation including the Dayforce implementation. Completed the RFP for payroll consolidation across LATAM, starting 2026." },
        { metric: "60", metricLabel: "Day TSA", company: "Epiroc", years: "2022 – 2026",
          title: "Stanley Black & Decker division merger", text: "Set up a full suite of benefits plans, a new 401(k) and a full payroll system within the transition period; led health plan harmonization for 2026 and the 401(k) harmonization roadmap." },
        { metric: "<3%", metricLabel: "Exception rate, from 20%", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Corporate relocation program", text: "Selected a new vendor and rewrote relocation policy companywide." },
        { company: "DJO Global", years: "2021",
          title: "Sales incentive redesign", text: "Restructured the sales organization, including territories and incentive plans." },
        { company: "Texas Instruments", years: "2005 – 2007",
          title: "Executive compensation", text: "Analyzed competitor pay strategies, selected proxy peer groups and salary surveys, recommended executive pay ranges, and developed job-grade performance anchors for exempt employees." }
      ] },
    { id: "hr-systems", title: "HR Systems",
      intro: "HRIS, payroll and process automation that take manual work out of HR.",
      tools: ["Dayforce", "Workday", "SAP SuccessFactors", "Cornerstone", "PeopleSoft", "Kronos", "Equifax", "BI reporting", "Copilot, ChatGPT & Claude"],
      projects: [
        { metric: "$2M+", metricLabel: "Savings", company: "Epiroc", years: "2022 – 2026",
          title: "Dayforce implementation", text: "Brought payroll, benefits and compensation for the US and Canada onto Dayforce, significantly increasing automation." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Payroll system stand-up during a merger", text: "Implemented a full payroll system inside a 60-day transition services period." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Automated salary review & file digitization", text: "Automated the annual salary review process; led the audit and digitization of employee files." },
        { company: "Commercial Metals Company", years: "2015 – 2016",
          title: "SuccessFactors rollout", text: "Partnered with HRIS on implementation of SuccessFactors HRIS, ATS, Compensation and Recruitment modules." }
      ] },
    { id: "employee-relations", title: "Employee Relations",
      intro: "Fair, consistent people practices, compliance and safety that protect employees and the business.",
      tools: ["Employment law", "HR compliance", "Engagement surveys"],
      projects: [
        { metric: "0", metricLabel: "HR-related lawsuits or settlements", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Clean record", text: "Achieved zero HR-related litigation or settlements across the entire tenure." },
        { metric: "−68%", metricLabel: "Lost-time injury frequency", company: "Epiroc", years: "2023 – 2026",
          title: "Safety turnaround", text: "Cut LTIFR 68% and TRIFR 45% through proactive measures; celebrated three months with no injuries in 2025 with the \u201CWhy I work safely\u201D campaign." },
        { metric: "82%", metricLabel: "Engagement, +7 pts", company: "Epiroc", years: "2024 – 2025",
          title: "Integrating two divisions", text: "Launched a joint strategy and drove collaboration and communication across the newly combined organization." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "HR compliance function", text: "Created the function and launched an I-9 audit and employee file audit." },
        { company: "Texas Instruments", years: "2013 – 2015",
          title: "Restructuring & change management", text: "Partnered with leaders on multiple reorganizations, including leadership choices and resourcing, redeployment, reductions and change management." },
        { company: "Commercial Metals Company", years: "2017",
          title: "Hurricane Harvey & Irma relief fund", text: "Led strategy for the employee relief fund." }
      ] }
  ],

  interests: [
    { icon: "plane", title: "Travel", text: "Tracked on the map above — always planning the next one." },
    { icon: "utensils", title: "Food", text: "Exploring global cuisines." },
    { icon: "design", title: "Design & Remodeling", text: "Designed luxury kitchen and bathroom remodels." },
    { icon: "book", title: "Reading", text: "Historical fiction and sci-fi." },
    { icon: "dumbbell", title: "Fitness", text: "Orangetheory." }
  ],

  // TRAVEL — from 2019 resume; add newer trips.
  // Use country / state names in English. Add years if you like: { name: "Japan", years: [2019, 2024] }
  travel: {
    countries: [
      "United States", "Belize", "Canada", "China", "Costa Rica", "Denmark", "England", "France",
      "Greece", "Italy", "India", "Malaysia", "Mexico", "Philippines", "Spain", "Switzerland", "Tanzania & Zanzibar",
      "Brazil", "Colombia", "Turks and Caicos", "Czech Republic", "Sweden", "Norway", "Germany", "Portugal", "Vietnam", "Cambodia", "Japan", "Dominican Republic"
    ],
    states: [
      "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
      "Florida", "Georgia", "Idaho", "Illinois", "Indiana", "Louisiana", "Maine", "Maryland",
      "Massachusetts", "Michigan", "Missouri", "Montana", "Nevada", "New Hampshire", "New Jersey",
      "New Mexico", "New York", "North Carolina", "Ohio", "Oklahoma", "Pennsylvania", "Rhode Island",
      "South Carolina", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
      "West Virginia", "Wisconsin"
    ],
    // Upcoming / planned trips (shown in a lighter color, not counted)
    plannedCountries: [],
    plannedStates: ["Hawaii"]
  }
};
