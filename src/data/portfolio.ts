import inventoryImage from '@/assets/project-inventory.jpg';
import healthcareImage from '@/assets/project-healthcare.jpg';
import insuranceImage from '@/assets/project-insurance.jpg';
import chatImage from '@/assets/project-chat.jpg';
import expenseImage from '@/assets/project-expense.jpg';
import biImage from '@/assets/project-bi.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  outcome: string;
  category: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  type: 'work' | 'education' | 'certification';
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: 'inventory-management',
    title: 'Inventory & Sales Management System',
    description: 'Full-stack Laravel application for comprehensive inventory and sales management with real-time analytics.',
    longDescription: 'A comprehensive web-based solution designed to streamline inventory management, sales tracking, and customer relationship management for retail businesses.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Chart.js'],
    features: [
      'Real-time inventory tracking and low-stock alerts',
      'Sales analytics dashboard with visual reports',
      'Customer management and purchase history',
      'Multi-user access with role-based permissions',
      'Automated invoice generation and email notifications',
      'Product categorization and barcode scanning'
    ],
    outcome: 'Improved inventory accuracy by 95% and reduced manual processing time by 60% for client businesses.',
    category: 'Web Development',
    image: inventoryImage
  },
  {
    id: 'healthcare-booking',
    title: 'Healthcare Appointment Booking System',
    description: 'Django-powered healthcare platform enabling seamless appointment scheduling and patient management.',
    longDescription: 'A robust healthcare management platform that connects patients with healthcare providers through an intuitive booking system.',
    techStack: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'Redis'],
    features: [
      'Online appointment booking with calendar integration',
      'Patient profile management and medical history',
      'Doctor availability management and scheduling',
      'Automated SMS and email reminders',
      'Prescription management and digital records',
      'Multi-clinic support with branch management'
    ],
    outcome: 'Reduced appointment scheduling time by 70% and improved patient satisfaction scores by 40%.',
    category: 'Web Development',
    image: healthcareImage
  },
  {
    id: 'insurance-claims',
    title: 'Insurance Claims & Payment Processing',
    description: 'Spring Boot enterprise application for automated insurance claims processing and payment management.',
    longDescription: 'An enterprise-grade system for insurance companies to automate claims processing, fraud detection, and payment workflows.',
    techStack: ['Spring Boot', 'Java', 'MySQL', 'Thymeleaf', 'REST APIs', 'JUnit'],
    features: [
      'Automated claims processing workflow',
      'Fraud detection algorithms and risk assessment',
      'Payment gateway integration for settlements',
      'Document management and digital signatures',
      'Real-time claims status tracking',
      'Comprehensive reporting and analytics'
    ],
    outcome: 'Reduced claims processing time by 50% and improved fraud detection accuracy by 85%.',
    category: 'Enterprise Software',
    image: insuranceImage
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat & Collaboration App',
    description: 'Node.js application with WebSocket integration for real-time communication and team collaboration.',
    longDescription: 'A modern collaboration platform featuring real-time messaging, file sharing, and video conferencing capabilities.',
    techStack: ['Node.js', 'Express', 'Socket.io', 'MongoDB', 'React', 'WebRTC'],
    features: [
      'Real-time messaging with typing indicators',
      'File sharing and media upload capabilities',
      'Video and voice calling with WebRTC',
      'Channel-based team organization',
      'Message encryption and security features',
      'Mobile-responsive progressive web app'
    ],
    outcome: 'Facilitated communication for 500+ users with 99.9% uptime and sub-second message delivery.',
    category: 'Real-time Applications',
    image: chatImage
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker Mobile App',
    description: 'Kotlin-based Android application for personal finance management with AI-powered categorization.',
    longDescription: 'A comprehensive mobile application that helps users track expenses, set budgets, and achieve financial goals through intelligent insights.',
    techStack: ['Kotlin', 'Android SDK', 'Room Database', 'Retrofit', 'Material Design', 'Chart Libraries'],
    features: [
      'AI-powered expense categorization',
      'Budget tracking with visual progress indicators',
      'Receipt scanning and OCR text extraction',
      'Financial goal setting and progress monitoring',
      'Detailed analytics and spending patterns',
      'Secure data encryption and cloud backup'
    ],
    outcome: 'Helped users reduce unnecessary spending by 30% and improve financial awareness through detailed insights.',
    category: 'Mobile Development',
    image: expenseImage
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Dashboard',
    description: 'Comprehensive BI solution using Power BI, Tableau, and Python for advanced data analytics and visualization.',
    longDescription: 'An enterprise business intelligence platform that transforms raw data into actionable insights through interactive dashboards and automated reporting.',
    techStack: ['Power BI', 'Tableau', 'Python', 'Pandas', 'SQL Server', 'Excel', 'DAX'],
    features: [
      'Interactive dashboards with drill-down capabilities',
      'Automated data pipeline and ETL processes',
      'Predictive analytics and forecasting models',
      'Real-time KPI monitoring and alerts',
      'Custom report generation and scheduling',
      'Multi-source data integration and cleansing'
    ],
    outcome: 'Increased data-driven decision making by 80% and reduced reporting time from days to minutes.',
    category: 'Data Analytics',
    image: biImage
  }
];

