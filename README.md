# EL Services - Professional Portfolio Website

A modern, professional portfolio website built with React and Vite, showcasing business computing services for small businesses. Features a clean design, responsive layout, and integrated contact form.

## Features

- **Modern Design**: Professional blue color scheme with clean, corporate aesthetics
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Single Page Application**: Smooth scrolling navigation between sections
- **SEO Optimized**: Complete meta tags for search engines and social media
- **Contact Form**: Integrated with Web3Forms for easy client communication
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessible**: WCAG compliant with proper semantic HTML

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: CSS Modules (scoped styles, no additional dependencies)
- **Contact Form**: Web3Forms (serverless contact form)
- **Deployment**: Flexible (Vercel, Netlify, or GitHub Pages)

## Project Structure

```
el.service/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media
│   ├── components/
│   │   ├── common/        # Reusable components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Container/
│   │   │   └── Section/
│   │   ├── layout/        # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Navigation/
│   │   └── sections/      # Page sections
│   │       ├── Hero/
│   │       ├── About/
│   │       ├── Services/
│   │       ├── Portfolio/
│   │       └── Contact/
│   ├── data/              # Static data files
│   │   ├── services.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/            # Global styles
│   │   ├── reset.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example           # Environment variables template
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel deployment config
├── netlify.toml           # Netlify deployment config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ericson-TM/el.service.git
cd el.service
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure Web3Forms:
   - Visit [web3forms.com](https://web3forms.com)
   - Sign up for a free account
   - Get your access key
   - Add it to your `.env` file:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

5. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**Footer & Header** ([src/components/layout/Footer/Footer.jsx](src/components/layout/Footer/Footer.jsx), [src/components/layout/Header/Header.jsx](src/components/layout/Header/Header.jsx)):
- Replace social media URLs
- Update contact email
- Modify brand name/logo

**About Section** ([src/components/sections/About/About.jsx](src/components/sections/About/About.jsx)):
- Update bio text
- Replace education details
- Add your professional photo

### 2. Content Updates

**Services** ([src/data/services.js](src/data/services.js)):
```javascript
export const services = [
  {
    id: 1,
    title: 'Your Service',
    description: 'Service description',
    icon: '🎯' // Replace with your icon
  }
];
```

**Projects** ([src/data/projects.js](src/data/projects.js)):
```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    category: 'Web Development',
    image: '/images/project.jpg',
    link: 'https://project-url.com'
  }
];
```

**Skills** ([src/data/skills.js](src/data/skills.js)):
```javascript
export const skills = [
  {
    id: 1,
    name: 'Skill Name',
    category: 'Category',
    icon: '💻'
  }
];
```

### 3. Design Customization

**Colors** ([src/styles/global.css](src/styles/global.css)):
```css
:root {
  --color-primary: #0066CC;        /* Change primary color */
  --color-primary-dark: #004C99;   /* Adjust dark variant */
  --color-primary-light: #3385D6;  /* Adjust light variant */
}
```

**Typography** ([src/styles/global.css](src/styles/global.css)):
- Modify `--font-primary` and `--font-heading`
- Adjust font sizes in the CSS variables

### 4. SEO & Meta Tags

Update [index.html](index.html):
- Replace title and description
- Update Open Graph image URL
- Modify keywords for your niche

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable:
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: Your Web3Forms access key
5. Deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings are auto-detected from `netlify.toml`
6. Add environment variable:
   - Key: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: Your Web3Forms access key
7. Deploy

### Option 3: GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as source
4. Add repository secret:
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: Your Web3Forms access key
5. Push to main branch to trigger deployment
6. Site will be available at `https://username.github.io/el.service`

**Note**: For GitHub Pages, update `base` in `vite.config.js`:
```javascript
export default defineConfig({
  base: '/el.service/', // Replace with your repo name
  // ...
})
```

## Testing Production Build

Test the production build locally before deploying:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the built site.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The site is optimized for performance:
- CSS Modules for scoped styling (no runtime overhead)
- Minimal dependencies
- Code splitting with Vite
- Optimized images recommended (WebP format, < 500KB)
- Lazy loading for below-the-fold content

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast meets WCAG AA standards

## Troubleshooting

### Contact Form Not Working

1. Verify Web3Forms access key is correct in `.env`
2. Ensure environment variable is added in deployment platform
3. Check browser console for error messages
4. Verify Web3Forms account is active

### Build Errors

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear Vite cache: `rm -rf node_modules/.vite`
4. Try building again: `npm run build`

### Styling Issues

1. Ensure all CSS Module imports use the correct path
2. Check that global styles are imported in `main.jsx`
3. Clear browser cache
4. Check for conflicting CSS class names

## Maintenance

### Regular Updates

- Update content in data files as needed
- Replace project screenshots with real images
- Update skills as you learn new technologies
- Refresh portfolio projects regularly

### Dependency Updates

Check for updates monthly:
```bash
npm outdated
npm update
```

For major version updates:
```bash
npm install react@latest react-dom@latest
npm install -D vite@latest
```

## Contributing

This is a personal portfolio project, but feel free to fork it for your own use. If you find bugs or have suggestions, please open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support:
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- GitHub: [@Ericson-TM](https://github.com/Ericson-TM)

## Acknowledgments

- Built with [React](https://react.dev)
- Powered by [Vite](https://vitejs.dev)
- Contact form by [Web3Forms](https://web3forms.com)
- Fonts from [Google Fonts](https://fonts.google.com)

---

Built with ❤️ for small businesses
