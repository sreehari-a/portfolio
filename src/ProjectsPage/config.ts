import MemoirsLogo from '../images/blog-logo-transparent.png';
import SpeedTrackerLogo from '../images/speed tracker logo-transparent.png';
import EcomAppLogo from  '../images/ecom-app-logo-transparent.png'
import PdfGeneratorLogo from  '../images/pdf generator logo.png'

export const projects = [
    {
        name: 'C-Tracker',
        link: 'https://sreehari-a.github.io/speed-tracker/',
        description: `A tool to analyze speed and performance of multiple websites, compare them based on various 
        performance metrics, and to dowload spreadsheets for detailed analysis`,
        techStack: ['react', 'redux-saga'],
        cover: SpeedTrackerLogo,
    },
    {
        name: 'PDF Generator',
        link: 'https://sreehari-a.github.io/pdf-generator-web',
        description: `A Fullstack webapp for conerting HTML embedded with dynamic variables. Created as a developer utility which helps my team members to dev test the HTML templates`,
        techStack: ['react', 'redux-saga', 'java'],
        cover: PdfGeneratorLogo,
    },
    {
        name: 'Memoirs',
        link: 'https://sreehari-a.github.io/blog/',
        description: `A Personal blog where I share my travel experiences and intresting photos during the journey.
        I wish to share my reading experiences and reviews in the future.`,
        techStack: ['react', 'redux-saga', 'strapi'],
        cover: MemoirsLogo,
    },
    {
        name: 'Shop Easy',
        link: 'https://sreehari-a.github.io/product-web',
        description: `A MEANStack sample ecommerce app which is built for learning and to get hands-on experience in fullstack development with Angular, NodeJS, Express and MongoDB`,
        techStack: ['mean'],
        cover: EcomAppLogo,
    },
]