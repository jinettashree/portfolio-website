# Jinetta Shree Gokul Rajan — Portfolio Website

A clean, minimal personal portfolio website built with React.js, showcasing my journey as a Frontend Developer and Electronics & Communication Engineering student.

🌐 **Live Site:** [portfolio-website-eta-ten-96.vercel.app](https://portfolio-website-eta-ten-96.vercel.app)

---

## Features

- Animated landing screen with typewriter effect
- Fixed sidebar layout on desktop with scrollable content
- Fully responsive mobile design with sticky bottom navigation
- Sections: About, Experience, Projects, Blogs, Footer
- Medium blog integration via RSS feed
- Smooth scroll navigation
- Hover animations throughout

---

## Tech Stack

| Technology           | Usage                       |
| -------------------- | --------------------------- |
| React.js             | UI framework                |
| CSS3                 | Styling & responsive design |
| Bootstrap            | Grid layout                 |
| Framer Motion        | Landing screen animation    |
| React Type Animation | Typewriter name effect      |
| React Icons          | Social & UI icons           |
| Vercel               | Deployment                  |

---

## Project Structure

```
src/
├── assets/
│   ├── fonts/          # Rosehot custom font
│   └── images/         # Profile image
├── modules/
│   ├── sidebar/
│   │   ├── Sidebar.jsx
│   │   └── Sidebar.css
│   ├── sections/
│   │   ├── profileSection/
│   │   │   ├── ProfileSection.jsx
│   │   │   └── ProfileSection.css
│   │   ├── aboutSection/
│   │   ├── experienceSection/
│   │   ├── projectsSection/
│   │   ├── blogsSection/
│   │   └── footerSection/
│   └── ui/
│        └── sectionHeading/
│           ├── SectionHeading.jsx
│           └── SectionHeading.css
├── pages/
│   └── home/
│       ├── HomePage.jsx
│       └── Home.css
├── App.jsx
├── App.css
└── index.css
```

---

## Responsive Design

| Screen            | Layout                                                               |
| ----------------- | -------------------------------------------------------------------- |
| Desktop (> 768px) | Fixed left sidebar + scrollable right content                        |
| Mobile (≤ 768px)  | Centered profile header + full width content + sticky bottom tab bar |

---

## Sections

- **About** — Personal introduction and background
- **Experience** — Work experience with skills badges
- **Projects** — Projects with live links and GitHub links
- **Blogs** — Fetched live from Medium via RSS feed
- **Footer** — GitHub, LinkedIn, Email, Medium, Phone links

---

## Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jinettashree/portfolio-website.git

# Navigate into the project
cd portfolio-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## Deployment

This project is deployed on **Vercel**. Any push to the `main` branch automatically triggers a new deployment.

---

## Connect with Me

- GitHub: [github.com/jinettashree](https://github.com/jinettashree)
- LinkedIn: [linkedin.com/in/jinetta-shree-gokul-rajan-679577221](https://www.linkedin.com/in/jinetta-shree-gokul-rajan-679577221/)
- Medium: [medium.com/@jinettashree](https://medium.com/@jinettashree)
- Email: jinettashree@gmail.com

---

© 2026 Jinetta Shree Gokul Rajan. All rights reserved.
