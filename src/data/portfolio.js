export const profile = {
  name: 'Harsh Mishra',
  role: 'Full Stack Developer & Machine Learning Enthusiast',
  email: 'mishraharsh4353@gmail.com',
  phone: '+91 8109350879',
  linkedin: 'https://linkedin.com/in/mishraharsh4353',
  github: 'https://github.com/harshmishra048',
  resume: '/Harsh_Mishra_Resume.txt',
  images: {
    portrait: '', // Add your profile image link or /images/profile.jpg
  },
  tagline:
    'I create scalable web apps, AI-powered solutions, and beautiful digital experiences that solve real-world problems.',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: 'Full Stack', label: 'Developer', tone: 'cyan' },
  { value: 'ML', label: 'Enthusiast', tone: 'violet' },
  { value: 'UI/UX', label: 'Designer', tone: 'emerald' },
  { value: 'Creative', label: 'Problem Solver', tone: 'blue' },
];

export const skillGroups = [
  {
    category: 'Programming',
    skills: ['Python', 'Java Beginner'],
    accent: 'cyan',
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Full Stack Development'],
    accent: 'violet',
  },
  {
    category: 'Platforms & CMS',
    skills: ['WordPress', 'Shopify'],
    accent: 'emerald',
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
    accent: 'blue',
  },
  {
    category: 'Design',
    skills: ['Figma', 'Canva', 'UI/UX Design'],
    accent: 'violet',
  },
  {
    category: 'AI & Integrations',
    skills: ['Machine Learning Basics', 'API Integration'],
    accent: 'cyan',
  },
];

export const skillImages = {
  Python: '', // Add skill logo/image link
  'Java Beginner': '',
  HTML: '',
  CSS: '',
  JavaScript: '',
  'Full Stack Development': '',
  WordPress: '',
  Shopify: '',
  Git: '',
  GitHub: '',
  'VS Code': '',
  Figma: '',
  Canva: '',
  'UI/UX Design': '',
  'Machine Learning Basics': '',
  'API Integration': '',
};

export const orbitSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({
    name: skill,
    category: group.category,
    accent: group.accent,
    image: skillImages[skill],
  })),
);

export const projects = [
  {
    title: 'UTSAVAM',
    subtitle: 'Event & Wedding Management Platform',
    category: 'Full Stack Product',
    stack: ['Auth', 'Services', 'Responsive UI'],
    description:
      'A full-stack event and wedding management platform that enables seamless planning through dynamic service listings, user authentication, and intuitive engagement flows.',
    accent: 'cyan',
    image: '', // Add project screenshot/mockup/reference image link
  },
  {
    title: 'SURI',
    subtitle: 'Sign Language Communication Platform',
    category: 'Assistive Technology',
    stack: ['Accessibility', 'UX Research', 'Inclusive UI'],
    description:
      'An inclusive communication platform designed to bridge the gap for deaf and mute individuals, with special attention to rural usability and non-technical users.',
    accent: 'emerald',
    image: '',
  },
  {
    title: 'ShopZonee',
    subtitle: 'Full Stack E-Commerce Website',
    category: 'Commerce',
    stack: ['Products', 'Cart', 'Checkout'],
    description:
      'A complete e-commerce platform with product management, cart system, user authentication, product listings, and a responsive checkout workflow.',
    accent: 'violet',
    image: '',
  },
  {
    title: 'Face Expression Recognition',
    subtitle: 'Computer Vision System',
    category: 'Machine Learning',
    stack: ['Python', 'Vision', 'Real Time'],
    description:
      'A machine learning-based facial expression recognition system using Python libraries and computer vision techniques to classify human emotions in real time.',
    accent: 'blue',
    image: '',
  },
  {
    title: 'Gemini Clone',
    subtitle: 'AI Chatbot Interface',
    category: 'AI Experience',
    stack: ['Chat UI', 'AI Flow', 'UX'],
    description:
      'A conversational AI chatbot interface with real-time response capability, clean UI/UX, and core assistant features focused on interactive usability.',
    accent: 'cyan',
    image: '',
  },
  {
    title: 'Mega Blog Platform',
    subtitle: 'Dynamic Publishing System',
    category: 'Content Platform',
    stack: ['CMS', 'Layout', 'Readability'],
    description:
      'A dynamic blogging platform with structured content management patterns and a readable interface built for long-form publishing.',
    accent: 'violet',
    image: '',
  },
  {
    title: 'Newspaper Website',
    subtitle: 'Real-Time News Platform',
    category: 'API Integration',
    stack: ['External API', 'News Feed', 'Responsive'],
    description:
      'A responsive modern newspaper website integrated with external APIs to fetch real-time news and present it in a polished editorial layout.',
    accent: 'emerald',
    image: '',
  },
  {
    title: 'Agency Website',
    subtitle: 'Professional Services Showcase',
    category: 'UI/UX Design',
    stack: ['Branding', 'Services', 'Lead Flow'],
    description:
      'A professional agency website showcasing services with a clean, client-focused UI design and conversion-minded visual hierarchy.',
    accent: 'blue',
    image: '',
  },
];

export const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'IBM SkillsBuild - Jan Pebl 2.0',
    duration: '2 Months',
    description:
      'Worked on full-stack development projects and gained hands-on experience with real-world application workflows, frontend design, backend logic, and system integration.',
  },
  {
    title: 'Freelance Web Developer & Graphic Designer',
    company: 'Independent Clients',
    duration: 'Project Based',
    description:
      'Designed posters, graphics, and web solutions for clients, delivering creative and user-focused digital products from concept to completion.',
  },
];

export const education = {
  degree: 'B.Tech in Computer Science Engineering',
  institution: 'AKS University, Satna',
  years: '2023 - 2027',
  cgpa: '8.3',
};

export const certifications = [
  {
    title: 'Python & DSA Course - Udemy, Hitesh Choudhary',
    image: '', // Add certificate screenshot/logo/reference image link
  },
  {
    title: 'Full Stack Web Development Certification - University',
    image: '',
  },
  {
    title: 'Microsoft Certification Program - Mentor at University Level',
    image: '',
  },
];

export const achievements = [
  {
    title: '4th Rank',
    detail: 'National Conference Poster Presentation',
    image: '', // Add trophy/event/poster/reference image link
  },
  {
    title: 'Research Paper Published',
    detail: 'Published in IJAI RRE',
    image: '',
  },
  {
    title: 'Smart India Hackathon',
    detail: 'Participant - SIH',
    image: '',
  },
];
