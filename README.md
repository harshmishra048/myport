# Harsh Mishra Portfolio

A premium, futuristic personal brand website for Harsh Mishra, built with React, Vite, Tailwind CSS, Framer Motion, Lenis, and React Three Fiber.

## Features

- Cinematic 3D hero section with a developer workspace scene
- Premium dark glassmorphism UI with cyan, violet, and emerald accents
- Smooth scroll, reveal animations, magnetic buttons, cursor glow, and scroll progress
- Reusable component structure for every major section
- Responsive project showcase, skills orbit, timeline, education, certifications, achievements, contact, and footer
- Lazy-loaded 3D hero chunk for better initial loading behavior
- Clean data-driven content in `src/data/portfolio.js`

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber / Drei
- Lenis
- Lucide React

## Project Structure

```txt
src/
  components/
    About.jsx
    Achievements.jsx
    BackgroundEffects.jsx
    Certifications.jsx
    Contact.jsx
    CursorGlow.jsx
    Education.jsx
    ExperienceTimeline.jsx
    Footer.jsx
    Hero3D.jsx
    MagneticButton.jsx
    Navbar.jsx
    ProjectCard.jsx
    Projects.jsx
    Reveal.jsx
    ScrollProgress.jsx
    SectionHeader.jsx
    SkillsOrbit.jsx
  data/
    portfolio.js
  styles/
    index.css
  App.jsx
  main.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Content Updates

Most portfolio content lives in `src/data/portfolio.js`. Update that file to change profile details, skills, projects, experience, education, certifications, and achievements.

The downloadable resume placeholder is available at `public/Harsh_Mishra_Resume.txt`.

## Image Customization

You can use remote image URLs or local images from `public/images`.

For local images, place files in:

```txt
public/images/
```

Then reference them like this:

```js
image: '/images/project-preview.png'
```

Image fields are available in `src/data/portfolio.js`:

- `profile.images.portrait`
- `skillImages`
- each item in `projects[].image`
- each item in `certifications[].image`
- each item in `achievements[].image`

## Deployment

This project can be deployed on Vercel, Netlify, GitHub Pages, or any static hosting provider that supports Vite builds. Use:

```bash
npm run build
```

Then deploy the generated `dist/` folder.
