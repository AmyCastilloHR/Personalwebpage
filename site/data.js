// ─────────────────────────────────────────────────────────────
// Edit this file to update the site. No other file needs to change.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  name: "Amy Castillo",
  tagline: "HR executive with 25 years leading people strategy across manufacturing, medical devices and semiconductors. Founder of Amy Castillo Consulting.",
  email: "amy@amycastillohr.com",
  bookingUrl: "https://cal.com/amycastillohr/20-min-meeting",
  headline: "HR leadership through acquisitions, turnarounds, and growth.",
  subhead: "25 years leading HR at Epiroc, Commercial Metals and Texas Instruments, through acquisitions, turnarounds, and HR functions built from scratch.",
  proof: [
    { metric: "$1.3B+", text: "In acquisitions, including $760M STANLEY Infrastructure and $600M Gerdau" },
    { metric: "3K+", text: "Employees under HR responsibility, across 20 countries" },
    { metric: "$2M+", text: "Savings from a payroll and benefits transformation" },
    { metric: "−68%", text: "Lost-time injury frequency (LTIFR) at Epiroc, with TRIFR down 45%" }
  ],
  offers: [
    { id: "ma", title: "M&A HR due diligence and integration", format: "",
      who: "PE sponsors, corporate development teams and CEOs buying, selling or carving out an industrial business.",
      gets: ["HR due diligence", "Day 1 readiness", "Benefits and payroll stand-up", "Retention agreements", "Culture integration"] },
    { id: "fractional", title: "Fractional and interim HR leadership", format: "",
      who: "Mid-market manufacturers without a senior HR leader, or between CHROs.",
      gets: ["A senior HR leader a few days a month", "Or full time during a search or reorganization"] },
    { id: "investigations", title: "Independent executive investigations", format: "",
      who: "Boards, CEOs and general counsel facing a matter involving a senior leader.",
      gets: ["Discreet, conflict-free investigations", "Senior-leader matters up through GM and VP"] }
  ],
  cases: [
    { tag: "Restructuring · Texas Instruments", metric: "20%", metricLabel: "Headcount reduction, division later profitable",
      problem: "A money-losing division had to cut headcount by 20%. The usual practice was same-day notice and a walk-out.",
      did: "Proposed and ran a new approach: 60 days' notice so people could interview for open roles across TI, an all-hands on what, when and why, and 1:1 support for every impacted employee.",
      result: "No lasting damage among those who stayed; the division restructured and returned to profit, and many impacted employees found new roles inside TI." },
    { tag: "Safety · Epiroc", metric: "−68%", metricLabel: "Lost-time injury frequency",
      problem: "As VP of HR and SHEQ, I owned a division-wide injury rate that had to come down.",
      did: "Shifted the division to proactive safety measures and ran the “Why I work safely” campaign.",
      result: "LTIFR down 68% and TRIFR down 45% since 2023, with three injury-free months in 2025." },
    { tag: "M&A · Epiroc", metric: "60", metricLabel: "Day transition period",
      problem: "Epiroc's $760M STANLEY Infrastructure acquisition (2024) brought in about 1,380 employees with a 60-day Transition Services Agreement.",
      did: "Led the stand-up of payroll and benefits, including a new 401(k), then led health plan harmonization and the 401(k) harmonization roadmap.",
      result: "Payroll and benefits live inside the 60 days; health plans harmonized for 2026." }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/amycastilloHR/" }
  ],

  headshot: "img/headshot.png",   // set to "" to hide your photo

  countriesWorked: 20,   // "I've worked with teams in N countries." on the home page
  about: [
    "I'm an HR executive based in Parker, Texas, with 25 years in manufacturing, mining, steel and semiconductors. Most recently I was VP of Human Resources and SHEQ for Epiroc's ~$2B Global Surface Division.",
    "I've supported HR through 7+ acquisitions as part of due diligence and IMO teams, built an HR Center of Excellence from scratch, and modernized payroll, rewards and recruiting. I now work directly with CEOs, CFOs and operating partners who need senior HR judgment without a full-time hire."
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
            "Led HR and safety for a global division, the NASA region and China",
            "Built the NASA HR Center of Excellence",
            "HR lead for acquisitions, a division integration and a multi-country Total Rewards refresh"
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
            "HR lead for the $600M Gerdau asset acquisition (2018)",
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
          text: "First in a newly created role spanning leadership, organization and high-potential development for two business units totaling 2,400 people. Designed growth strategy sessions for VPs and GMs." },
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

  // HR EXPERTISE — one page per function (expertise.html#id), in nav order.
  // offer: id of the matching home-page offer. sections: extra headed blocks shown first.
  // top: large stat cards (4–5 max). more: collapsed under "More programs".
  // see: an item whose full version lives on another page — shows as a short "See also" link.
  hrAreas: [
    { id: "mergers-acquisitions", title: "M&A", offer: "ma",
      focus: ["HR due diligence","TSA and Day 1 readiness","Benefits and payroll stand-up","Culture and leadership integration"],
      intro: "HR due diligence and integration that carry people, pay, benefits and culture safely through a transaction.",
      tools: ["HR due diligence", "IMO / PMO", "TSA planning", "Retention agreements", "Benefits & 401(k) harmonization", "Smartsheet"],
      top: [
        { metric: "7+", metricLabel: "Acquisitions", company: "All companies",
          title: "Due diligence & integration", text: "Hands-on HR due diligence and integration across 7+ transactions, representing HR on Integration Management Office (IMO)/PMO teams to structure workstreams, sequence milestones and manage risk across HR, benefits, payroll and systems." },
        { metric: "$760M", metricLabel: "~1,380 employees, 10 sites, 4 countries", company: "Epiroc · 2024",
          link: "https://www.epirocgroup.com/en/media/corporate-press-releases/2024/20240401-epiroc-completes-acquisition-of-stanley-infrastructure-to-strengthen-infrastructure-and-construction-business", linkLabel: "Acquisition details",
          title: "STANLEY Infrastructure: payroll & benefits stand-up", text: "For Epiroc's $760M acquisition of a business with about 1,380 employees and 10 manufacturing sites across four countries, led the stand-up of payroll and benefits, including a new 401(k), within a short 60-day Transition Services Agreement window. Then led health benefits harmonization across the combined organization and the roadmap and planning for 401(k) harmonization." },
        { metric: "$600M", metricLabel: "4 steel mills, 33 fabrication facilities", company: "Commercial Metals Company · 2018",
          link: "https://ir.cmc.com/commercial-metals-company-completes-acquisition-of-certain-u-s-rebar-assets-from-gerdau/", linkLabel: "Acquisition details",
          title: "Gerdau asset acquisition", text: "HR lead for a $600M acquisition of four steel mills and 33 fabrication facilities, which combined two of the three largest US rebar producers. Led employee, HR, and leadership onboarding strategy, and guided a cross-functional team in building a leadership and culture integration course for the central region." },
        { metric: "82%", metricLabel: "Engagement, +7 pts", company: "Epiroc · 2024 – 2025",
          title: "Integrating two divisions", text: "Launched a joint strategy and drove collaboration and communication across the newly combined organization." }
      ],
      more: [
        { company: "Epiroc", title: "HR M&A Advisory group", text: "Helped establish company-wide HR standards for M&A activity, including a due diligence checklist and guidance on compensation, benefits and retention agreements." },
        { company: "Epiroc", title: "Target due diligence", text: "Led HR due diligence for multiple acquisition targets." },
        { company: "Epiroc", title: "Acquisitions in Perth, Australia", text: "Led HR for three acquisitions in Perth, Australia, integrating performance reviews, talent reviews and the annual compensation process, alongside cultural integration through the code of conduct and introduction of Epiroc leadership and development opportunities." },
        { company: "DJO Global · 2021", title: "M&A across three global businesses", text: "Led M&A and integration activities for three global businesses with employees in the US, Europe and Asia." }
      ] },
    { id: "employee-relations", title: "Employee Relations & Compliance", short: "Employee Relations", offer: "investigations",
      focus: ["Safety and culture","Executive investigations","Restructuring and reductions in force","Compliance and audits"],
      intro: "Fair, consistent people practices, compliance and safety that protect employees and the business.",
      tools: ["Employment law", "HR compliance", "Investigations", "Engagement surveys", "Safety programs", "Equifax", "SharePoint", "Copilot, ChatGPT & Claude"],
      top: [
        { metric: "−68%", metricLabel: "Lost-time injury frequency", company: "Epiroc · 2023 – 2026",
          title: "Safety turnaround", text: "As VP of HR and SHEQ, shifted the division to proactive safety measures and ran the \u201CWhy I work safely\u201D campaign. Lost-time injury frequency fell 68% and total recordable injuries 45%, with three injury-free months in 2025." },
        { metric: "60 days", metricLabel: "Notice in a 20% reduction in force", company: "Texas Instruments",
          title: "Revised approach to reductions in force", text: "Replaced same-day walk-outs with 60 days' notice, an all-hands explaining what, when and why, and 1:1 job-search support for each impacted employee. The division restructured and returned to profit, with no lasting damage to morale; many impacted employees found new roles inside TI." },
        { metric: "Zero", metricLabel: "HR-related lawsuits or settlements", company: "Commercial Metals Company · 2015 – 2021",
          title: "Clean record", text: "Achieved zero HR-related litigation or settlements across the entire tenure." },
        { metric: "Zero", metricLabel: "Late-termination audit findings after rollout", company: "Commercial Metals Company · 2015 – 2021",
          title: "Automated termination process", text: "Late terminations were causing audit findings and payroll overpayments, with the new HRIS a year away. Built a SharePoint termination workflow with IT, piloted it at corporate and rolled it out to field HR, who adopted it within 2–4 weeks. Audit issues and overpayments were eliminated, and the process eased the later SuccessFactors move." }
      ],
      more: [
        { company: "Commercial Metals Company", title: "HRIS organization structure", text: "Re-envisioned the HR organization structure in the HRIS, resulting in more efficient, standardized reporting from the HRIS and connected systems." },
        { company: "All companies", title: "Sensitive executive investigations", text: "Conducted sensitive investigations up through GM and VP levels, including sexual harassment, substance abuse, fraud and gross misconduct." },
        { company: "Epiroc", title: "I-9 audit", text: "Initiated an I-9 audit that resulted in hundreds of corrections, protecting the company from a potentially large settlement with federal immigration authorities." },
        { company: "Commercial Metals Company", title: "Leaders meeting & employee communications", text: "Top-down cascades through 4–5 leadership levels left frontline teams uninformed. Launched a regional meeting for ~75 Area Managers and above, plus monthly HR communications as meeting slides and breakroom monitor loops. Near-zero cost, and both were still in place five years later." },
        { company: "Epiroc", title: "Severance guidelines", text: "Created standard severance guidelines covering severance length, outplacement and standard documentation." },
        { company: "Epiroc", title: "Employee file digitization", text: "Assessed and initiated a project to digitize and organize US employee files to meet compliance standards." },
        { company: "All companies", title: "Restructuring & change management", text: "Partnered with leaders on multiple reorganizations, including leadership choices and resourcing, redeployment, reductions and change management." },
        { company: "Commercial Metals Company · 2017", title: "Hurricane Harvey & Irma relief fund", text: "Led strategy for the employee relief fund." },
        { see: "mergers-acquisitions", title: "Integrating two divisions (82% engagement, +7 pts)" }
      ] },
    { id: "total-rewards", title: "Total Rewards", offer: "fractional",
      focus: ["Global rewards strategy","Salary review and job frameworks","Health and retirement benefits","Payroll transformation"],
      intro: "Compensation, benefits and payroll that are competitive, compliant and tied to performance.",
      tools: ["Dayforce", "Workday", "Market benchmarking", "Mercer", "Towers Watson", "Radford", "ERI", "Comptryx", "SAP SuccessFactors Compensation", "Kronos", "PeopleSoft", "BI reporting"],
      top: [
        { metric: "10", metricLabel: "Countries on automated salary review in 2 years", company: "Epiroc · 2022 – 2026",
          title: "Global Total Rewards strategy & salary review", text: "Won support and funding for a multi-year global refresh: a new global Total Rewards strategy and roadmap, a Global Job Framework tied to benchmark data, and an automated salary review using performance data for pay-for-performance and transparency. Implemented the salary review module in the 10 largest countries within two years, with a roadmap to cover 80% of employees within three." },
        { metric: "$20M+", metricLabel: "US health plans, annually", company: "Epiroc · 2022 – 2026",
          title: "US health benefits", text: "Oversaw US health benefits plans totaling over $20M annually, minimizing cost increases through plan design changes and a dependent audit." },
        { metric: "−50%", metricLabel: "Expat assignments", company: "Epiroc · 2022 – 2026",
          title: "Global assignment policy", text: "Cut expat assignments by half in favor of Local Plus packages, reducing company costs for global assignments." },
        { metric: "~0%", metricLabel: "Turnover in a ~60-engineer R&D team, 3 years after", company: "Epiroc · 2022 – 2026",
          title: "R&D turnover & compensation", text: "For one R&D department of about 60 engineers, led a turnover analysis that surfaced the need for compensation benchmarking and adjustments. Turnover dropped to almost zero for the three years following implementation." },
        { metric: "$2M+", metricLabel: "Savings", company: "Epiroc · 2022 – 2026",
          title: "Payroll, benefits & compensation on Dayforce", text: "Sponsored and led a two-year transformation that brought payroll, benefits and compensation for the US and Canada onto Dayforce, significantly increasing automation." }
      ],
      more: [
        { company: "Epiroc", title: "LATAM payroll consolidation", text: "Completed the RFP for payroll consolidation across LATAM, starting 2026, with a two-year payback." },
        { company: "Epiroc", title: "WebMD wellness platform", text: "Conducted the RFP for and implemented the WebMD wellness platform, including automation of the wellness incentive and health challenges." },
        { company: "DJO Global · 2021", title: "Sales incentive redesign", text: "Restructured the sales organization, including territories and incentive plans." },
        { company: "Texas Instruments · 2005 – 2007", title: "Executive compensation", text: "Analyzed competitor pay strategies, selected proxy peer groups and salary surveys, recommended executive pay ranges, and developed job-grade performance anchors for exempt employees." },
        { company: "Texas Instruments · 2005 – 2007", title: "Job grade leveling standards", text: "Created job grade leveling standards for salaried employees." },
        { see: "mergers-acquisitions", title: "STANLEY Infrastructure benefits, 401(k) & payroll stand-up" },
        { see: "talent-acquisition", title: "Corporate relocation program (exceptions 20% → <3%)" }
      ] },
    { id: "talent-development", title: "Talent Development", offer: "fractional",
      focus: ["Leadership programs","Talent review and succession","Performance management","Building strategic HR teams"],
      intro: "Leadership programs, succession and talent reviews that build the bench a business needs next.",
      tools: ["MBTI Step I & II", "DDI", "StrengthsFinder", "Hogan", "Leadership Circle", "Predictive Index", "Cornerstone"],
      top: [
        { metric: "60+", metricLabel: "Leaders in the program", company: "Epiroc · 2022 – 2026",
          title: "Division Leadership Development Program", text: "Partnered with an external provider on a division-sponsored program, now in its fifth year." },
        { metric: "4", metricLabel: "Global talent exchanges", company: "Epiroc · 2022 – 2026",
          title: "Cross-regional talent exchanges", text: "Organized four talent exchanges between the US/Sweden and India/China, with development assignments focused on critical business priorities." },
        { metric: "50%+", metricLabel: "Of HR team promoted", company: "Commercial Metals Company · 2016 – 2021",
          title: "From tactical HR to strategic partner", text: "Realigned HR managers to area business leaders, automated or moved clerical work to self-service, replaced three tactical roles with strategic hires, and gave every team member a budgeted development plan. HR became part of every stage of the employee lifecycle; managers said they hadn't known what they were missing." }
      ],
      more: [
        { company: "All companies", title: "Talent review", text: "Facilitated talent reviews, with follow-up on development plans for high potentials and low performers." },
        { company: "Epiroc · 2024", title: "Company-wide learning & development strategy", text: "Convened a cross-functional leadership team to create a tailored L&D strategy supporting the business goal of \u201CAccelerating the Transformation.\u201D" },
        { company: "Commercial Metals Company", title: "Leadership course facilitation", text: "Facilitated MBTI, DDI and CMC leadership courses on a range of leadership topics." },
        { company: "Texas Instruments · 2010 – 2013", title: "First Talent Development Manager", text: "Defined a new role from scratch: interviewed SVPs, GMs and HR directors, then built talent development strategies for two global business units totaling 2,400 employees. The framework became the default strategy template for the whole Talent Development team." },
        { company: "Texas Instruments", title: "Conversations that Count", text: "Led the team that replaced annual performance reviews with regular performance conversations, building two 4-hour courses for leaders and individual contributors with an external vendor. Rolled out companywide; parts are still in use more than 10 years later." },
        { company: "Texas Instruments", title: "Mentoring programs", text: "Led mentoring programs for internal teams and various organizations, covering training, matching, development resources, check-ins and wrap-up." },
        { company: "Texas Instruments · 2013 – 2015", title: "Succession and China leadership bench", text: "Led talent review and succession strategy with custom development plans for high potentials; assessed TI China's leadership bench as part of the China HR priority team." },
        { company: "Texas Instruments · 2003 – 2005", title: "Global high-potential programs", text: "Designed and facilitated high-potential programs worldwide with C-suite engagement and action learning." }
      ] },
    { id: "talent-acquisition", title: "Talent Acquisition", offer: "fractional",
      focus: ["Greenfield and high-volume hiring","Executive hiring","Employer brand and sourcing","Relocation and onboarding"],
      intro: "Recruiting built as a system: sourcing channels, employer brand, and onboarding that holds on to the people you hire.",
      tools: ["SAP SuccessFactors ATS", "Indeed", "Glassdoor", "Dayforce", "SAP SuccessFactors HRIS"],
      top: [
        { metric: "−50%", metricLabel: "External recruiting cost, year 1", company: "Epiroc · 2022 – 2026",
          title: "Regional HR Center of Excellence recruitment", text: "Built recruitment and onboarding into the new NASA HR Center of Excellence. External recruiting costs fell 50% in year one." },
        { metric: "225", metricLabel: "Hires for a greenfield mill, on time", company: "Commercial Metals Company · 2015 – 2021",
          title: "Mass recruitment for the Durant, OK micro-mill", text: "With production under a year away and no staffing plan, built a wave-based hiring plan, a multi-channel ad campaign, and standard screening and interview templates, using state workforce resources. Filled all roles on time or early with under 10% first-year turnover and no added HR headcount." },
        { metric: "#2", metricLabel: "Source of hire", company: "Commercial Metals Company · 2015 – 2021",
          title: "Indeed partnership", text: "Piloted Indeed on our hardest-to-fill roles, won leadership funding to expand, and took the results to CMC's HR leadership team. CMC became an Indeed preferred employer, reaching 60% of applications, and Indeed became the No. 2 source of hires after referrals." },
        { metric: "$2K", metricLabel: "Driver sign-on bonus, adopted companywide", company: "Commercial Metals Company · 2016 – 2021",
          title: "Truck driver recruitment & retention", text: "Drivers were leaving faster than we could hire them. Found driver pay below the 25th percentile and won approval for $1–2/hr increases across the region, a $2K sign-on bonus, and targeted ads and site banners. Other regions followed on pay, and the sign-on bonus was adopted across CMC and still in place four years later." },
        { metric: "20% → <3%", metricLabel: "Relocation exception rate", company: "Commercial Metals Company · 2015 – 2021",
          title: "Corporate relocation program", text: "Relocation drew constant complaints and exceptions above 20%. Ran a vendor RFP and an employee survey, then replaced ad hoc benefits with three standard policies and a new vendor. Exceptions fell under 3% and satisfaction rose from the 80s to 97%." }
      ],
      more: [
        { company: "Commercial Metals Company & Epiroc", title: "SuccessFactors rollout", text: "Partnered with HRIS on implementation of SuccessFactors HRIS, ATS, Compensation and Recruitment modules." },
        { metric: "2 → 16", metricLabel: "US interns hired, year 1", company: "Epiroc", title: "Early career & university recruitment", text: "Established Epiroc's first early career and university recruitment strategy, growing US intern hiring from 2 to 16 in the program's first year." },
        { metric: "10+", metricLabel: "VP & GM roles", company: "Epiroc", title: "Executive hiring", text: "Led end-to-end hiring for VP and GM roles: job ads, candidate assessment, interviews, final decisions and candidate feedback." },
        { metric: "80–90", metricLabel: "Onboarding NPS", company: "Epiroc", title: "Onboarding experience", text: "Reached onboarding NPS scores of 80–90 from candidates and managers by focusing on customer experience and automation." },
        { company: "Epiroc", title: "Employment branding function", text: "Built the employment branding function: Best Places to Work participation, partnerships with Indeed and Glassdoor, and the \"Proud to be Epiroc\" series featuring career stories of top talent across the region." },
        { company: "Epiroc", title: "Immigration provider", text: "Ran the RFP for and implemented a new immigration provider." },
        { company: "Commercial Metals Company · 2016 – 2021", title: "HR-owned recruiting for the central region", text: "Moved HR from posting jobs and forwarding résumés to owning the full process: kickoff meetings, screening, interview coordination and offers. Brought in recruiter training, ran biweekly staffing reviews, hired two recruiters (including for a 700-person plant with 30+ openings), and added digital marketing, referral and sign-on programs. Managers reported faster fills and better candidates." },
        { company: "Commercial Metals Company · 2016 – 2021", title: "First regional recruiter roles", text: "Introduced the first recruiter roles into the region. They were eventually adopted across the entire company and are still in place today." },
        { metric: "20", metricLabel: "Hires in 3 months", company: "Texas Instruments · 2007 – 2010", title: "Factory start-up team", text: "Hired a 20-person start-up team in three months and introduced new interview and onboarding processes to improve screening and retention." },
        { metric: "8", metricLabel: "Expats relocated", company: "Texas Instruments · 2007 – 2010", title: "Greenfield expat staffing, Clark, Philippines", text: "Recruited and relocated 8 expats from the US to Clark, Philippines for a three-year Assembly/Test factory greenfield. The project was delivered on time and on budget." }
      ] }
  ],

  interests: [
    { icon: "heart", title: "Family", text: "Proud mom of a teenage son who runs cross-country and plays percussion in the marching band. Plus a wonderful partner, two stepdaughters, our dog Cocoa, and cats Brie & Cheddar." },
    { icon: "plane", title: "Travel", text: "Tracked on the map above — always planning the next one." },
    { icon: "utensils", title: "Food", text: "Exploring global cuisines." },
    { icon: "design", title: "Design", text: "Designed luxury kitchen and bathroom remodels." },
    { icon: "book", title: "Reading", text: "Historical fiction and sci-fi." },
    { icon: "dumbbell", title: "Fitness", text: "Orangetheory." },
    { icon: "mountain", title: "Nature", text: "Trails, parks and time outdoors." },
    { icon: "theater", title: "Theater", text: "Broadway shows and movies." }
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
