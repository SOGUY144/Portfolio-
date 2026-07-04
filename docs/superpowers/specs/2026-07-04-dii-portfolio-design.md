# DII Batch 9 Portfolio Website Design

## 1. Overview
A highly animated, modern, and interactive single-page portfolio website designed for a university application to the DII (Digital Innovation and Information) Batch 9 program. The primary focus is on storytelling, showcasing not just successes, but also failures, learnings, and mindset.

## 2. Tech Stack
- **Framework:** React (via Vite) for fast rendering and component-based architecture.
- **Styling:** Vanilla CSS with modern features (CSS variables, Flexbox/Grid). Avoid Tailwind as per instructions unless explicitly needed later.
- **Animations:** Framer Motion for scroll-triggered and interactive UI animations (e.g., fade-ins, slide-ups, hover effects).
- **Typography:** Google Fonts (Outfit or Inter) for a sleek, premium tech feel.
- **Aesthetics:** Dark mode by default, glassmorphism elements, subtle gradients, and micro-interactions.

## 3. Architecture & Components

The application will be a Single Page Application (SPA) divided into key sections that the user can scroll through.

### 3.1 Main Layout (`App.jsx`)
- **Navigation Bar:** Sticky header with glassmorphism effect. Contains links jumping to each section.
- **Main Container:** Wraps all sections with a smooth scrolling behavior.

### 3.2 Sections (Components)
1. **Hero Section (`Hero.jsx`)**
   - **Purpose:** First impression.
   - **Features:** Large dynamic typography, glowing gradient background, animated name introduction, call-to-action button to scroll down.
2. **About Me (`About.jsx`)**
   - **Purpose:** Sincere introduction and "Why DII 9?".
   - **Features:** Split layout (photo placeholder on one side, text on the other). Text fades in on scroll.
3. **Experience & Projects (`Projects.jsx`)**
   - **Purpose:** Showcase the journey (successes, failures, learnings).
   - **Features:** Interactive cards. Clicking a card flips it or opens a modal/expandable section revealing the "Behind the scenes" (Challenges faced, how they were resolved).
4. **Mindset & Attitude (`Mindset.jsx`)**
   - **Purpose:** Answer attitude questions (conflict resolution, tech interests).
   - **Features:** Accordion layout or distinct visual blocks highlighting key philosophies.
5. **Contact (`Contact.jsx`)**
   - **Purpose:** Closing statement and links.
   - **Features:** Social links (GitHub, LinkedIn, Email) with hover animations.

## 4. Data Flow & Content Management
- For now, all content (text, image paths) will be stored in a local JSON or JS file (e.g., `src/data/content.js`). 
- This allows the user to easily swap out placeholders with their actual text and images later without digging deep into the React component code.

## 5. Visual Guidelines (Aesthetics)
- **Colors:** Deep dark background (e.g., `#0f172a`), accented with vibrant tech colors (e.g., electric blue, neon purple gradients).
- **Animations:**
  - *On Mount:* Elements slide up and fade in.
  - *On Scroll:* Staggered reveals of content.
  - *On Hover:* Buttons and cards scale up slightly (`scale: 1.05`) with a glow effect.

## 6. Implementation Strategy
1. Scaffold React project with Vite.
2. Set up global CSS (variables, resets, typography).
3. Build the static structure of each section with placeholder data.
4. Integrate Framer Motion and apply entrance/scroll animations.
5. Refine aesthetics (glassmorphism, gradients, responsiveness).
