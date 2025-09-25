import inventoryImage from '@/assets/project-admin.jpg';
import healthcareImage from '@/assets/project-marketing.jpg';
import insuranceImage from '@/assets/project-crm.jpg';
import chatImage from '@/assets/project-ai.jpg';
import expenseImage from '@/assets/project-events.jpg';
import biImage from '@/assets/project-research.jpg';

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
    id: 'executive-support-package',
    title: 'Executive Support & Administrative Management',
    description: 'Comprehensive virtual assistant services providing executive support, calendar management, and administrative coordination for C-level executives.',
    longDescription: 'A complete executive support solution including email management, calendar coordination, meeting scheduling, travel arrangements, and document management for busy executives and entrepreneurs.',
    techStack: ['Google Workspace', 'Microsoft 365', 'Calendly', 'Slack', 'Trello', 'HubSpot'],
    features: [
      'Email filtering, prioritization, and response management',
      'Complex calendar scheduling across multiple time zones',
      'Meeting coordination and preparation with agenda creation',
      'Travel booking and itinerary management',
      'Document organization and filing systems',
      'CRM data entry and customer relationship management'
    ],
    outcome: 'Saved executives 15-20 hours per week, improved meeting efficiency by 40%, and increased overall productivity.',
    category: 'Administrative Support',
    image: inventoryImage
  },
  {
    id: 'digital-marketing-support',
    title: 'Digital Marketing & Content Management',
    description: 'WordPress and Wix website management, SEO optimization, and social media coordination for small businesses and entrepreneurs.',
    longDescription: 'Complete digital presence management including website updates, content creation, SEO optimization, and social media management to boost online visibility.',
    techStack: ['WordPress', 'Wix', 'Google Analytics', 'Canva', 'Hootsuite', 'Mailchimp'],
    features: [
      'Website content updates and maintenance',
      'SEO optimization and keyword research',
      'Social media content creation and scheduling',
      'Email marketing campaign setup and management',
      'Google Analytics tracking and reporting',
      'Blog writing and content strategy development'
    ],
    outcome: 'Increased client website traffic by 65%, improved search rankings by 40%, and boosted social media engagement by 80%.',
    category: 'Digital Marketing',
    image: healthcareImage
  },
  {
    id: 'crm-data-management',
    title: 'CRM Management & Data Organization',
    description: 'HubSpot and Salesforce data management, lead tracking, and customer relationship coordination for growing businesses.',
    longDescription: 'Comprehensive CRM management including data entry, lead qualification, customer communication tracking, and sales pipeline organization.',
    techStack: ['HubSpot', 'Salesforce', 'Pipedrive', 'Google Sheets', 'Zapier', 'Excel'],
    features: [
      'Customer data entry and profile management',
      'Lead qualification and scoring',
      'Sales pipeline tracking and updates',
      'Email campaign management and follow-ups',
      'Customer communication logging',
      'Automated workflow setup and optimization'
    ],
    outcome: 'Improved lead conversion rates by 45%, reduced data entry time by 70%, and enhanced customer satisfaction through better follow-up.',
    category: 'CRM & Sales Support',
    image: insuranceImage
  },
  {
    id: 'ai-annotation-specialist',
    title: 'AI Data Annotation & Quality Assurance',
    description: 'Specialized AI data annotation services for machine learning projects, including NLP tasks, intent detection, and model evaluation.',
    longDescription: 'Professional AI data annotation services supporting machine learning development through high-quality dataset creation and model evaluation.',
    techStack: ['Python', 'Annotation Tools', 'NLP Libraries', 'Quality Assurance Frameworks'],
    features: [
      'Natural Language Processing data annotation',
      'Intent detection and slot filling for chatbots',
      'Model output evaluation and quality assessment',
      'Multilingual content annotation and review',
      'Dataset creation and validation',
      'AI model performance analysis and reporting'
    ],
    outcome: 'Delivered high-quality annotated datasets for 15+ AI projects with 98% accuracy rate and zero delivery delays.',
    category: 'AI & Technical Support',
    image: chatImage
  },
  {
    id: 'event-coordination',
    title: 'Event Planning & Virtual Meeting Coordination',
    description: 'End-to-end event planning and virtual meeting coordination including logistics, vendor management, and attendee communication.',
    longDescription: 'Complete event management services from initial planning to post-event follow-up, specializing in virtual and hybrid events.',
    techStack: ['Zoom', 'Teams', 'Eventbrite', 'Google Forms', 'Calendly', 'Slack'],
    features: [
      'Event planning and timeline management',
      'Vendor coordination and communication',
      'Registration system setup and management',
      'Virtual meeting room setup and technical support',
      'Attendee communication and follow-up',
      'Post-event reporting and feedback collection'
    ],
    outcome: 'Successfully coordinated 25+ events with 500+ total attendees, achieving 95% satisfaction rates and zero technical issues.',
    category: 'Event Management',
    image: expenseImage
  },
  {
    id: 'research-analysis',
    title: 'Market Research & Business Intelligence',
    description: 'Comprehensive market research, competitive analysis, and business intelligence reporting using advanced data analysis tools.',
    longDescription: 'Professional research and analysis services providing actionable business insights through data collection, analysis, and visualization.',
    techStack: ['Excel', 'Google Sheets', 'Python', 'Google Analytics', 'Survey Tools', 'PowerBI'],
    features: [
      'Market research and competitor analysis',
      'Survey design and data collection',
      'Business intelligence reporting',
      'Data visualization and dashboard creation',
      'Trend analysis and forecasting',
      'Strategic recommendations and action plans'
    ],
    outcome: 'Provided research insights that led to 25% increase in market share and helped clients identify 3 new revenue opportunities.',
    category: 'Research & Analytics',
    image: biImage
  }
];

