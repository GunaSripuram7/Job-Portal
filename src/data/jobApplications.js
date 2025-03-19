const jobApplications = [
    {
        id: "1",
        title: "Frontend Developer – Google",
        skills: ["React.js", "SQL", "Cloud Computing"],
        description: "Develop and maintain scalable frontend applications for Google’s cloud-based services. Work with React.js to create dynamic user interfaces and optimize SQL-based data queries for enhanced performance.",
        company: "Google",
        location: "Mountain View, CA"
    },
    {
        id: "2",
        title: "Cybersecurity Analyst – IBM",
        skills: ["Cybersecurity", "Python", "SQL"],
        description: "Monitor, analyze, and prevent security threats across IBM’s cloud infrastructure. Use Python-based automation to detect vulnerabilities and implement SQL-driven security audits.",
        company: "IBM",
        location: "Armonk, NY"
    },
    {
        id: "3",
        title: "Machine Learning Engineer – Tesla",
        skills: ["Python", "Machine Learning", "Data Analysis"],
        description: "Build AI-powered models to optimize Tesla’s autonomous driving systems. Leverage deep learning and real-time data analysis to improve vehicle safety and performance.",
        company: "Tesla",
        location: "Palo Alto, CA"
    },
    {
        id: "4",
        title: "DevOps Engineer – Amazon",
        skills: ["DevOps", "Cloud Computing", "SQL"],
        description: "Manage Amazon’s cloud deployments using DevOps best practices. Implement automated CI/CD pipelines and optimize SQL-driven database operations for high availability.",
        company: "Amazon",
        location: "Seattle, WA"
    },
    {
        id: "5",
        title: "Full-Stack Developer – Netflix",
        skills: ["React.js", "Python", "SQL"],
        description: "Develop and maintain scalable web applications for Netflix’s content management system. Use React.js for UI enhancements and Python for backend services integrated with SQL databases.",
        company: "Netflix",
        location: "Los Gatos, CA"
    },
    {
        id: "6",
        title: "Data Scientist – Meta (Facebook)",
        skills: ["Data Analysis", "Machine Learning", "Python"],
        description: "Work on predictive analytics and AI-driven insights to improve Meta’s social media algorithms. Use Python-based machine learning models to analyze user behavior and trends.",
        company: "Meta (Facebook)",
        location: "Menlo Park, CA"
    },
    {
        id: "7",
        title: "Project Manager (IT) – Microsoft",
        skills: ["Project Management", "Cloud Computing", "Cybersecurity"],
        description: "Oversee enterprise-level cloud infrastructure projects at Microsoft. Manage security compliance, cloud deployments, and cross-functional development teams.",
        company: "Microsoft",
        location: "Redmond, WA"
    },
    {
        id: "8",
        title: "Cloud Solutions Architect – Oracle",
        skills: ["Cloud Computing", "DevOps", "SQL"],
        description: "Design and implement cloud infrastructure solutions for Oracle’s enterprise clients. Optimize cloud resource allocation and ensure smooth DevOps-driven workflows.",
        company: "Oracle",
        location: "Redwood City, CA"
    },
    {
        id: "9",
        title: "Digital Marketing Specialist – Spotify",
        skills: ["Digital Marketing", "Data Analysis", "Python"],
        description: "Use AI-driven marketing strategies to enhance Spotify’s user engagement. Implement Python-based data models to analyze audience behavior and optimize digital ad campaigns.",
        company: "Spotify",
        location: "Stockholm, Sweden"
    },
    {
        id: "10",
        title: "AI Engineer – Apple",
        skills: ["Machine Learning", "Python", "Cloud Computing"],
        description: "Develop AI-driven features for Apple’s Siri and voice recognition technology. Utilize cloud-based AI models to enhance user experience across Apple devices.",
        company: "Apple",
        location: "Cupertino, CA"
    },
    {
        id: "11",
        title: "Security Engineer – Cisco",
        skills: ["Cybersecurity", "DevOps", "SQL"],
        description: "Strengthen Cisco’s network security infrastructure by implementing DevOps-based security practices. Use SQL-driven analytics to detect and prevent cyber threats.",
        company: "Cisco",
        location: "San Jose, CA"
    },
    {
        id: "12",
        title: "Backend Developer – Uber",
        skills: ["Python", "SQL", "Cloud Computing"],
        description: "Build and maintain Uber’s backend systems that handle real-time ride requests. Use SQL for efficient data storage and Python for API development.",
        company: "Uber",
        location: "San Francisco, CA"
    },
    {
        id: "13",
        title: "Software Engineer – Adobe",
        skills: ["React.js", "Machine Learning", "Project Management"],
        description: "Develop intelligent design tools using React.js and machine learning. Work with product managers to implement AI-powered enhancements in Adobe Creative Cloud.",
        company: "Adobe",
        location: "San Jose, CA"
    },
    {
        id: "14",
        title: "Big Data Analyst – Goldman Sachs",
        skills: ["Data Analysis", "SQL", "Cloud Computing"],
        description: "Analyze financial market trends and client investment behavior using SQL-based big data tools. Work with cloud-driven analytical models to optimize risk assessment.",
        company: "Goldman Sachs",
        location: "New York, NY"
    },
    {
        id: "15",
        title: "E-Commerce Growth Analyst – Amazon",
        skills: ["Digital Marketing", "SQL", "Data Analysis"],
        description: "Use SQL-driven insights to enhance Amazon’s marketing campaigns. Analyze customer behavior and optimize digital ad strategies to boost e-commerce sales.",
        company: "Amazon",
        location: "Seattle, WA"
    },
   
    {
        id: "16",
        title: "Mobile App Developer – Samsung",
        skills: ["Kotlin", "Java", "UI/UX"],
        description: "Design and develop high-performance mobile applications for Samsung devices. Focus on intuitive UI/UX and scalable app architecture.",
        company: "Samsung",
        location: "Suwon, South Korea"
    },
    {
        id: "17",
        title: "Full-Stack Developer – Shopify",
        skills: ["React.js", "Node.js", "GraphQL"],
        description: "Create robust e-commerce solutions by developing scalable full-stack applications. Work with modern frameworks and APIs to enhance user experiences.",
        company: "Shopify",
        location: "Ottawa, Canada"
    },
    {
        id: "18",
        title: "Cloud Infrastructure Engineer – DigitalOcean",
        skills: ["Cloud Computing", "DevOps", "Python"],
        description: "Manage and optimize digital infrastructure for scalable cloud deployments. Collaborate with cross-functional teams to deliver reliable cloud services.",
        company: "DigitalOcean",
        location: "New York, NY"
    },
    {
        id: "19",
        title: "QA Automation Engineer – Salesforce",
        skills: ["Selenium", "JavaScript", "Automation"],
        description: "Develop and implement automated tests to ensure product quality and functionality. Collaborate with development teams to integrate testing in CI/CD pipelines.",
        company: "Salesforce",
        location: "San Francisco, CA"
    },
    {
        id: "20",
        title: "UI/UX Designer – Airbnb",
        skills: ["Sketch", "Figma", "Prototyping"],
        description: "Design engaging and user-friendly interfaces that maximize usability for Airbnb’s platform. Work closely with product teams to iterate on design concepts.",
        company: "Airbnb",
        location: "San Francisco, CA"
    },
    {
        id: "21",
        title: "Product Manager – Slack",
        skills: ["Product Management", "Agile", "Communication"],
        description: "Lead product development initiatives from ideation to launch. Collaborate with engineering and design teams to deliver high-impact features.",
        company: "Slack",
        location: "San Francisco, CA"
    },
    {
        id: "22",
        title: "Systems Engineer – IBM",
        skills: ["Systems Engineering", "Linux", "Networking"],
        description: "Optimize complex systems architectures and troubleshoot network issues. Focus on system reliability and performance improvements.",
        company: "IBM",
        location: "Armonk, NY"
    },
    {
        id: "23",
        title: "Data Engineer – Cloudera",
        skills: ["Hadoop", "Spark", "SQL"],
        description: "Develop and maintain large-scale data processing systems using Hadoop and Spark. Optimize data pipelines for efficient batch and streaming processing.",
        company: "Cloudera",
        location: "Santa Clara, CA"
    },
    {
        id: "24",
        title: "Technical Writer – Red Hat",
        skills: ["Technical Writing", "Documentation", "Linux"],
        description: "Produce clear and concise technical documentation for Red Hat’s open source products. Work closely with engineering teams to ensure accuracy.",
        company: "Red Hat",
        location: "Raleigh, NC"
    },
    {
        id: "25",
        title: "Business Analyst – Oracle",
        skills: ["Business Analysis", "SQL", "Data Visualization"],
        description: "Analyze business processes and design data-driven solutions to improve operational efficiency. Present insights through modern data visualization tools.",
        company: "Oracle",
        location: "Redwood City, CA"
    },
    {
        id: "26",
        title: "Security Consultant – Accenture",
        skills: ["Cybersecurity", "Risk Management", "Compliance"],
        description: "Advise enterprise clients on cybersecurity best practices and risk mitigation strategies. Conduct security assessments and develop action plans.",
        company: "Accenture",
        location: "New York, NY"
    },
    {
        id: "27",
        title: "Embedded Systems Engineer – Intel",
        skills: ["C", "C++", "Embedded Systems"],
        description: "Develop and optimize firmware for Intel’s embedded devices. Work on low-level programming and hardware integration under strict performance constraints.",
        company: "Intel",
        location: "Santa Clara, CA"
    },
    {
        id: "28",
        title: "Data Analyst – Visa",
        skills: ["Data Analysis", "Excel", "SQL"],
        description: "Interpret complex datasets to provide actionable insights to improve Visa’s payment systems. Create detailed reports and dashboards for business stakeholders.",
        company: "Visa",
        location: "Foster City, CA"
    },
    {
        id: "29",
        title: "Front-End Engineer – Twitter",
        skills: ["React.js", "JavaScript", "CSS"],
        description: "Develop intuitive front-end interfaces for Twitter’s platform, ensuring high performance and cross-browser compatibility. Collaborate with design teams to enhance user interaction.",
        company: "Twitter",
        location: "San Francisco, CA"
    },
    {
        id: "30",
        title: "Machine Learning Researcher – OpenAI",
        skills: ["Machine Learning", "Python", "Research"],
        description: "Conduct cutting-edge research in artificial intelligence and machine learning. Develop innovative models and publish research findings.",
        company: "OpenAI",
        location: "San Francisco, CA"
    },
    {
        id: "31",
        title: "Backend Engineer – Stripe",
        skills: ["Node.js", "Ruby", "API Development"],
        description: "Build and maintain secure and scalable backend services to support Stripe’s payment infrastructure. Collaborate with cross-functional teams to improve API performance.",
        company: "Stripe",
        location: "San Francisco, CA"
    },
    {
        id: "32",
        title: "DevOps Specialist – GitHub",
        skills: ["DevOps", "Docker", "Kubernetes"],
        description: "Implement and optimize CI/CD pipelines for GitHub’s infrastructure. Manage container orchestration and automate deployment processes.",
        company: "GitHub",
        location: "San Francisco, CA"
    },
    {
        id: "33",
        title: "Software Architect – Atlassian",
        skills: ["Software Architecture", "Java", "Microservices"],
        description: "Design and oversee the implementation of scalable software architectures for Atlassian’s suite of tools. Collaborate with multiple teams to ensure architectural consistency.",
        company: "Atlassian",
        location: "Sydney, Australia"
    },
    {
        id: "34",
        title: "Digital Strategist – HubSpot",
        skills: ["Digital Marketing", "SEO", "Content Strategy"],
        description: "Develop and implement comprehensive digital marketing strategies to boost HubSpot’s brand engagement. Analyze performance metrics to refine campaigns.",
        company: "HubSpot",
        location: "Cambridge, MA"
    },
    {
        id: "35",
        title: "Innovation Manager – IBM",
        skills: ["Innovation", "Project Management", "Emerging Technologies"],
        description: "Lead initiatives to implement cutting-edge technologies that transform core business processes at IBM. Encourage creative problem solving and develop strategic roadmaps.",
        company: "IBM",
        location: "Armonk, NY"
    }
];

export default jobApplications;