/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */

const work = [
  {
    name: 'E.SUN BANK',
    position: 'Product  Developer',
    url: 'https://www.esunbank.com/',
    startDate: '2022-02',
    summary: 'E.SUN BANK is a leading bank in Taiwan. I work on the AI team to develop machine learning web services. I Design and establish user-friendly web interface with Vue and React, develop backend API with Fastapi. I also design real-time communication and scalability web system and used Docker to managed containers',
    highlights: [
      'Developed asynchronous OCR web service (in-house website) with Celery/RabbitMQ/Redis, and used Kafka consumer to receive asynchronous API responses.',
      'Conducted research on Edge computing and implemented face recognition using the Paddle-Lite framework',
      'Designed front-end Genne website (in-house chatGPT web service) architecture using Vue and event source for showing messaging.',
      'Developed Opensource Chinese Phonetic Annotation System  for educators to select appropriate annotations and export to Word and TXT using g2p model.',
    ],
  },
  {
    name: 'E.SUN BANK',
    position: 'Machine Learning Engineer',
    url: 'https://www.esunbank.com/',
    startDate: '2021-08',
    endDate: '2022-02',
    summary: 'E.SUN BANK is a leading bank in Taiwan. I work on the AI team to develop machine learning services including train and research computer vision models.',
    highlights: [
      "Developed Restful APIs and OCR models, integrated into the company's services to improve service speed and reduce manual processing",
      'Conducted research on Edge computing and implemented face recognition using the Paddle-Lite framework',
      'Leveraged SIFT (OpenCV) for template recognition, providing easy orientation correction, background removal, and precise recognition.',
    ],
  },
  {
    name: 'Programming for business computing',
    position: 'Tech Teaching Assistant Lead',
    url: 'https://www.coursera.org/learn/pbc1',
    startDate: '2019-07',
    endDate: '2021-01',
    summary: 'Programming for Business Computing is a course on Coursera that teaches Python to business students. I was the lead TA for the course. I managed 30+ TAs to serve 800+ students and redesigned administrative procedures for class expansion.',
    highlights: [
      'Managed 30+ TAs to serve 800+ students, redesigned administrative procedures for class expansion',
      'Redesigned administrative procedures, including SOP, TA class work records, and coursework judging standards to cope with class expansion.',
    ],
  },
  {
    name: 'Shopee Taiwan',
    position: 'Data Analyst Intern',
    url: 'https://shopee.tw/',
    startDate: '2020-07',
    endDate: '2020-09',
    summary: 'Improved and automated the report calculation processes, saving the manual hour for the PM team',
    highlights: [
      'Built Automation system with incentive program calculation by combining and analyzing 11 tasks from 3 main functions of WH operation, saving 40+ total manual hour per month for project management team.',
      'Automated **email sending process and visualized daily reports by utilizing html frontend technique in acquiring and calculating instant data, saving 30+ total manual hour per month for project management team.',
    ],
  },
  {
    name: 'Ping An Technology',
    position: 'Business Analyst Intern',
    url: 'https://tech.pingan.com/en/',
    startDate: '2018-10',
    endDate: '2019-01',
    summary: 'Planned models for Car Insurance Cross-Selling Clustering Model Project. Conducted experiments for Enhancing Agents’ Salaries AI Project',
    highlights: [
      'Design a model construction plan by researching different Cluster / Random Forest algorithms.',
      'Analyzed the local insurance agents’ questionnaire and sales data to understand the project effects, discussed with other cites finding better approaches to encourage agents’ participation.',
    ],
  },
  {
    name: 'Kyper Data Tech',
    position: 'Product Manager Intern',
    url: 'https://www.f6s.com/company/kyperdatatechnologies',
    startDate: '2016-02-01',
    endDate: '2016-03-01',
    summary: '',
    highlights: [
      'Combined Supply Chain theory and AI providing a solution which contained Dynamic Intelligent Inventory and Intelligent Substitution Planning',
      'Simulated the Substitution Solution Scenario with inventory data from a glass manufacturer.',
      'Designed a solution which provides Intelligent routing, researched Marine Traffic Information.',
    ],
  },
  {
    name: '91APP',
    position: 'Data Product Manager Intern ',
    url: 'https://matroid.com',
    startDate: '2015-07-01',
    endDate: '2016-01-01',
    summary: 'Analyzed customer data, and developed systems and algorithms related to the personal recommendation and repurchase prediction.',
    highlights: [
      'Analyzed the purchase  data, built personal Recommendation System with Collaborative Filtering providing more variety, and higher precision and recall for 50+ e commerce shops.',
      'Simulated recommendation in a shopping cart , which combined CF and FP rule, with R shiny.',
      'Built Repurchase Predicting System model which ensembles two kinds of models with different user data with xGBboost algorithm and used for e commerce shops precision marketing.',
    ],
  },
];

export default work;
