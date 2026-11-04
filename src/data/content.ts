// All site content lives here. Edit this file to update the portfolio —
// components read from it and need no changes for new jobs, projects or skills.
// Images go in public/images/ and are referenced by filename only.

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  logo?: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type Education = {
  school: string
  degree: string
  period: string
  grade?: string
  logo?: string
}

export type Project = {
  title: string
  description?: string
  image?: string
  stack: string[]
  github?: string
  demo?: string
}

export type Certification = {
  name: string
  issuer: string
}

export type SkillGroup = {
  name: string
  items: string[]
}

export const profile = {
  name: 'Sai Spoorthy Varala',
  headline: 'AI Engineer & Full-Stack Developer',
  // Cycled by the typing animation in the hero
  roles: ['AI Engineer', 'Full-Stack Developer', 'LLM App Builder', 'ML Engineer'],
  tagline:
    'I build intelligent, reliable software — from LLM-powered apps and machine learning models to the full-stack systems that bring them to people.',
  location: 'Los Angeles, CA',
  photo: 'profile.jpg',
  resume: 'resume/SAISPOORTHYVARALA_RESUME.pdf',
  email: 'spoorthyvarala612@gmail.com',
  phone: '+1 657-319-1382',
  linkedin: 'https://www.linkedin.com/in/saispoorthyvarala',
  github: 'https://github.com/SaiSpoorthy612',
  about:
    "I'm a software engineer with 4+ years of experience building AI products end to end, from data and models to production APIs. I enjoy turning messy real-world workflows into reliable software that people actually use.",
}

// "What I do" cards in the About section
export const focusAreas = [
  {
    title: 'LLM & Generative AI',
    description: 'Agentic workflows with tool calling, RAG over embeddings, structured outputs and real-time speech-to-text, built with Claude, GPT and LangChain.',
  },
  {
    title: 'ML Engineering & Evaluation',
    description: 'End-to-end model training and deployment, plus LLM-as-a-Judge systems and evaluation rubrics that keep AI output accurate.',
  },
  {
    title: 'Full-stack & Cloud',
    description: 'Python, Java, .NET and React services with REST APIs and solid database design, shipped on AWS and Azure with CI/CD.',
  },
]

// Portfolio-length summaries; the full detail lives in the resume PDF
export const experience: Experience[] = [
  {
    role: 'Software Developer, Level II',
    company: 'HealthXMD, Inc.',
    location: 'Los Angeles, CA',
    period: 'Jul 2024 – Present',
    summary: 'Building HIPAA-compliant generative AI for clinical documentation and quality assurance.',
    highlights: [
      "Built AI documentation services that cut clinicians' assessment time by ~70%, from 40–50 to 10–15 minutes.",
      'Architected an LLM-as-a-Judge engine that moved chart QA from manual sampling to 100% automated daily review.',
      'Shipped a real-time voice-to-chart workflow that produces structured charts within ~30 seconds of a visit.',
      'Cut deployments from ~2 hours to under 15 minutes with Docker, AWS ECS and GitHub Actions.',
    ],
    stack: ['Python', 'OpenAI GPT', 'LangChain', 'Flask', 'SQL Server', 'MongoDB', 'AWS', 'Docker'],
  },
  {
    role: 'Application Development Analyst',
    company: 'Accenture Solutions',
    location: 'Hyderabad, India',
    period: 'Jul 2021 – Aug 2022',
    logo: 'accenture.jpg',
    summary: 'Migrated enterprise PLM applications from on-premises to Microsoft Azure.',
    highlights: [
      'Moved 15 enterprise applications and their SQL Server data to Azure with zero data loss.',
      'Automated environment provisioning with ARM templates and Azure DevOps, cutting setup from ~2 days to ~4 hours.',
      'Resolved 60+ production incidents after go-live using Azure Monitor and Log Analytics.',
    ],
    stack: ['Azure', 'Azure Data Factory', 'SQL Server', 'ARM Templates', 'Azure DevOps'],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Techvolt',
    location: 'Coimbatore, India',
    period: 'May 2020 – Dec 2020',
    logo: 'techvolt.jpeg',
    summary: 'Built end-to-end ML pipelines and real-time prediction services.',
    highlights: [
      'Built pipelines from ETL through feature engineering and analysis on 50K+ records.',
      'Raised model accuracy from an 81% baseline to 93% across 7 tuned models.',
      'Served models as REST APIs with under 100 ms response time.',
    ],
    stack: ['Python', 'Pandas', 'scikit-learn', 'REST APIs'],
  },
  {
    role: 'Software Developer Intern',
    company: 'DoelSoft Solutions',
    location: 'Hyderabad, India',
    period: 'Jun 2019 – Nov 2019',
    logo: 'doelsoft.jpeg',
    summary: 'Built back-end services for a hotel booking platform.',
    highlights: [
      'Delivered 15+ Spring Boot REST APIs for room search, reservations and authentication.',
      'Cut room-search response time from ~2 s to under 500 ms through schema design and indexing.',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'JUnit'],
  },
]