export const experiences: Experience[] = [
  {
    id: 'cybasoft',
    title: 'Full Stack Developer',
    company: 'Cybasoft',
    location: 'Remote, United States',
    duration: 'June 2025 – Present',
    description: [
      'Delivered responsive web and backend solutions tailored to individual client needs across different industries',
      'Worked in dynamic project environments, switching between stacks such as React, Django, Flask, and Node.js',
      'Managed RESTful integrations, built database queries, and maintained CMS-based solutions'
    ],
    type: 'work'
  },
  {
    id: 'ddd',
    title: 'Data Annotation Specialist – AI Projects',
    company: 'Digital Divide Data (DDD)',
    location: 'Remote',
    duration: 'May 2025 – Present',
    description: [
      'Created structured, high-quality annotated datasets to support LLM training in health and agriculture',
      'Conducted slot-filling, intent tagging, and evaluation of utterance-level predictions'
    ],
    type: 'work'
  },
  {
    id: 'sama',
    title: 'AI Evaluator',
    company: 'Sama Kenya',
    location: 'Kenya',
    duration: 'Sept 2024 – Dec 2024',
    description: [
      'Reviewed model-generated content for alignment with instructions and user queries',
      'Participated in feedback cycles to enhance accuracy of vision-language alignment systems'
    ],
    type: 'work'
  },
  {
    id: 'freelance',
    title: 'Freelance Web Developer, SEO Copywriter & Content Mentor',
    company: 'Self-Employed',
    location: 'Remote',
    duration: 'May 2024 – Sept 2024',
    description: [
      'Built and customized websites using WordPress and Wix; optimized page speed and structure',
      'Mentored writers on structuring blog content for readability, tone, and SEO',
      'Set up tracking tools and email integrations for small business clients'
    ],
    type: 'work'
  },
  {
    id: 'echo-tech',
    title: 'Virtual Assistant',
    company: 'Echo Tech Innovations',
    location: 'Remote',
    duration: 'Feb 2021 – May 2024',
    description: [
      'Handled email communications, meeting scheduling, and document management for executive support',
      'Updated client websites and coordinated digital engagement activities',
      'Supported CRM entries, internal reports, and content uploads'
    ],
    type: 'work'
  },
  {
    id: 'moja',
    title: 'Monitoring and Evaluation Staff',
    company: 'Moja Expressway',
    location: 'Kenya',
    duration: 'Mar 2022 – May 2023',
    description: [
      'Collected operational road use data and visualized key metrics in digital dashboards',
      'Contributed to monthly M&E reports used in partner evaluations'
    ],
    type: 'work'
  },
  {
    id: 'university',
    title: 'Bachelor of Science in Statistics',
    company: 'University of Nairobi',
    location: 'Nairobi, Kenya',
    duration: '2015 – 2019',
    description: [
      'Comprehensive study of statistical methods, data analysis, and mathematical modeling',
      'Specialized in data visualization, hypothesis testing, and statistical inference'
    ],
    type: 'education'
  },
  {
    id: 'moringa',
    title: 'Software Engineering Program',
    company: 'Moringa School',
    location: 'Kenya',
    duration: 'May 2024 – Jan 2025',
    description: [
      'Built and deployed full stack web apps using modern frameworks',
      'Used Git, API endpoints, and agile development principles',
      'Gained expertise in React, Python, JavaScript, and database management'
    ],
    type: 'certification'
  },
  {
    id: 'alx',
    title: 'Virtual Assistant Program',
    company: 'ALX Africa',
    location: 'Remote',
    duration: 'July 2024 – Sept 2024',
    description: [
      'Trained in remote work tools, communication, and productivity systems',
      'Specialized in client management and digital collaboration'
    ],
    type: 'certification'
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', level: 95 },
  { name: 'JavaScript', category: 'Programming Languages', level: 90 },
  { name: 'PHP', category: 'Programming Languages', level: 85 },
  { name: 'Java', category: 'Programming Languages', level: 80 },
  { name: 'Kotlin', category: 'Programming Languages', level: 75 },
  { name: 'R', category: 'Programming Languages', level: 70 },
  
  // Frontend Technologies
  { name: 'React', category: 'Frontend Technologies', level: 90 },
  { name: 'Next.js', category: 'Frontend Technologies', level: 85 },
  { name: 'HTML/CSS', category: 'Frontend Technologies', level: 95 },
  { name: 'Bootstrap', category: 'Frontend Technologies', level: 90 },
  { name: 'Tailwind CSS', category: 'Frontend Technologies', level: 85 },
  
  // Backend Technologies
  { name: 'Laravel', category: 'Backend Technologies', level: 90 },
  { name: 'Django', category: 'Backend Technologies', level: 85 },
  { name: 'Spring Boot', category: 'Backend Technologies', level: 80 },
  { name: 'Node.js', category: 'Backend Technologies', level: 85 },
  { name: 'Express.js', category: 'Backend Technologies', level: 80 },
  
  // Databases
  { name: 'MySQL', category: 'Databases', level: 90 },
  { name: 'PostgreSQL', category: 'Databases', level: 85 },
  { name: 'MongoDB', category: 'Databases', level: 80 },
  { name: 'SQL Server', category: 'Databases', level: 75 },
  
  // Data Analysis & Visualization
  { name: 'Power BI', category: 'Data Analysis', level: 90 },
  { name: 'Tableau', category: 'Data Analysis', level: 85 },
  { name: 'Pandas', category: 'Data Analysis', level: 90 },
  { name: 'Matplotlib', category: 'Data Analysis', level: 85 },
  { name: 'Excel', category: 'Data Analysis', level: 95 },
  
  // Tools & Others
  { name: 'Git/GitHub', category: 'Tools', level: 90 },
  { name: 'Docker', category: 'Tools', level: 75 },
  { name: 'AWS', category: 'Tools', level: 70 },
  { name: 'Figma', category: 'Tools', level: 80 },
  { name: 'WordPress', category: 'Tools', level: 85 }
];