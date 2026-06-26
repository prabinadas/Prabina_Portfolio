export const profileData = {
  name: 'Prabina Kumar Das',
  title: 'Full Stack Freelancer',
  subtitle: 'MERN Stack Specialist | Real-Time Systems',
  location: 'Bhubaneswar, Odisha',
  bio: "I'm a Full Stack Developer passionate about building scalable web applications. Specialized in MERN stack with real-time socket.io implementations. Currently available for new projects.",
  longBio: "My approach is simple: understand the problem deeply, architect it cleanly, and build it to last. I care about performance, maintainability, and the experience of everyone who touches the software — users and engineers alike.",
  email: 'prabinakumardas08@gmail.com',
  phone: '9040567146',
  profileImage: '/Profile_pic.png',
};

export const stats = [
  {
    number: '5+',
    label: 'Production Apps Shipped',
  },
  {
    number: '6',
    label: 'Certifications Earned',
  },
  {
    number: '3',
    label: 'Real-Time Platforms Built',
  },
  {
    number: '2+',
    label: 'Years of Consistent Learning',
  },
];

export const skillsData = {
  languages: {
    category: 'Languages',
    skills: ['JavaScript', 'Java', 'Python', 'C'],
  },
  frontend: {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  backend: {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
  },
  database: {
    category: 'Database & Cloud',
    skills: ['MongoDB', 'MySQL', 'Mongoose', 'Cloud Basics'],
  },
  realtime: {
    category: 'Realtime & Media',
    skills: ['Socket.io', 'WebRTC', 'STUN / TURN'],
  },
  devops: {
    category: 'DevOps & Tooling',
    skills: ['Git / GitHub', 'Docker', 'Linux', 'Postman'],
  },
};

export const experienceData = [
  {
    year: '2022 - 2026',
    title: 'Self-Driven Learning & Skill Development',
    company: 'Full Stack Development Journey',
    description: 'Continuously improved and mastered Full Stack technologies, focusing on MERN stack, real-time systems, and scalable architecture.',
    achievements: [
      'Completed multiple projects from concept to production',
      'Specialized in Socket.io and real-time applications',
      'Earned multiple certifications across platforms',
    ],
  },
  {
    year: '2026 - Present',
    title: 'Full Stack Freelancer',
    company: 'Independent',
    description: 'Providing end-to-end web development solutions for clients. Building production-grade applications with focus on performance, scalability, and user experience.',
    achievements: [
      '5+ production applications shipped and maintained',
      'Specialized in MERN stack and real-time systems',
      'Currently available for full-time and freelance opportunities',
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'Rentify Car',
    description: 'A real-time car rental platform that revolutionizes the vehicle booking experience. Users can browse premium cars, select their preferred location, and book vehicles with affordable daily pricing. The platform provides location-based availability, instant confirmations, and transparent pricing for both budget-conscious and premium customers.',
    longDescription: 'Rentify Car is a full-featured car rental management system built with a modern tech stack. It offers real-time availability tracking, dynamic pricing based on location and demand, and a seamless user experience. The platform handles complex booking logic, user authentication, payment processing, and includes admin dashboards for fleet management.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JavaScript'],
    image: '/projects/rentify-car.jpg',
    liveLink: 'https://rentify-zone.onrender.com/',
    githubLink: 'https://github.com/prabinadas/Rentify-car',
    status: 'Deployed',
  },
  {
    id: 2,
    title: 'OK Drive Fleet Monitoring',
    description: 'An advanced real-time fleet management system that monitors vehicle speeds and calculates traffic violations in real-time. The system automatically detects overspeed violations and generates fines based on road safety regulations. Built with Socket.io for instant data synchronization and live tracking.',
    longDescription: 'OK Drive is a comprehensive fleet monitoring solution designed for transportation companies and traffic management authorities. It provides real-time vehicle tracking, speed monitoring, violation detection, and automated fine calculation. The platform uses WebSockets for live data streaming and integrates with mapping services for location tracking. Features include driver behavior analysis, compliance reporting, and predictive maintenance alerts.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebSockets'],
    image: '/projects/ok-drive.jpg',
    liveLink: 'https://ok-drive-monitoring.vercel.app/',
    githubLink: 'https://github.com/prabinadas/OK_Drive_Monitoring',
    status: 'Deployed',
  },
  {
    id: 3,
    title: 'E-commerce Fruit Business',
    description: 'A comprehensive e-commerce platform designed for fruit retailers and wholesalers. Enables business owners to track daily inventory requirements, manage stock levels, process sales transactions, and monitor business analytics. Includes features for inventory management, order tracking, and customer relationship management.',
    longDescription: 'This full-stack e-commerce solution caters to the fruit business sector with specialized features for perishable goods management. The platform includes real-time inventory tracking, automated stock alerts, supplier management, order fulfillment, and customer ordering. Business owners can track daily sales metrics, manage supplier relationships, and optimize stock based on demand patterns.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/fruit-ecommerce.jpg',
    liveLink: null,
    githubLink: 'https://github.com/prabinadas/E-commerce-Fruits-web',
    status: 'In Development',
  },
  {
    id: 4,
    title: 'Banking System',
    description: 'A secure banking application that provides users with comprehensive transaction management. Users can view real-time transaction history, manage debit and credit operations, track account balances, and perform various banking operations with complete security and audit trails.',
    longDescription: 'A robust banking system backend built to handle critical financial operations. The platform manages user accounts, transaction processing, balance management, and compliance requirements. Features include transaction history, fund transfers, bill payments, and comprehensive audit logging for regulatory compliance.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    image: '/projects/banking-system.jpg',
    liveLink: null,
    githubLink: null,
    status: 'Development',
  },
];

export const servicesData = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Full-stack web applications built with modern technologies, responsive design, and optimal performance.',
  },
  {
    icon: 'stack',
    title: 'MERN Stack Development',
    description: 'Specialized in MongoDB, Express, React, and Node.js for building scalable, production-grade applications.',
  },
  {
    icon: 'api',
    title: 'API Development',
    description: 'RESTful and real-time APIs with WebSocket support, optimized for performance and scalability.',
  },
  {
    icon: 'design',
    title: 'UI/UX Development',
    description: 'Beautiful, intuitive interfaces with smooth animations and responsive design across all devices.',
  },
];

export const certificationsData = [
  {
    title: 'Full Stack Development Certificate',
    issuer: 'InternShala',
    date: '2024',
    credentialLink: '#',
  },
  {
    title: 'Internship Completion Certificate',
    issuer: 'WeIntern',
    date: '2024',
    credentialLink: '#',
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/prabinadas',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prabinadas/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:prabinakumardas08@gmail.com',
    icon: 'mail',
  },
];

export const contactInfo = {
  email: 'prabinakumardas08@gmail.com',
  phone: '9040567146',
  location: 'Bhubaneswar, Odisha, India',
  github: 'https://github.com/prabinadas',
  linkedin: 'https://www.linkedin.com/in/prabinadas/',
  resume: '/Prabina_Kumar_Das_Resume.pdf',
};

export const testimonials = [
  {
    name: 'Client Name',
    role: 'Project Manager',
    company: 'Company Name',
    feedback: 'Exceptional developer with deep understanding of full-stack architecture. Delivered high-quality code on time.',
    image: '/testimonials/client1.jpg',
  },
];