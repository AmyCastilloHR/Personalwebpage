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
      tools: ["SAP SuccessFactors ATS", "Indeed", "Glassdoor", "Dayforce"],
      projects: [
        { metric: "−50%", metricLabel: "External recruiting cost, year 1", company: "Epiroc", years: "2022 – 2026",
          title: "Regional HR Center of Excellence recruitment", text: "Built recruitment and onboarding into the new NASA HR Center of Excellence. External recruiting costs fell 50% in year one." },
        { metric: "10+", metricLabel: "VP & GM roles hired", company: "Epiroc", years: "2022 – 2026",
          title: "Executive hiring", text: "Led end-to-end hiring for VP and GM roles: job ads, candidate assessment, interviews, final decisions and candidate feedback." },
        { metric: "2 → 16", metricLabel: "US interns hired, year 1", company: "Epiroc", years: "2022 – 2026",
          title: "Early career & university recruitment", text: "Established Epiroc's first early career and university recruitment strategy, growing US intern hiring from 2 to 16 in the program's first year." },
        { metric: "80–90", metricLabel: "Onboarding NPS", company: "Epiroc", years: "2022 – 2026",
          title: "Onboarding experience", text: "Reached onboarding NPS scores of 80–90 from candidates and managers by focusing on customer experience and automation." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Employment branding function", text: "Built the employment branding function: Best Places to Work participation, partnerships with Indeed and Glassdoor, and the \"Proud to be Epiroc\" series featuring career stories of top talent across the region." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Immigration provider", text: "Ran the RFP for and implemented a new immigration provider." },
        { metric: "225", metricLabel: "Hires for a greenfield mill", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Mass recruitment for the Durant, OK micro-mill", text: "Created and executed the full sourcing, screening and hiring strategy, using state workforce resources alongside best-practice interview techniques." },
        { metric: "#2", metricLabel: "Source of hire", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Indeed partnership", text: "Started CMC's relationship with Indeed as a pilot and grew it to preferred-employer status, reaching 60% of applications. Indeed became the No. 2 source of hires companywide." },
        { metric: "20% → <3%", metricLabel: "Relocation exception rate", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Corporate relocation program", text: "Managed the corporate-wide relocation program, including new vendor selection and policy creation, cutting the exception rate from 20% to under 3%." },
        { company: "Commercial Metals Company", years: "2016 – 2021",
          title: "Modernized regional recruiting", text: "Owned talent acquisition for the central region: digital marketing, targeted referral and sign-on bonus programs, employer branding, and a digitized, rebranded application and onboarding process." },
        { company: "Commercial Metals Company", years: "2016 – 2021",
          title: "First regional recruiter roles", text: "Introduced the first recruiter roles into the region. They were eventually adopted across the entire company and are still in place today." },
        { company: "Commercial Metals Company", years: "2016 – 2021",
          title: "Truck driver recruitment & retention study", text: "Conducted an extensive study on truck driver recruitment and retention, covering pay analysis, recruitment channels, driver development and referrals." },
        { metric: "20", metricLabel: "Hires in 3 months", company: "Texas Instruments", years: "2007 – 2010",
          title: "Factory start-up team", text: "Hired a 20-person start-up team in three months and introduced new interview and onboarding processes to improve screening and retention." },
        { metric: "8", metricLabel: "Expats relocated", company: "Texas Instruments", years: "2007 – 2010",
          title: "Greenfield expat staffing, Clark, Philippines", text: "Recruited and relocated 8 expats from the US to Clark, Philippines for a three-year Assembly/Test factory greenfield. The project was delivered on time and on budget." }
      ] },
    { id: "talent-development", title: "Talent Development",
      intro: "Leadership programs, succession and talent reviews that build the bench a business needs next.",
      tools: ["MBTI Step I & II", "DDI", "StrengthsFinder", "Hogan", "Leadership Circle", "Predictive Index", "Cornerstone"],
      projects: [
        { metric: "60+", metricLabel: "Leaders in the program", company: "Epiroc", years: "2022 – 2026",
          title: "Division Leadership Development Program", text: "Partnered with an external provider on a division-sponsored program, now in its fifth year." },
        { metric: "4", metricLabel: "Global talent exchanges", company: "Epiroc", years: "2022 – 2026",
          title: "Cross-regional talent exchanges", text: "Organized four talent exchanges between the US/Sweden and India/China, with development assignments focused on critical business priorities." },
        { company: "All companies", years: "",
          title: "Talent review", text: "Facilitated talent reviews, with follow-up on development plans for high potentials and low performers." },
        { company: "Epiroc", years: "2024",
          title: "Company-wide learning & development strategy", text: "Convened a cross-functional leadership team to create a tailored L&D strategy supporting the business goal of \u201CAccelerating the Transformation.\u201D" },
        { metric: "50%+", metricLabel: "Of HR team promoted", company: "Commercial Metals Company", years: "2016 – 2021",
          title: "Upskilling the HR team", text: "Moved the team from tactical to strategic through key hires, development and a reorganization aligned to the business structure." },
        { company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Leadership course facilitation", text: "Facilitated MBTI, DDI and CMC leadership courses on a range of leadership topics." },
        { company: "Texas Instruments", years: "2010 – 2013",
          title: "First Talent Development Manager", text: "Created talent development strategies for two global business units, focused on high-potential talent development, P&L leadership, innovation and China talent development." },
        { company: "Texas Instruments", years: "2007 – 2015",
          title: "Mentoring programs", text: "Led mentoring programs for internal teams and various organizations, covering training, matching, development resources, check-ins and wrap-up." },
        { company: "Texas Instruments", years: "2013 – 2015",
          title: "Succession and China leadership bench", text: "Led talent review and succession strategy with custom development plans for high potentials; assessed TI China's leadership bench as part of the China HR priority team." },
        { company: "Texas Instruments", years: "2003 – 2005",
          title: "Global high-potential programs", text: "Designed and facilitated high-potential programs worldwide with C-suite engagement and action learning." }
      ] },
    { id: "total-rewards", title: "Total Rewards",
      intro: "Compensation, benefits and payroll that are competitive, compliant and tied to performance.",
      tools: ["Dayforce", "Workday", "Market benchmarking", "Mercer", "Towers Watson", "Radford", "ERI", "Comptryx", "SAP SuccessFactors Compensation"],
      projects: [
        { company: "Epiroc", years: "2022 – 2026",
          title: "Global Total Rewards transformation", text: "Won support and funding for a multi-year global refresh: new global Total Rewards strategy, a Global Job Framework tied to benchmark data, and an automated salary review using performance data for pay-for-performance and transparency." },
        { metric: "$2M+", metricLabel: "Savings", company: "Epiroc", years: "2022 – 2026",
          also: ["hr-systems"], title: "Payroll, benefits & compensation, US & Canada", text: "Sponsored and led a two-year transformation including the Dayforce implementation." },
        { metric: "$20M+", metricLabel: "US health plans, annually", company: "Epiroc", years: "2022 – 2026",
          title: "US health benefits", text: "Oversaw US health benefits plans totaling over $20M annually, minimizing cost increases through plan design changes and a dependent audit." },
        { metric: "0", metricLabel: "R&D turnover, 3 years after", company: "Epiroc", years: "2022 – 2026",
          title: "R&D turnover & compensation", text: "Led an R&D turnover analysis that surfaced the need for compensation benchmarking and adjustments. Turnover dropped to almost zero for the three years following implementation." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "WebMD wellness platform", text: "Conducted the RFP for and implemented the WebMD wellness platform, including automation of the wellness incentive and health challenges." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Global assignment policy", text: "Cut expat assignments by half in favor of Local Plus packages, reducing company costs for global assignments." },
        { metric: "2-year", metricLabel: "Payback", company: "Epiroc", years: "2022 – 2026",
          title: "LATAM payroll consolidation", text: "Completed the RFP for payroll consolidation across LATAM, starting 2026." },
        { metric: "60", metricLabel: "Day TSA", company: "Epiroc", years: "2022 – 2026",
          also: ["mergers-acquisitions"], title: "Stanley Black & Decker division merger", text: "Set up a full suite of benefits plans, a new 401(k) and a full payroll system within the transition period; led health plan harmonization for 2026 and the 401(k) harmonization roadmap." },
        { metric: "<3%", metricLabel: "Exception rate, from 20%", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "Corporate relocation program", text: "Selected a new vendor and rewrote relocation policy companywide." },
        { company: "DJO Global", years: "2021",
          title: "Sales incentive redesign", text: "Restructured the sales organization, including territories and incentive plans." },
        { company: "Texas Instruments", years: "2005 – 2007",
          title: "Executive compensation", text: "Analyzed competitor pay strategies, selected proxy peer groups and salary surveys, recommended executive pay ranges, and developed job-grade performance anchors for exempt employees." },
        { company: "Texas Instruments", years: "2005 – 2007",
          title: "Job grade leveling standards", text: "Created job grade leveling standards for salaried employees." }
      ] },
    { id: "hr-systems", title: "HR Systems",
      intro: "HRIS, payroll, benefits and process automation that take manual work out of HR.",
      tools: ["Dayforce", "Workday", "SAP SuccessFactors", "Cornerstone", "PeopleSoft", "Kronos", "Equifax", "BI reporting", "Copilot, ChatGPT & Claude"],
      projects: [
        { metric: "$2M+", metricLabel: "Savings", company: "Epiroc", years: "2022 – 2026",
          also: ["total-rewards"], title: "Dayforce implementation", text: "Brought payroll, benefits and compensation for the US and Canada onto Dayforce, significantly increasing automation." },
        { metric: "10", metricLabel: "Largest countries in 2 years", company: "Epiroc", years: "2022 – 2026",
          title: "Automated salary review", text: "Automated the annual salary review process, implementing the 10 largest countries within two years, with a roadmap to cover 80% of the employee population within three years." },
        { company: "Commercial Metals Company & Epiroc", years: "",
          title: "SuccessFactors rollout", text: "Partnered with HRIS on implementation of SuccessFactors HRIS, ATS, Compensation and Recruitment modules." },
        { company: "Commercial Metals Company", years: "2015 – 2021",
          title: "HRIS organization structure", text: "Re-envisioned the HR organization structure in the HRIS, resulting in more efficient, standardized reporting from the HRIS and connected systems." }
      ] },
    { id: "employee-relations", title: "Employee Relations and Compliance",
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
          title: "I-9 audit", text: "Initiated an I-9 audit that resulted in hundreds of corrections, protecting the company from a potentially large settlement with federal immigration authorities." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Severance guidelines", text: "Created standard severance guidelines covering severance length, outplacement and standard documentation." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Employee file digitization", text: "Assessed and initiated a project to digitize and organize US employee files to meet compliance standards." },
        { company: "All companies", years: "",
          title: "Sensitive employee investigations", text: "Conducted sensitive employee investigations up through GM and VP levels, including sexual harassment, substance abuse, fraud and gross misconduct." },
        { company: "All companies", years: "",
          title: "Restructuring & change management", text: "Partnered with leaders on multiple reorganizations, including leadership choices and resourcing, redeployment, reductions and change management." },
        { company: "Commercial Metals Company", years: "2017",
          title: "Hurricane Harvey & Irma relief fund", text: "Led strategy for the employee relief fund." }
      ] },
    { id: "mergers-acquisitions", title: "M&A",
      intro: "HR due diligence and integration that carry people, pay, benefits and culture safely through a transaction.",
      tools: ["HR due diligence", "IMO / PMO", "TSA planning", "Retention agreements", "Benefits & 401(k) harmonization", "Smartsheet"],
      projects: [
        { metric: "7+", metricLabel: "Acquisitions & divestitures", company: "All companies", years: "",
          title: "Due diligence & integration", text: "Hands-on HR due diligence and integration across 7+ transactions, representing HR on Integration Management Office (IMO)/PMO teams to structure workstreams, sequence milestones and manage risk across HR, benefits, payroll and systems." },
        { metric: "60", metricLabel: "Day TSA", company: "Epiroc", years: "2022 – 2026", also: ["total-rewards"],
          title: "Stanley Black & Decker division merger", text: "Led HR integration into Epiroc: stood up a full benefits suite, a new 401(k) plan and a full payroll system within the 60-day Transition Services Agreement, then harmonized health and 401(k) plans across the combined organization." },
        { metric: "3,000", metricLabel: "Employees acquired", company: "Commercial Metals Company", years: "2015 – 2021",
          title: "$600M US acquisition", text: "Led HR acquisition activities, including employee, HR and leadership onboarding strategy. Guided a cross-functional team in creating a leadership and culture integration course and drove integration across central region locations." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "HR M&A Advisory group", text: "Helped establish company-wide HR standards for M&A activity, including a due diligence checklist and guidance on compensation, benefits and retention agreements." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Target due diligence", text: "Led HR due diligence for multiple acquisition targets." },
        { company: "Epiroc", years: "2022 – 2026",
          title: "Acquisitions in Perth, Australia", text: "Led HR for three acquisitions in Perth, Australia, integrating performance reviews, talent reviews and the annual compensation process, alongside cultural integration through the code of conduct and introduction of Epiroc leadership and development opportunities." },
        { company: "DJO Global", years: "2021",
          title: "M&A across three global businesses", text: "Led M&A and integration activities for three global businesses with employees in the US, Europe and Asia." }
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
