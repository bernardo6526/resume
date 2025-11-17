// be aware of line breaks here, because they are reflected on the main page due to whitespace-pre-line

export const about = {
  text: `
  Fullstack Software Engineer with over 3 years of experience developing scalable, data-driven solutions across frontend and backend ecosystems. Proven track record enhancing operational efficiency and system reliability — including reducing backend deployment time by 75% and improving survey data capture by 50% across 5,000 devices.

  Skilled in Node.js, React.js, Ruby on Rails, PostgreSQL, AWS, and Docker, with a strong background in performance optimization, cloud automation, and system integration. Passionate about clean architecture, continuous improvement, and delivering measurable business outcomes.

  Currently contributing to large-scale backend solutions at Hexagon Mining, where I focus on system optimization, data integration, and reliability engineering.

  Driven by collaboration, innovation, and technical excellence — always seeking to contribute to global-scale projects that create real-world impact.
  `
};

export const experiences = [
  {
    h1: "Backend Software Engineer",
    h2: "Hexagon Mining",
    date: "Feb 2024 - Present",
    location: "Belo Horizonte, Brazil",
    text: `
      Maintained and enhanced a large-scale Fleet Management System (FMS) at Hexagon Mining, part of Hexagon AB, a global technology company with a presence in over 50 countries, improving system reliability, data accuracy, and optimizing clients' operations.
      
      Key Achievements:
      • Enhanced user experience (UX) by reducing data importing errors by 80%, implementing better error handling, and user-friendly messages using Ruby on Rails.
      • Integrated a fleet management system with a mine planning system, automatically importing over 1000 rows of data weekly using a Ruby script scheduled via a cron job on Linux.
      • Accelerated mining operations by eliminating dispatcher time spent on truck-to-scale assignments through an optimization algorithm using Ruby on Rails and Active Record.
      • Reduced backend deployment time by 75% (from 1 month to 1 week) by building a fully virtualized test and production environment using VirtualBox and Linux, replicating the entire backend stack (PostgreSQL, Ruby on Rails, Objective-C, SQL Server, OpenVPN) across distributed servers and clients.
      • Created and maintained a Git repository for the Support team, containing more than 50 scripts and documentation, using Bitbucket.
      
      • Technologies: Ruby, Ruby on Rails, PostgreSQL, Bitbucket, Linux, VirtualBox, Objective-C, SQL Server, and OpenVPN.
    `
  },
  {
    h1: "Frontend Software Engineer",
    h2: "Zanzar Media",
    date: "Jan 2023 - Feb 2024",
    location: "Belo Horizonte, Brazil",
    text: `
      Zanzar is a Brazilian media startup that created TV Zanzar, an in-car advertising platform with tablets mounted on Uber vehicles’ front seats to display interactive ads and surveys to passengers. The system reached over 5,000 devices, helping brands engage riders and measure campaign performance. I worked as a Data Engineer and Frontend Software Engineer, improving the platform’s data infrastructure, analytics, and user experience.

      Key Achievements:
      • Built an offline response buffer for survey tablets, increasing response capture by 50% across 5000 devices using JavaScript and Web Storage API.
      • Refined the tablet user interface for over 20 HTML quizzes/surveys that were deployed to 5000 devices, using HTML and CSS to guarantee responsiveness.
      • Managed Git repositories for two teams (Data and Frontend), using GitLab.

      Technologies: JavaScript, HTML, CSS, GitLab, and Bootstrap.
    `
  },
  {
    h1: "Data Engineer",
    h2: "Zanzar Media",
    date: "Mar 2022 - Feb 2024",
    location: "Belo Horizonte, Brazil",
    text: `
      Key Achievements:
      • Improved performance of large reports in Metabase and PostgreSQL, increasing load speed by 400% through query optimization, data modeling, and data transformation.
      • Deployed an ETL job in the cloud that processes over 500 rows of data daily, using Python, Amazon S3, AWS CLI, Shell, and a cron job.
      • Enabled detection of key business issues by producing five reports weekly using PostgreSQL, Metabase, and applying data analysis.
      • Created high-performance and insightful heatmaps by reducing coordinates load time from hours to seconds, utilizing "Kepler.gl" and Uber H3 in PostgreSQL.

      Technologies: PostgreSQL, Python, Metabase, AWS, Amazon S3, Amazon RDS, and Linux.
    `
  },
  {
    h1: "Fullstack Software Engineer",
    h2: "Omegatel Informatica",
    date: "Jul 2016 - Dec 2016",
    location: "Belo Horizonte, Brazil",
    text: `
     Omegatel Informática is a small technology company based in Belo Horizonte that provides custom software solutions for local businesses. During my internship as a Fullstack Software Engineer, I worked on internal automation tools and prototype projects, gaining hands-on experience with Ruby on Rails, Python, and Git, while contributing to product demos showcased at the FINIT International Technology Fair.

    Key Achievements:
    • Automated employee time tracking, improving HR efficiency by 30%, using Ruby on Rails, HTML, CSS, and ERB templates.
    • Studied Python and basic electronics, creating 3 projects using Raspberry Pi.
    • Practiced while presenting product demos at the FINIT tech exposition (International Business, Innovation, and Technology Fair).
    • Learned to use Git effectively, creating more than 150 commits using GitHub.

    Technologies: Ruby, Python, Ruby on Rails, ERB template, GitHub, HTML, and CSS.
    `
  },
];

