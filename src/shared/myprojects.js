export const MYPROJECTS = [
  {
    id: 0,
    name: 'Full-stack Nucamp website',
    image: '/assets/images/nucampsite.jpg',
    featured: true,
    type: 'Front end',
    focus: ['Bootstrap', 'React', 'Redux', 'Node', 'Express', 'MongoDB'],
    description:
      'Full-featured website with login modal, saving favorites, and commenting features. This demonstrates my React and Redux learning throughout the full-stack web development course of Nucamp Coding Bootcamp. It is currently configured to load some content from a local database. It also has Node.js Express Server which uses MongoDB and Mongoose to provide resources for the client side. The local server project was tested throughout development using PostMan.',
    github: 'https://github.com/chiyomi1104/React_Nucampsite',
    demo: 'https://nucampwebsite.netlify.app',
  },
  {
    id: 1,
    name: 'Sake subscription website ',
    image: '/assets/images/sakit.png',
    featured: true,
    type: 'Front end',
    focus: ['Bootstrap', 'React'],
    description:
      'A sake subscription website made with react and Bootstrap as one of the front-end development assignment from Nucamp. It has 3 introductional pages including contact form.',
    github: 'https://github.com/chiyomi1104/Sake-Website',
    demo: 'https://sakit.netlify.app',
  },
  {
    id: 2,
    name: 'Full-featured Nucamp mobile app',
    image: '/assets/images/nucampsite-RN.jpg',
    featured: true,
    type: 'Mobile App',
    focus: ['Bootstrap', 'React Native', 'Redux'],
    description:
      'Full-featured mobile app including user account creation with Google Auth, swipe to like/delete features. Same page structure with Nucamp desktop website but featured with mobile-friendly behavior including.',
    github: 'https://github.com/chiyomi1104/react-native',
  },
  {
    id: 3,
    name: 'Simple todo list ',
    image: '/assets/images/todolist4.jpg',
    featured: true,
    type: 'Mobile App',
    focus: ['Bootstrap', 'React Native'],
    description: 'Simple todo mobile app to solidify my knowledge of React Native.',
    github: 'https://github.com/chiyomi1104/simpleTodoList',
  },

  {
    id: 4,
    name: 'Covid tracker',
    image: '/assets/images/covidtracker3.jpg',
    featured: false,
    type: 'Front end',
    focus: ['React', 'Material UI'],
    description:
      'Covid tracker allows you to check how many people tested positive, recovered or died from Covid-19. The real life data are scraped by API, and illustrated by Chart.js. It can be sorted by country or worldwide.',
    github: 'https://github.com/chiyomi1104/covidtracker',
    demo: 'https://covid19trackworld.netlify.app',
  },

  {
    id: 5,
    name: 'Twitter clone',
    image: '/assets/images/twitterclone.png',
    featured: true,
    type: 'Front end',
    description:
      'This is a Twitter clone web app with Firebase cloud database connected. Successfully mock the user interface using MaterialUI including submitting and pulling posts in real-time using Firebase cloud database.',
    focus: ['React', 'Material UI', 'Firebase'],
    demo: 'https://twitterclonefirebase.netlify.app/',
    github: 'https://github.com/sccala/twitterclone',
  },
  {
    id: 6,
    name: 'Portfolio website',
    image: '/assets/images/portfolio.png',
    featured: true,
    type: 'Front end',
    focus: ['React', 'Tailwind'],
    description:
      'The website currently you see 😊. Fully responsive and dark mode available. More projects are to be added, and more features will be deployed shortly.',
    github: 'https://github.com/sccala/portfolio',
    demo: 'https://chaseschung.netlify.app',
  },
  {
    id: 7,
    name: 'Anime memories social media web app',
    image: '/assets/images/animemories.png',
    featured: true,
    type: 'Full stack',
    focus: ['Material UI', 'React', 'Redux', 'Express', 'Node', 'MongoDB Cloud Atlas'],
    description:
      'This is a full stack social media where people can share their memories about favorite anime scene. People can register their own account using Google Auth or email and password. Once they log in, they can create, read, update, delete their own posts. Also, users can react to others',
    github: 'https://github.com/sccala/memories_app',
    demo: 'https://memoriessocialapp.netlify.app',
  },
  {
    id: 8,
    name: 'Daiwa Massage',
    image: '/assets/images/daiwasite.jpg',
    featured: true,
    type: 'CMS',
    focus: ['WordPress', 'Woocommerce', 'Photoshop', 'Illustrator'],
    description:
      'Wordpress shopping website for high-end massage chair. This is multisited for Hawaii and other regions. Each regions are equipped with several delivery options by zip code depends on the branchs ability. I ownershipped this website including maintenance, security, products update, contents creation, SEO, loading speed, and seasonal marketing plans. It generated 500 unique daily views and $25k sales monthly.',
    demo: 'https://daiwamassage.com',
  },
  {
    id: 9,
    name: 'Honey Bunch Naturals',
    image: '/assets/images/hbnaturals.jpg',
    featured: true,
    type: 'CMS',
    focus: ['WordPress', 'Woocommerce', 'Photoshop', 'Illustrator'],
    description:
      'Wordpress shopping site for New Zealand organic soaps and cosmetics. This was a rapid project and I made this commerce site successfully in 3days. I ownershipped this site including maintenance, security, products update, and loading speed.',
    demo: 'https://honeybunchnaturals.us',
  },
  {
    id: 10,
    name: 'Maxim Farm Wagyu Site',
    image: '/assets/images/maximfarm.jpg',
    featured: true,
    type: 'CMS',
    focus: ['Bigcommerce'],
    description:
      'Bigcommerce shopping site for Japanese luxury A5 wagyu. I maintain this website with updating products, optimise accordingly',
    demo: 'https://maximfarm.com/',
  },
  {
    id: 11,
    name: 'Full-stack social chat web app',
    image: '/assets/images/shadowsocial.png',
    featured: true,
    type: 'Full stack',
    focus: ['Tailwind', 'React', 'Typescript', 'Redux', 'Express', 'Node', 'MongoDB Cloud Atlas'],
    description:
      'This is a social web app for people who wants to whisper. Comments will be disappeared automatically after certain given time. People can register their own account using Google Auth or email and password. Once they log in, they can create, read, update, delete their own posts. Currently work in the progress, and hope will be fully working soon 😊',
    github: 'https://github.com/sccala/shadow_social',
    demo: 'https://socialchatapp.netlify.app',
  },
  {
    id: 12,
    name: 'Todo app - Frontend Mentor',
    image: '/assets/images/fronendmentortodo.png',
    featured: true,
    type: 'Front end',
    focus: ['Tailwind', 'React', 'Typescript', 'Redux'],
    description:
      'This is a web app to manage todo list. I made this app to solidify my knowledge of redux and tailwind customize.',
    github: 'https://github.com/sccala/todo_redux',
    demo: 'https://todowredux.netlify.app',
  },
  {
    id: 14,
    name: 'Black Jack',
    image: '/assets/images/blackjack.png',
    featured: true,
    type: 'Front end',
    focus: ['Tailwind', 'React', 'Redux'],
    description:
      'This is a web app to play black jack with a virtual dealer. I made this app for one of the Mintbean Hackathon which is given 7days time-frame, and succsessfully completed and got the certificate "top 16% of developers" batch as a completion token.',
    github: 'https://github.com/sccala/black_jack',
    demo: 'https://simplebj.netlify.app',
  },
]