export const experiences: Experience[] = [
  {
    id: 'echo-tech',
    title: 'Senior Virtual Assistant',
    company: 'Echo Tech Innovations',
    location: 'Remote',
    duration: 'Feb 2021 – May 2024',
    description: [
      'Provided comprehensive executive support including email management, calendar scheduling, and meeting coordination',
      'Managed CRM systems, client communications, and digital engagement activities',
      'Updated client websites, coordinated social media campaigns, and handled content management',
      'Streamlined administrative processes resulting in 40% improvement in executive productivity'
    ],
    type: 'work'
  },
  {
    id: 'ddd',
    title: 'AI Data Annotation Specialist',
    company: 'Digital Divide Data (DDD)',
    location: 'Remote',
    duration: 'May 2025 – Present',
    description: [
      'Created high-quality annotated datasets for machine learning projects in healthcare and agriculture',
      'Conducted NLP tasks including slot-filling, intent detection, and utterance-level evaluation',
      'Maintained 98% accuracy rate across all annotation projects with zero delivery delays'
    ],
    type: 'work'
  },
  {
    id: 'sama',
    title: 'AI Model Evaluator',
    company: 'Sama Kenya',
    location: 'Remote',
    duration: 'Sept 2024 – Dec 2024',
    description: [
      'Evaluated AI model outputs for alignment with user instructions and quality standards',
      'Participated in iterative feedback cycles to improve vision-language AI systems',
      'Contributed to enhancement of AI model accuracy and user experience'
    ],
    type: 'work'
  },
  {
    id: 'freelance-va',
    title: 'Freelance Virtual Assistant & Digital Marketing Specialist',
    company: 'Self-Employed',
    location: 'Remote',
    duration: 'May 2024 – Sept 2024',
    description: [
      'Provided virtual assistant services including WordPress/Wix website management and SEO optimization',
      'Managed social media accounts, email marketing campaigns, and content creation for small businesses',
      'Mentored content creators on SEO writing, blog structuring, and digital marketing strategies'
    ],
    type: 'work'
  },
  {
    id: 'moja',
    title: 'Data Collection & Administrative Support Specialist',
    company: 'Moja Expressway',
    location: 'Kenya',
    duration: 'Mar 2022 – May 2023',
    description: [
      'Collected and organized operational data, creating digital dashboards for performance tracking',
      'Prepared monthly monitoring and evaluation reports for management and partner organizations',
      'Supported administrative operations and data management systems'
    ],
    type: 'work'
  },
  {
    id: 'iebc-clerk',
    title: 'Registration Officer & Administrative Support',
    company: 'IEBC – Independent Electoral and Boundaries Commission',
    location: 'Kenya',
    duration: 'Jan – Feb 2022 & Oct – Nov 2021',
    description: [
      'Managed biometric voter registration systems and database entry',
      'Provided customer service and support to voters during registration process',
      'Maintained accurate records and generated system reports'
    ],
    type: 'work'
  },
  {
    id: 'uwezo',
    title: 'Administrative Officer',
    company: 'Uwezo Fund Oversight Board',
    location: 'Kenya',
    duration: 'Jan 2020 – Dec 2020',
    description: [
      'Reviewed funding applications and coordinated community vetting sessions',
      'Managed document filing, report preparation, and stakeholder communications',
      'Supported project monitoring and progress reporting activities'
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
      'Comprehensive study of statistical methods, data analysis, and research methodologies',
      'Specialized in data collection, analysis, and visualization techniques',
      'Developed strong analytical and problem-solving skills applicable to business operations'
    ],
    type: 'education'
  },
  {
    id: 'alx-va',
    title: 'Virtual Assistant Professional Certificate',
    company: 'ALX Africa',
    location: 'Remote',
    duration: 'July 2024 – Sept 2024',
    description: [
      'Comprehensive training in virtual assistant best practices and remote work methodologies',
      'Specialized in client communication, productivity tools, and digital collaboration platforms',
      'Gained expertise in project management and business support systems'
    ],
    type: 'certification'
  },
  {
    id: 'moringa-tech',
    title: 'Technical Skills Development Program',
    company: 'Moringa School',
    location: 'Kenya',
    duration: 'May 2024 – Jan 2025',
    description: [
      'Enhanced technical skills in web development and digital tools',
      'Gained proficiency in modern web technologies to support client technical needs',
      'Applied programming knowledge to automate administrative tasks and improve efficiency'
    ],
    type: 'certification'
  }
];

