// Projects data - add your project images to public/assets/img/projects/

export const projects = [
  {
    id: 'iot-balance-board',
    title: 'IoT-Based Balance and Tremor Exercise Board for Parkinson\'s Disease Patients',
    category: ['thesis', 'iot', 'mobile'],
    description: 'An IoT-connected exercise board that helps Parkinson\'s disease patients perform guided balance and tremor exercises, while continuously tracking blood pressure and syncing session data to a companion Android app built with Flutter.',
    technologies: ['Arduino', 'IoT Sensors', 'Blood Pressure Module', 'Flutter', 'Android Studio'],
    image: null, // Add: '/assets/img/projects/iot-board.jpg'
    github: null,
    demo: null,
    featured: true,
    caseStudy: {
      background: 'Developed as my undergraduate thesis at Jose Rizal University, this project responds to the balance instability and hand/limb tremors common in Parkinson\'s disease, which make guided physical therapy exercises difficult to perform and monitor consistently at home.',
      problem: 'Patients often lack an affordable way to perform balance and tremor exercises with real-time feedback, and caregivers have no easy way to track exercise consistency or vital signs like blood pressure between clinic visits.',
      solution: 'A physical exercise board fitted with balance and tremor-sensing hardware plus an integrated blood pressure monitor, all connected over IoT to a companion Android application that logs sessions, displays progress, and surfaces vitals in an easy-to-read format for the patient and caregiver.',
      features: [
        'Balance/tremor exercise board with embedded sensors',
        'Blood pressure monitoring module',
        'Real-time data sync between board and mobile app',
        'Session history and blood pressure trend display',
        'Simple interface for elderly users',
      ],
      challenges: 'Calibrating tremor/balance sensors for reliable, consistent readings across different patients, and building a mobile interface simple enough for elderly users while still surfacing meaningful health data.',
      role: 'Team of 4 • Thesis Project',
      status: 'Completed',
    }
  },
  {
    id: 'pet-shop-inventory',
    title: 'Pet Shop Inventory Management System (MVP)',
    category: ['system', 'client', 'web'],
    description: 'A PHP/MySQL inventory management system delivered to a family friend\'s local pet supply shop, eliminating manual paper ledgers and enabling real-time stock tracking, automated POS checkout, and low-stock alerts.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'HTML/CSS/JavaScript', 'XAMPP'],
    image: null, // Add: '/assets/img/projects/pet-shop.jpg'
    github: null,
    demo: null,
    featured: true,
    caseStudy: {
      background: 'A family friend running a local pet supply shop was tracking inventory by hand—a written stock ledger and a manual daily sales tally—which made it easy for stock counts to drift from what was actually on the shelf.',
      problem: 'The shop had no reliable way to know real-time stock levels, catch low inventory before it ran out, or process a sale without manually updating a paper ledger—leading to stock discrepancies and slower checkout.',
      solution: 'A PHP/MySQL inventory management MVP with a Bootstrap frontend, delivered and run locally on the shop\'s own computer via XAMPP. It replaces the paper ledger with a live digital stock count and POS-style checkout.',
      features: [
        'Real-time stock tracking across all product inventory',
        'Low-stock alerts to flag items needing restock',
        'POS-style checkout that automatically deducts sold items',
        'Basic sales reports for reviewing daily/period performance',
      ],
      businessImpact: 'Eliminated stock discrepancies and reduced end-of-day reconciliation time. The shop owner now has instant visibility into what\'s running low.',
      challenges: 'Designing a UI simple enough for a non-technical shop owner to use daily without training, while ensuring the database reliably tracks every transaction.',
      role: 'Solo-built • 3 weeks',
      status: 'Delivered & In Use',
    }
  },
  {
    id: 'cybernate',
    title: 'Cybernate — AI Scam Detection Application',
    category: ['ai', 'mobile'],
    description: 'A mobile application that uses AI to help everyday users identify potential scam messages, links, and calls before they fall victim — built as an Android app to make scam awareness accessible and portable.',
    technologies: ['Flutter', 'Android Studio', 'AI / Machine Learning', 'Python'],
    image: null,
    github: null,
    demo: null,
    featured: true,
    caseStudy: {
      background: 'Scams delivered through text messages, links, and calls are a widespread and growing risk, especially for users who aren\'t familiar with common red flags.',
      problem: 'Most people have no simple, on-the-go way to check whether a message or link they\'ve received is likely to be a scam.',
      solution: 'An Android application, developed with Flutter, that applies AI/ML techniques to flag suspicious content and give users a clear risk assessment.',
      features: [
        'Scam-likelihood analysis for messages and links',
        'Mobile-first design for on-the-go checks',
        'AI/ML-driven detection logic',
      ],
      challenges: 'Balancing detection accuracy with a simple, non-technical presentation.',
      role: 'Team of 3 • 2 months',
      status: 'Completed',
    }
  },
  {
    id: 'ai-plant-disease',
    title: 'AI Plant Disease Detection System',
    category: ['ai'],
    description: 'An AI-based system that identifies plant diseases from leaf images, aimed at helping farmers and hobbyist growers catch problems early and reduce crop loss.',
    technologies: ['Python', 'AI / Machine Learning', 'Image Classification'],
    image: null,
    github: null,
    demo: null,
    featured: false,
    caseStudy: {
      background: 'Plant diseases can spread quickly and are often caught too late by the naked eye, leading to significant crop loss.',
      problem: 'Manual disease diagnosis requires expertise that isn\'t always available, especially in rural or small-scale farming settings.',
      solution: 'An AI-powered detection system that analyzes leaf images to classify common plant diseases, giving growers a fast, low-cost first opinion.',
      features: [
        'Image-based disease classification using AI/ML models',
        'Designed for accessibility by non-technical users',
      ],
      challenges: 'Working with limited/varied image quality and ensuring the model generalizes across different lighting conditions and plant species.',
      role: 'Solo-built • 3 weeks',
      status: 'Completed',
    }
  },
  {
    id: 'drowsiness-detection',
    title: 'AI Drowsiness Detection Project',
    category: ['ai'],
    description: 'A real-time computer vision system that monitors eye closure/yawning via webcam and alerts the driver/operator when drowsiness is detected.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Facial Landmark Detection'],
    image: null,
    github: null,
    demo: null,
    featured: false,
    caseStudy: {
      background: 'Drowsy driving is a significant safety risk. Real-time detection can help prevent accidents.',
      problem: 'Drivers often don\'t realize they\'re drowsy until it\'s too late.',
      solution: 'A computer vision system that monitors facial features in real-time and triggers alerts when signs of drowsiness are detected.',
      features: [
        'Real-time eye closure monitoring',
        'Yawning detection',
        'Audio/visual alerts',
      ],
      challenges: 'Achieving reliable detection across different lighting conditions and face angles.',
      role: 'Academic Project',
      status: 'Completed',
    }
  },
  {
    id: 'water-quality',
    title: 'IoT-Based Automated Ground Water Quality Monitoring System',
    category: ['iot'],
    description: 'An automated IoT system that monitors ground water quality parameters in real time, reducing the need for manual sample testing and enabling faster response to contamination.',
    technologies: ['Arduino', 'IoT', 'Water Quality Sensors'],
    image: null,
    github: null,
    demo: null,
    featured: false,
    caseStudy: {
      background: 'Ground water quality can change quickly due to contamination, and manual testing is slow, infrequent, and labor-intensive.',
      problem: 'Communities and facilities relying on ground water often lack continuous, real-time visibility into water quality parameters.',
      solution: 'An IoT sensor network that continuously monitors pH, turbidity, and other parameters, with alerts for out-of-range readings.',
      features: [
        'Continuous water quality monitoring',
        'Real-time alerts for contamination',
        'Historical data logging',
      ],
      challenges: 'Sensor calibration and ensuring reliable operation in outdoor/wet environments.',
      role: 'Academic Project',
      status: 'Completed',
    }
  },
  {
    id: 'rfid-attendance',
    title: 'RFID Attendance Management System',
    category: ['iot', 'system'],
    description: 'An RFID-based system for automated attendance tracking, eliminating manual roll calls and paper-based records.',
    technologies: ['Arduino', 'RFID', 'PHP', 'MySQL'],
    image: null,
    github: null,
    demo: null,
    featured: false,
    caseStudy: {
      background: 'Manual attendance tracking is time-consuming and prone to errors or fraud.',
      problem: 'Schools and organizations need a faster, more reliable way to track attendance.',
      solution: 'An RFID card-based system that automatically logs attendance when cards are scanned.',
      features: [
        'RFID card scanning',
        'Automated attendance logging',
        'Web-based attendance reports',
      ],
      challenges: 'Ensuring cards are scanned only once per session and preventing card sharing.',
      role: 'Academic Project',
      status: 'Completed',
    }
  },
  {
    id: 'library-system',
    title: 'Library Management System',
    category: ['system', 'web'],
    description: 'A web-based library management system for tracking books, borrowers, and transactions at Jose Rizal University.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: null,
    github: null,
    demo: null,
    featured: false,
    caseStudy: {
      background: 'Academic project to demonstrate full-stack web development skills.',
      problem: 'Libraries need efficient systems to manage large book inventories and borrower records.',
      solution: 'A web application with book cataloging, borrower management, and transaction tracking.',
      features: [
        'Book catalog with search functionality',
        'Borrower registration and management',
        'Check-in/check-out tracking',
        'Overdue notifications',
      ],
      challenges: 'Designing an intuitive interface for librarians with varying technical skills.',
      role: 'JRU Academic Project',
      status: 'Completed',
    }
  },
];

// Filter categories
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'iot', label: 'IoT & Embedded' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ai', label: 'AI Applications' },
  { id: 'system', label: 'Systems & Web Dev' },
  { id: 'client', label: 'Client Work' },
];