export const education: Education[] = [
  {
    school: 'California State University, Fullerton',
    degree: 'Master of Science, Computer Science',
    period: 'Aug 2022 – May 2024',
    grade: 'GPA 3.7 / 4.0',
    logo: 'cal.jpg',
  },
  {
    school: 'Sreenidhi Institute of Science and Technology',
    degree: 'Bachelor of Computer Science',
    period: 'Jun 2017 – May 2021',
    grade: 'GPA 8.3 / 10.0',
    logo: 'snist.jpg',
  },
]

export const certifications: Certification[] = [
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft Certified' },
]

// Highlighted at the top of the Skills section
export const coreStack = ['Python', 'TypeScript', 'React', 'LangChain', 'OpenAI & Claude', 'RAG', 'PostgreSQL', 'AWS', 'Azure', 'Docker']

export const skills: SkillGroup[] = [
  {
    name: 'AI & LLMs',
    items: ['LLMs (Claude, GPT)', 'LangChain', 'AI Agents', 'Tool Calling', 'RAG', 'Embeddings', 'Prompt Engineering', 'Structured Outputs', 'Speech-to-Text', 'NLP'],
  },
  {
    name: 'ML & Evaluation',
    items: ['TensorFlow', 'scikit-learn', 'Pandas', 'Model Training & Deployment', 'LLM-as-a-Judge', 'Evaluation Rubrics', 'Data Quality Validation'],
  },
  {
    name: 'Languages & Frontend',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C#', '.NET Core', 'SQL', 'React'],
  },
  {
    name: 'Backend',
    items: ['Flask', 'Spring Boot', 'ASP.NET Core', 'REST APIs', 'Microservices', 'JWT / HMAC Auth'],
  },
  {
    name: 'Data',
    items: ['PostgreSQL + pgvector', 'SQL Server', 'MongoDB', 'MySQL', 'Chroma', 'ETL Pipelines'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS (EC2, ECS, Lambda, S3, SageMaker)', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Azure DevOps', 'Git'],
  },
]

export const projects: Project[] = [
  {
    title: 'Sentiment Analysis with Amazon SageMaker',
    image: 'emoji.jpeg',
    stack: ['Python', 'AWS SageMaker', 'AWS Lambda', 'scikit-learn', 'TensorFlow', 'Flask'],
  },
  {
    title: 'Cardiac Attack Risk Prediction Web App',
    image: 'heart.jpeg',
    stack: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib', 'HTML/CSS'],
  },
  {
    title: 'Face Recognition for Security',
    image: 'security.jpg',
    stack: ['OpenCV', 'TensorFlow', 'scikit-learn', 'LBP', 'CNN', 'SVM', 'Flask'],
  },
  {
    title: 'Customer Segmentation with RFM & Clustering',
    image: 'customer.jpeg',
    stack: ['Python', 'K-means', 'scikit-learn', 'RFM analysis', 'Flask'],
  },
]

// Existing Google Apps Script endpoint that stores contact-form submissions in a sheet
export const contactFormEndpoint =
  'https://script.google.com/macros/s/AKfycby0d4sMYK26KJ-6DLH8O726mx08li-kmHYzBMsFgTGIo923S_dEteh09hYzZLE3HO32/exec'