export const skills: Skill[] = [
  // Administrative & Executive Support
  { name: 'Email Management', category: 'Administrative Support', level: 95 },
  { name: 'Calendar Scheduling', category: 'Administrative Support', level: 95 },
  { name: 'Document Management', category: 'Administrative Support', level: 90 },
  { name: 'Meeting Coordination', category: 'Administrative Support', level: 90 },
  { name: 'Travel Planning', category: 'Administrative Support', level: 85 },
  { name: 'Executive Assistance', category: 'Administrative Support', level: 90 },
  
  // CRM & Business Tools
  { name: 'HubSpot', category: 'CRM & Business Tools', level: 85 },
  { name: 'Salesforce', category: 'CRM & Business Tools', level: 80 },
  { name: 'Trello', category: 'CRM & Business Tools', level: 90 },
  { name: 'Slack', category: 'CRM & Business Tools', level: 95 },
  { name: 'Jira', category: 'CRM & Business Tools', level: 85 },
  { name: 'Asana', category: 'CRM & Business Tools', level: 80 },
  
  // Digital & Web Management
  { name: 'WordPress', category: 'Digital Solutions', level: 90 },
  { name: 'Wix (Classic, Studio, Velo)', category: 'Digital Solutions', level: 85 },
  { name: 'SEO Optimization', category: 'Digital Solutions', level: 85 },
  { name: 'Google Analytics', category: 'Digital Solutions', level: 80 },
  { name: 'Social Media Management', category: 'Digital Solutions', level: 85 },
  { name: 'Content Creation', category: 'Digital Solutions', level: 90 },
  
  // Technical Skills
  { name: 'HTML/CSS', category: 'Technical Skills', level: 85 },
  { name: 'JavaScript', category: 'Technical Skills', level: 80 },
  { name: 'Python', category: 'Technical Skills', level: 85 },
  { name: 'React', category: 'Technical Skills', level: 80 },
  { name: 'Node.js', category: 'Technical Skills', level: 75 },
  { name: 'PHP', category: 'Technical Skills', level: 75 },
  
  // Data & Analytics
  { name: 'Excel Advanced', category: 'Data & Analytics', level: 95 },
  { name: 'Google Sheets', category: 'Data & Analytics', level: 95 },
  { name: 'SQL', category: 'Data & Analytics', level: 80 },
  { name: 'Python (Pandas)', category: 'Data & Analytics', level: 85 },
  { name: 'Data Visualization', category: 'Data & Analytics', level: 80 },
  { name: 'Report Creation', category: 'Data & Analytics', level: 90 },
  
  // AI & Automation
  { name: 'AI Data Annotation', category: 'AI & Automation', level: 90 },
  { name: 'Workflow Automation', category: 'AI & Automation', level: 85 },
  { name: 'Process Optimization', category: 'AI & Automation', level: 85 },
  { name: 'NLP Annotation', category: 'AI & Automation', level: 85 },
  { name: 'AI Model Evaluation', category: 'AI & Automation', level: 80 }
];