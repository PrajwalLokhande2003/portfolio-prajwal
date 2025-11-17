export const navItems = [
    { name: "Home", link: "#" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
  ];

  export const gridItems = [
    {
      id: 1,
      title: "About Me",
      description: "As a Software Developer, I have experience working with various technologies like Java, DBMS, DSA, Git, SQL, SDLC, React, NodeJS, HTML, CSS, Javascript and Typescript.",
      description2:"Additionally, I served as the Beta MLSA at Microsoft Learn, organizing workshops and events to teach Microsoft technologies. I have a strong interest in Microsoft Cloud and software development.",
      description3: "I have experience in Web Development, creating responsive websites with HTML, CSS, JavaScript, Next.js, React and NodeJS. Moreover, As a UI/UX designer I'm proficient in Figma, and Canva. I am passionate about coding and skilled in C++, Java, Data Structures and Algorithms, AI, and Design and Analysis of Algorithms.",
      description4: "I was also contribute in open source projects. My goal is to leverage my skills to create innovative solutions and contribute to technological advancements. I'm always eager to learn and explore new technologies.",
      className: "lg:col-span-2 md:col-span-2 md:row-span-2",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start mt-5",
      img: "/prajwal.png",
      spareImg: "/bg.png",
    },
    {
      id: 3,
      title: "I'm highly flexible in working across different time zones.",
      description: "",
      className: "lg:col-span-1 md:col-span-2 md:row-span-1 lg:text-xl",
      imgClassName: "",
      titleClassName: "justify-start text-justify",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-1 md:col-span-2 md:row-span-1",
      imgClassName: "w-full h-full",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
  ];

  export const projects = [
    {
      id: 1,
      title: "Multi User Blogging Platform",
      des: "Built a full-stack blog management platform using Next.js, tRPC, and PostgreSQL with type-safe API integration.",
      img: "/Project1.png",
      iconLists: ["/Python.png", "/flaskicon.webp", "/html-1.svg", "/css-3.svg", "logo-javascript.svg"],
      link: "https://multi-user-blogging-platform-five.vercel.app/",
    },
    {
      id: 2,
      title: "E-commerce Admin Dashboard",
      des: "Developed a full-featured admin panel for managing products, orders, customers, and analytics.",
      img: "/Project2.png",
      iconLists: ["/Python.png", "/html-1.svg", "/css-3.svg", "logo-javascript.svg"],
      link: "https://ecommdashboard.vercel.app/",
    },
    {
      id: 3,
      title: "Group Chat Application",
      des: "Created a real-time group chat app with WebSocket for instant messaging and dynamic user presence updates.",
      img: "/Project3.png",
      iconLists: ["/re.svg", "/tail.svg", "/html-1.svg", "/css-3.svg"],
      link: "https://webchat-phi-dusky.vercel.app/",
    },
    {
      id: 4,
      title: "Alabay's Dog Website",
      des: "Developed a responsive website for Alabay's Dog breed using web technologies.",
      img: "/Project4.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/html-1.svg", "/css-3.svg", "logo-javascript.svg"],
      link: "https://alabays.netlify.app/",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Web Development Intern",
      companyTitle: "NullClass: Oct 2024 - Nov 2024",
      desc: "• Built and maintained a real-time chat app using WebSocket with reliable delivery and low-latency updates.",
      desc2: "• Optimized MongoDB queries and indexes, cutting query time by 40%.",
      className: "md:col-span-2",
      thumbnail: "/nullclassdotcom_logo.jpeg",
    },
    {
      id: 2,
      title: "Beta MLSA",
      companyTitle: "Microsoft Learn: Apr 2024 - May 2024",
      desc: "• Fostered collaboration within a global network of campus leaders, driving project success.",
      desc2: "• Demonstrated leadership through public speaking and technical mentorship.",
      className: "md:col-span-2",
      thumbnail: "/microsoft.png",
    },
    {
      id: 3,
      title: "Contributor",
      companyTitle: "Pipedream: Oct 2025 - Present",
      desc: "• Fixed bugs and improved documentation for open-source projects, enhancing usability.",
      desc2: "• Write 1000+ lines of code for various integrations and workflows.",
      className: "md:col-span-2",
      thumbnail: "/pipedream.jpeg",
    },
  ];

  export const Education = [
    {
      id: 1,
      title: "HVPM College of Engineering & Technology, Amravati",
      desc: "Bachelors of Engineering in Electronic and Telecommunication Engineering",
      timeLine: "Dec 2021 - Jun 2025",
      result: " CGPA 6.57/10",
      className: "md:col-span-2",
      thumbnail: "/graduation.png",
    },
    {
      id: 2,
      title: "Jijabai Hanumantrao Deshmukh Science Junior College Jarud",
      desc: "Class 12th (PCMB) - HSC",
      timeLine: "May 2020 - May 2021",
      result: "80%",
      className: "md:col-span-2",
      thumbnail: "/school.png",
    },
    {
      id: 3,
      title: "Smt. Rampyaribai Chandak High School, Loni",
      desc: "Class 10th - SSC",
      timeLine: "May 2018 - May 2019",
      result: "CGPA 68%",
      className: "md:col-span-2",
      thumbnail: "/hs.png",
    },
  ];
  

  export const socialMedia = [
    {
      id: 1,
      img: "/linkedin.png",
      link: "https://www.linkedin.com/in/prajwal-lokhande-4b8493241/"
    },
    {
      id: 2,
      img: "/github.png",
      link: "https://github.com/PrajwalLokhande2003"
    },
    {
      id: 3,
      img: "/wp.png",
      link: "https://wa.me/+919665513622"
    },
    {
      id: 4,
      img: "/insta.png",
      link: "https://www.instagram.com/prajwallokhande17/"
    },
  ];

  export interface Skill {
    imgSrc: string;
    imgAlt: string;
    name: string;
    subtitle: string;
  }
  
  export const webDevelopmentSkills: Skill[] = [
    {
      imgSrc: "/html-1.svg",
      imgAlt: "HTML",
      name: "HTML",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/css-3.svg",
      imgAlt: "CSS",
      name: "CSS",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/react-2.svg",
      imgAlt: "React",
      name: "React",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/Tailwind_CSS_Logo.svg.png",
      imgAlt: "Tailwind CSS",
      name: "Tailwind CSS",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/next.svg",
      imgAlt: "Next.js img",
      name: "Next.js",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/nodejsicon.png",
      imgAlt: "NodeJs",
      name: "NodeJs",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/mysql.png",
      imgAlt: "MySQL",
      name: "MySQL",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/postgresql.png",
      imgAlt: "PostgreSQL",
      name: "PostgreSQL",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/mongoicon.png",
      imgAlt: "MongoDB",
      name: "MongoDB",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/expressjs.png",
      imgAlt: "Express JS",
      name: "Express JS",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/spring-boot.png",
      imgAlt: "Spring Boot",
      name: "Spring Boot",
      subtitle: "Intermediate",
    }
  ];
  
  export const langAndTools: Skill[] = [
    {
      imgSrc: "/C++.png",
      imgAlt: "C++",
      name: "C++",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/Java.png",
      imgAlt: "Java",
      name: "Java",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/logo-javascript.svg",
      imgAlt: "Javascript",
      name: "Javascript",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/Typescript.png",
      imgAlt: "Typescript",
      name: "Typescript",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/dock.svg",
      imgAlt: "Docker",
      name: "Docker",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/postman.png",
      imgAlt: "Postman",
      name: "Postman",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/git-icon.svg",
      imgAlt: "Git",
      name: "Git",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/figma.png",
      imgAlt: "Figma",
      name: "Figma",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/canva.png",
      imgAlt: "Canva",
      name: "Canva",
      subtitle: "Advanced",
    },
  ];
  