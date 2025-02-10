import { IProject } from "./project.interface"

export const PROJECT_DATA: IProject[] = [
    {
       id: 'project-1',
       details: {
            title: 'Mini calendar App',
            subtitle: 'Calendar event manager',
            category: 'Frontend', 
            images: [
                {
                    src: './assets/projects/mini-calendar/mini_calendar-resize.png',
                    alt: 'calendar view page',
                    title: 'View calendar'
                },
                {
                    src: './assets/projects/mini-calendar/mini_calendar-home.png',
                    alt: 'calendar home page',
                    title: 'Home calendar'
                },
                {
                    src: './assets/projects/mini-calendar/mini_calendar-nav.png',
                    alt: 'calendar navigation page',
                    title: 'Navigation calendar'
                },
                {
                    src: './assets/projects/mini-calendar/mini_calendar-event.png',
                    alt: 'calendar event page',
                    title: 'Event calendar'
                },
                {
                    src: './assets/projects/mini-calendar/mini_calendar-about.png',
                    alt: 'calendar about page',
                    title: 'About calendar'
                }
            ],
            description: 'assets/projects/mini-calendar/mini-calendar.md',
            features: ['dynamic calendar', 'manage personal event'],
            stacks: ['#nodejs', '#angular', '#typescript', '#primeng', '#swipperJs'],
            links: {
                repo: 'https://github.com/HasinaSnow/mini-calendarEvent.git',
                demo: 'https://hasina-snow-mini-calendar-event-mobile-version.vercel.app/'
            }
       }
    },
  {
       id: 'project-2',
       details: {
            title: 'Api rest - Event manager',
            subtitle: 'REST API for Efficient Event Management',
            category: 'Backend', 
            images: [
                {
                    src: './assets/projects/api.jpeg',
                    alt: 'rest api',
                    title: 'Rest api'
                }
            ],
            description: 'assets/projects/api-eventManager.md',
            features: ['', 'manage personal event'],
            stacks: ['#nodejs', '#express', '#typescript', '#socketIO'],
            links: {
                repo: 'https://github.com/HasinaSnow/api-express-nodeJs-calendar-event.git',
                demo: ''
            }
       }
    }
]
