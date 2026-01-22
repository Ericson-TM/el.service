# Claude.md - EL Büroservice Portfolio Website

## Project Overview
Professional portfolio website for EL Büroservice, showcasing business computing services for small and medium-sized businesses in Berlin, Germany.

**Owner**: Eric Noel Lieberwirth
**Contact**: el.service@gmx.de
**LinkedIn**: https://www.linkedin.com/in/eric-noel-lieberwirth-306b8022a
**Repository**: https://github.com/Ericson-TM/el.service

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: CSS Modules (scoped, no extra dependencies)
- **Contact Form**: Web3Forms (serverless form handling)
- **Deployment**: Configured for Vercel, Netlify, and GitHub Pages
- **Language**: German (de)

## Project Structure
```
el.service/
├── public/
│   ├── EL Büroservice_Logo.png       # Company logo
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── Profile_picture.png    # Eric's profile photo
│   │       └── Signatur.png          # Signature
│   ├── components/
│   │   ├── common/                   # Reusable components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Container/
│   │   │   └── Section/
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Navigation/
│   │   └── sections/                 # Page sections
│   │       ├── Hero/
│   │       ├── About/
│   │       ├── Services/
│   │       ├── Portfolio/
│   │       └── Contact/
│   ├── data/                         # Content data files
│   │   ├── services.js               # 6 services offered
│   │   ├── projects.js               # 4 portfolio projects
│   │   └── skills.js                 # 12 skills
│   ├── styles/
│   │   ├── global.css                # Design system & CSS variables
│   │   └── reset.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example                      # Environment variables template
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Key Features

### Sections
1. **Hero** - Professional headline with CTAs
2. **About** - Personal introduction, education, skills grid
3. **Services** - 6 business computing services with cards
4. **Portfolio** - 4 project showcases with tech stacks
5. **Contact** - Contact form with Web3Forms + contact info

### Design System
- **Primary Color**: #0066CC (professional blue)
- **Fonts**: Inter (body), Poppins (headings)
- **Responsive**: Mobile-first design
- **Breakpoints**: 768px (mobile), 1024px (tablet)

### Features
- Smooth scrolling navigation
- Sticky header with scroll effects
- Mobile hamburger menu
- Active section highlighting
- Web3Forms contact form integration
- SEO optimized with meta tags
- Fully responsive layout

## Current Status

### ✅ Completed
- [x] Full website structure with all sections
- [x] Complete German translation
- [x] Logo and profile picture integration
- [x] Real contact information (email, LinkedIn)
- [x] Responsive mobile-first design
- [x] Web3Forms integration (needs API key)
- [x] Git repository initialized
- [x] Pushed to GitHub
- [x] Deployment configs (Vercel, Netlify, GitHub Pages)

### 🔄 In Progress / Needs Setup
- [ ] **Web3Forms API Key** - Sign up at https://web3forms.com and add key to `.env`
- [ ] Deploy to hosting platform (Vercel recommended)
- [ ] Add real project images (currently using placeholders)
- [ ] Update projects with actual client work

### 📋 Future Enhancements
- [ ] Add project detail pages
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Replace placeholder project images
- [ ] Add Google Analytics
- [ ] Add custom domain
- [ ] Implement dark mode
- [ ] Add loading animations
- [ ] Add project filters in portfolio

## How to Run

### Development Server
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

### Production Build
```bash
npm run build
npm run preview
```

### Environment Variables
Create a `.env` file in the root:
```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

## Content Updates

### Updating Services
Edit `src/data/services.js` - Contains 6 service cards with title, description, and icon.

### Updating Projects
Edit `src/data/projects.js` - Contains 4 portfolio projects with technologies and descriptions.

### Updating Skills
Edit `src/data/skills.js` - Contains 12 skills with categories and icons.

### Updating About Section
Edit `src/components/sections/About/About.jsx` - Personal bio and education information.

### Updating Contact Info
- Email & LinkedIn: `src/components/sections/Contact/Contact.jsx` (lines 34-51)
- Footer social links: `src/components/layout/Footer/Footer.jsx` (lines 7-10)

## Deployment Options

### Recommended: Vercel
1. Import repository from GitHub
2. Vercel auto-detects Vite
3. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
4. Deploy

### Alternative: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variable

### Alternative: GitHub Pages
1. Enable GitHub Pages in repository settings
2. GitHub Actions workflow already configured (`.github/workflows/deploy.yml`)
3. Will deploy to `https://ericson-tm.github.io/el.service`

## Important Notes

### CSS Modules
All component styles use CSS Modules (`.module.css`) for scoped styling. Import styles as:
```javascript
import styles from './Component.module.css';
```

### Design Tokens
Global CSS variables are defined in `src/styles/global.css`:
- Colors: `--color-primary`, `--color-text`, etc.
- Spacing: `--spacing-sm`, `--spacing-md`, etc.
- Fonts: `--font-heading`, `--font-body`
- Breakpoints: `--breakpoint-mobile`, `--breakpoint-tablet`

### Images
- Logo: `/public/EL Büroservice_Logo.png`
- Profile: `/src/assets/images/Profile_picture.png`
- Signature: `/src/assets/images/Signatur.png`

### Navigation
Smooth scrolling is implemented using `scrollIntoView` API. All sections have IDs matching the navigation links.

### Contact Form
Web3Forms sends emails to: **el.service@gmx.de**
Currently requires environment variable to be functional.

## Git Workflow

### Making Changes
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### Viewing Changes
```bash
git status
git log --oneline
git diff
```

## Contact Form Setup

1. Visit https://web3forms.com
2. Sign up with el.service@gmx.de
3. Create a new form
4. Copy the Access Key
5. Create `.env` file: `VITE_WEB3FORMS_ACCESS_KEY=your_key`
6. Restart dev server

## Common Tasks

### Add New Project
1. Open `src/data/projects.js`
2. Add object to array:
```javascript
{
  id: 5,
  title: 'Project Name',
  description: 'Project description in German',
  technologies: ['Tech1', 'Tech2'],
  category: 'Category',
  image: '/images/project.jpg',
  link: '#'
}
```

### Add New Service
1. Open `src/data/services.js`
2. Add object with title, description, and icon emoji

### Update Profile Picture
1. Replace `src/assets/images/Profile_picture.png`
2. Keep same filename for automatic update

### Change Colors
Edit `src/styles/global.css` variables:
```css
--color-primary: #0066CC;
--color-primary-dark: #004C99;
```

## Browser Testing
- Chrome/Edge: ✅ Tested
- Firefox: ⚠️ Test recommended
- Safari: ⚠️ Test recommended
- Mobile browsers: ⚠️ Test recommended

## Performance
- Lighthouse score target: 90+
- Vite provides automatic code splitting
- Images should be optimized (< 500KB each)

## SEO
- Meta tags: ✅ Added (German)
- Open Graph: ✅ Configured
- Semantic HTML: ✅ Used throughout
- Alt text: ✅ On all images
- robots.txt: ✅ Created

## Dependencies
```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

### Dev Dependencies
- vite
- @vitejs/plugin-react
- eslint
- eslint-plugin-react

No other dependencies needed - CSS Modules and Web3Forms keep it lightweight!

---

**Last Updated**: 2026-01-22
**Built with Claude Code**: Initial development and German translation completed
