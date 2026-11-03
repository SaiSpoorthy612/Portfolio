// All site content lives here. Edit this file to update the portfolio —
// components read from it and need no changes for new jobs, projects or skills.
// Images go in public/images/ and are referenced by filename only.

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  logo?: string
  highlights: string[]
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
  headline: 'AI Engineer — LLM applications, generative AI & healthcare AI',
  tagline:
    'I build end-to-end ML and generative AI systems — agentic LLM workflows, real-time speech-to-text pipelines and LLM-as-a-Judge evaluation — and ship them to production.',
  location: 'Los Angeles, CA',
  photo: 'SPOORTHY.jpeg',
  resume: 'resume/SAISPOORTHYVARALA_RESUME.pdf',
  email: 'spoorthyvarala612@gmail.com',
  phone: '+1 657-319-1382',
  linkedin: 'https://www.linkedin.com/in/saispoorthyvarala',
  github: 'https://github.com/SaiSpoorthy612',
  about: [
    "I'm a software engineer with 4+ years of experience building end-to-end ML and generative AI systems, from data processing and model evaluation to production deployment.",
    "At HealthXMD I design HIPAA-compliant AI clinical documentation services: agentic LLM workflows, real-time voice-to-chart pipelines, and LLM-as-a-Judge quality systems that review every chart automatically.",
    "I work across the stack with Python, Java, React, REST APIs and database design, deploying on AWS and Azure with CI/CD through GitHub Actions.",
  ],
}

export const experience: Experience[] = [
  {
    role: 'Software Developer, Level II',
    company: 'HealthXMD, Inc.',
    location: 'Los Angeles, CA',
    period: 'Jul 2024 – Present',
    highlights: [
      "Designed and developed HIPAA-compliant AI clinical documentation services with Python, OpenAI GPT models, LangChain and Flask, cutting clinicians' assessment time from 40–50 to 10–15 minutes (~70% reduction).",
      'Engineered high-throughput GenAI pipelines that turn transcripts into structured data in ~30 seconds using prompt design, structured outputs and parallel batch processing, and designed the SQL Server and MongoDB schemas.',
      'Architected an LLM-as-a-Judge QC/QA engine that moved chart review from manual sampling to 100% automated daily coverage; 88% of flagged inconsistencies were resolved and 87% of flagged plan-of-care gaps were added to charts.',
      'Set the chart-quality standard with a 40+ criterion evaluation rubric and review SOPs, cutting review time per flagged chart from ~15 to ~5 minutes.',
      'Developed a multimodal voice-to-chart workflow pairing real-time speech-to-text with the LLM extraction pipeline and secure mobile APIs, producing structured charts within ~30 seconds of a visit ending.',
      'Implemented async microservices with REST APIs secured by HMAC request signing and JWT on AWS (EC2, ECS), Docker and GitHub Actions CI/CD, cutting deployment time from ~2 hours to under 15 minutes.',
      'Automated a hybrid rule-based and LLM pipeline for pharmacy invoices via the Gmail API — regex parses ~70%, GPT handles the rest — reducing manual billing reconciliation time by ~60%.',
    ],
  },
  {
    role: 'Application Development Analyst',
    company: 'Accenture Solutions',
    location: 'Hyderabad, India',
    period: 'Jul 2021 – Aug 2022',
    logo: 'accenture.jpg',
    highlights: [
      'Migrated 15 on-premises enterprise PLM applications and their data to Microsoft Azure with Azure Data Factory and Database Migration Service, moving SQL Server to Azure SQL Managed Instance with zero data loss.',
      'Provisioned Azure VMs, Load Balancer, Virtual Networks and Key Vault through ARM templates and Azure DevOps pipelines, cutting environment setup from ~2 days to ~4 hours, with Backup and Site Recovery failover validated for all 15 apps.',
      'Monitored VM and application health with Azure Monitor and Log Analytics, triaging and resolving 60+ production incidents after go-live.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Techvolt',
    location: 'Coimbatore, India',
    period: 'May 2020 – Dec 2020',
    logo: 'techvolt.jpeg',
    highlights: [
      'Built end-to-end ML pipelines in Python, Pandas and scikit-learn — ETL from APIs, databases and logs through cleaning, feature engineering and EDA on 50K+ records.',
      'Trained and tuned 7 classification and regression models with cross-validation and hyperparameter search; the best reached 93% accuracy, up from an 81% baseline.',
      'Deployed models as real-time REST prediction services with under 100 ms response time.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'DoelSoft Solutions',
    location: 'Hyderabad, India',
    period: 'Jun 2019 – Nov 2019',
    logo: 'doelsoft.jpeg',
    highlights: [
      'Built back-end services for a hotel booking platform with Java, Spring Boot and MySQL, optimizing queries with indexing to cut room-search response time from ~2 s to under 500 ms.',
      'Delivered 15+ RESTful APIs for room search, reservations and authentication using a layered controller-service-repository design with JUnit tests.',
    ],
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

export const skills: SkillGroup[] = [
  {
    name: 'AI & Generative AI',
    items: ['LLMs (Claude, GPT)', 'LangChain', 'AI Agents', 'Agentic Workflows', 'Tool Calling', 'RAG', 'Embeddings', 'Prompt Design', 'Structured Outputs', 'Speech-to-Text', 'NLP', 'Document Processing'],
  },
  {
    name: 'ML & LLM Evaluation',
    items: ['End-to-End ML', 'Model Training & Deployment', 'LLM-as-a-Judge', 'Evaluation Rubrics', 'LLM Output Validation', 'Data Quality Validation', 'Precision / Recall', 'Cross-Validation', 'TensorFlow', 'scikit-learn', 'Pandas'],
  },
  {
    name: 'Languages',
    items: ['Python', 'SQL', 'Java', 'C#', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    name: 'Backend',
    items: ['Flask', 'ASP.NET Core', 'Spring Boot', 'REST APIs', 'Microservices', 'Async Processing', 'HMAC / JWT Auth'],
  },
  {
    name: 'Data',
    items: ['SQL Server', 'MongoDB', 'PostgreSQL (pgvector)', 'MySQL', 'Chroma', 'Azure Data Factory', 'ETL Pipelines'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS (EC2, ECS, Lambda, S3, SageMaker)', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Azure DevOps', 'Git', 'Postman', 'Swagger', 'JUnit', 'Agile / Scrum'],
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
