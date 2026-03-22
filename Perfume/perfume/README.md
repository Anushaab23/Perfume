# Flora — Cinematic Luxury E-Commerce Frontend ✨

An ultra-premium, highly interactive web application built to showcase the art of luxury fragrance. Designed with a focus on cinematic storytelling, **Flora** utilizes advanced scroll-linked animations, dynamic component assembly, and complex state mechanics to create an immersive digital boutique experience.

This project focuses heavily on **Frontend DOM architecture and physics-based animations**, bypassing traditional static layouts for a fluid, continuous scrolling journey.

### 🌟 Key Features
*   **Cinematic Scroll Orchestration**: Interactive elements (like the signature droplet and floating perfume assembly) are mechanically linked to the user's Y-axis scroll position, mapping exact viewport distances to scale, opacity, and transform variables.
*   **Intelligent Viewport Rendering**: Utilizes Intersection Observers to detect when architectural sections (like the Shop Floor or Ingredients Grid) enter the screen, triggering staggered, spring-physics entry sequences.
*   **Multi-layered Parallax & UI Physics**: Elements don't just move—they interact. The design includes sophisticated layering, absolute positioned composite builds, and dynamic lighting effects powered by CSS radial gradients and WebKit reflections.
*   **Modular Architecture**: Built entirely with React functional components, utilizing clean prop-drilling and isolated CSS styling to ensure the complex Framer Motion logic remains maintainable and 60FPS performant.

### 🛠️ Tech Stack
*   **Framework**: React 18 + Vite (for lightning-fast HMR and bundling)
*   **Animations**: Framer Motion (`useScroll`, `useTransform`, `useSpring`, `useInView`) 
*   **Styling**: Vanilla CSS (CSS Grid, Flexbox, custom glassmorphism, dynamic variables)
*   **State Management**: React Hooks (`useState`, `useEffect`, `useRef`)

### 🧠 Technical Highlights
*   **The "Extraction" Sequence:** A droplet element that visually scales and transforms down the page, seamlessly transitioning into the center of a composite bottle assembly over the course of an 800px scroll window.
*   **The "Boutique" Handoff:** Complex state logic that completely hides (via `display: none`) absolute-positioned floating elements the exact moment the user reaches the final shop floor, preventing ghost overlaps and ensuring a flawless visual handover.

***

### 🚀 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/flora-luxury-perfume.git

# Navigate to the project directory
cd flora-luxury-perfume

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

*Note: This is a frontend-only showcase demonstrating advanced UI/UX and animation architecture. There is currently no backend database or live checkout system integrated.*