export const education = [
  {
    h1: "Postgraduate Certificate in Full Stack Development",
    h2: "Pontifical Catholic University of Minas Gerais",
    date: "Mar 2024 - Apr 2025",
    location: "Belo Horizonte, Brazil",
    text: `• Technologies: Node.js, JavaScript, Jest, Django, Python, Docker, React, HTML, CSS, Cypress, PostgreSQL, MongoDB, and Redis`
  },
  {
    h1: "B.S. in Computer Science",
    h2: "Pontifical Catholic University of Minas Gerais",
    date: "Jan 2017 - Dec 2022",
    location: "Belo Horizonte, Brazil",
    text: `• Technologies: React, React Native, JavaScript, HTML, CSS, Java, C++, C, and PostgreSQL`
  },
  {
    h1: "High School and Information Technology",
    h2: "Pontifical Catholic University of Minas Gerais",
    date: "Feb 2014 - Dec 2016",
    location: "Belo Horizonte, Brazil",
    text: `• Technologies: C#, PHP, .NET, ASP.NET, MySQL, HTML, CSS, JavaScript, and Bootstrap`
  },
];

export const projects = [
    {
    h1: "Resume Website",
    h2: "Frontend Project",
    date: "Nov 2025 - Present",
    location: "Next.js, React.js, TypeScript, Tailwind CSS",
    text: `
      • You're seeing my project firsthand :)
      • GitHub repository: github.com/bernardo6526/resume
    `,
    image: "/projects/resume-website.png"
  },
  {
    h1: "API-REST-NODE",
    h2: "Backend Project",
    date: "Jul 2025 - Present",
    location: "Node.js, Express, PostgreSQL, Sequelize",
    text: `
      • Built a RESTful API for studying purposes
      • Planned enhancements include containerizing the application with Docker, adding unit tests with Jest, implementing a CI/CD pipeline using GitHub Actions, and documenting the API with the OpenAPI Specification
      • GitHub repository: github.com/bernardo6526/api-rest-node
    `,
    image: "/projects/api-rest.png"
  },
  {
    h1: "Pantry Manager",
    h2: "Frontend Project",
    date: "Apr 2021 - Apr 2021",
    location: "HTML, CSS, JavaScript, React",
    text: `
      • SPA and PWA made for managing pantry and shopping lists
      • GitHub repository: github.com/bernardo6526/GerenciadorDeDispensaReact
    `,
    image: "/projects/pantry-manager.png"
  },
];

export const skills = [
  { category: "Programming Languages", items: ["Python", "Ruby", "SQL", "JavaScript", "TypeScript", "Shell", "Objective-C", "Java", "C", "C++", "C#"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "SQL Server", "MongoDB", "Redis", "Neo4j"] },
  { category: "Web", items: ["HTML", "CSS", "JavaScript", "React", "React Native", "Next.js", "Node.js", "PHP"] },
  { category: "Other", items: ["Git", "Docker", "GitHub Actions"] },
];