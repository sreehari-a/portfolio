import MemoirsLogo from '../images/blog-logo.png';
import SpeedTrackerLogo from '../images/speed tracker logo.png';
export const projects = [
    {
        name: 'Memoirs',
        link: 'https://sreehari-a.github.io/blog/',
        description: `A Personal blog where I share my travel experiences and intresting photos during the journey.
        I wish to share my reading experiences and reviews in the future. Mostly written in malayalam`,
        techStack: ['react', 'redux-saga', 'strapi'],
        cover: MemoirsLogo,
    },
    {
        name: 'C-Tracker',
        link: 'https://sreehari-a.github.io/speed-tracker/',
        description: `A tool to analyze speed and performance of multiple websites, compare them based on various 
        performance metrics, and to dowload spreadsheets for detailed analysis`,
        techStack: ['react', 'redux-saga'],
        cover: SpeedTrackerLogo,
    },
]