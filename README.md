# Jerwin Enrique — Portfolio

> Modern, responsive portfolio website built with React, Vite, and Tailwind CSS

[![Deploy to GitHub Pages](https://github.com/JerwinEnrique/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/JerwinEnrique/Portfolio/actions/workflows/deploy.yml)

**Live Site**: [https://jerwinenrique.github.io/Portfolio/](https://jerwinenrique.github.io/Portfolio/)

---

## 🎯 Overview

Professional portfolio showcasing Computer Engineering projects, skills, experience, certifications, and achievements. Designed with recruiters and hiring managers in mind.

### Key Features

- 🎨 **Modern Design** — Dark-first engineering aesthetic with subtle animations
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** — Optimized bundle size and lazy loading
- 🤖 **AI Assistant** — Interactive chatbot "Winz" for Q&A
- ♿ **Accessible** — WCAG compliant with keyboard navigation
- 🚀 **GitHub Pages** — Auto-deployment via GitHub Actions
- 🔍 **SEO Optimized** — Meta tags, Open Graph, structured data

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Routing**: [React Router 6](https://reactrouter.com/) (HashRouter)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── assets/                 # Static assets
│   │   ├── docs/
│   │   │   └── resume.pdf      # Resume PDF
│   │   └── img/
│   │       ├── profile-photo.jpg
│   │       └── social-preview.png
│   └── favicon.svg
├── src/
│   ├── components/             # Reusable components
│   │   ├── ChatBot.jsx        # AI assistant chatbot
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── ProjectCard.jsx    # Project display card
│   │   └── ScrollToTop.jsx    # Scroll behavior
│   ├── data/                   # Content data
│   │   ├── portfolio.js       # Personal info, skills, etc.
│   │   └── projects.js        # Project case studies
│   ├── pages/                  # Page components
│   │   ├── About.jsx
│   │   ├── Awards.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── App.jsx                 # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # App entry point
├── index.html                  # HTML template
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/JerwinEnrique/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000/Portfolio/` in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` directory.

---

## 📝 Content Management

### Updating Portfolio Data

All content is centralized in `src/data/portfolio.js` and `src/data/projects.js`.

#### Personal Information

```javascript
// src/data/portfolio.js
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... more fields
}
```

#### Adding Skills

```javascript
// src/data/portfolio.js
export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming Languages',
    accent: 'green',
    skills: [
      { name: 'JavaScript', level: 4, domain: 'programming' },
      // ... more skills
    ],
  },
]
```

#### Adding Projects

```javascript
// src/data/projects.js
export const projects = [
  {
    id: 'my-project',
    title: 'Project Title',
    category: ['web', 'ai'],
    technologies: ['React', 'Python'],
    // ... more fields
  },
]
```

### Updating Assets

- **Resume PDF**: Replace `public/assets/docs/resume.pdf`
- **Profile Photo**: Replace `public/assets/img/profile-photo.jpg`
- **Social Preview**: Replace `public/assets/img/social-preview.png`

After updating assets, rebuild the project.

---

## 🌐 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Deployment Workflow**:
1. Push code to `main` branch
2. GitHub Actions runs `.github/workflows/deploy.yml`
3. Builds the project with Vite
4. Deploys to GitHub Pages
5. Site live at `https://[username].github.io/Portfolio/`

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder is ready to deploy
```

Upload the `dist/` folder to any static hosting service.

### Custom Domain

To use a custom domain:

1. Add `CNAME` file in `public/` folder with your domain
2. Update `base` in `vite.config.js`:
   ```javascript
   base: '/'  // Change from '/Portfolio/'
   ```
3. Update paths in `src/data/portfolio.js`:
   ```javascript
   resumePdf: '/assets/docs/resume.pdf'  // Remove '/Portfolio/' prefix
   ```
4. Configure DNS settings with your domain provider

---

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',       // Main brand color
      'accent-cyan': '#06b6d4', // Accent color
      // ... more colors
    }
  }
}
```

### Typography

Update font imports in `index.html` and `tailwind.config.js`.

### Layout

Modify components in `src/components/` and pages in `src/pages/`.

---

## 🤖 ChatBot Features

The AI assistant "Winz" can answer questions about:

- 📚 Education & background
- 💼 Work experience & leadership
- 🛠️ Technical skills
- 🎓 Certifications
- 💻 Projects & thesis
- 🏆 Awards & achievements
- 📧 Contact information

**Usage**: Click the bot icon in the bottom-right corner.

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- `prefers-reduced-motion` support

---

## 📊 Performance

Current bundle sizes (gzipped):
- **CSS**: 5.73 kB
- **JavaScript**: 24.79 kB
- **React vendor**: 53.00 kB

**Total**: ~84 kB gzipped

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Not Working on GitHub Pages

Ensure `vite.config.js` has correct `base` path:

```javascript
base: '/Portfolio/'  // Must match your repository name
```

### Assets Not Loading

Check that paths in `portfolio.js` include the base path:

```javascript
resumePdf: '/Portfolio/assets/docs/resume.pdf'
```

### Chatbot Not Showing

Verify `ChatBot.jsx` is imported in `App.jsx`:

```javascript
import ChatBot from './components/ChatBot'
```

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Jerwin Enrique**

- 📧 Email: jerwinenrique14@gmail.com
- 💼 LinkedIn: [linkedin.com/in/jerwin-enrique-3150a6376](https://www.linkedin.com/in/jerwin-enrique-3150a6376)
- 💻 GitHub: [github.com/JerwinEnrique](https://github.com/JerwinEnrique)

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built with [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by Jerwin Enrique
