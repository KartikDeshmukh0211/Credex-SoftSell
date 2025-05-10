# SoftSell Marketing Website

A responsive marketing website for SoftSell, a fictional software license resale platform that helps businesses monetize their unused software licenses.

![SoftSell Website Screenshot](./public/og-image.jpg)

## Development Timeline

Development of this project took approximately 1-2 days, including:
- Initial setup and planning: ~2 hours
- Core feature implementation: ~8-10 hours
- UI/UX enhancements and animations: ~4-6 hours
- Responsiveness and cross-browser testing: ~1-2 hours

## Features Implemented

### 1. Responsive Layout
- Mobile-first design approach with tailored experience across all device sizes
- Custom breakpoint handling for optimal viewing on phones, tablets, and desktops
- Responsive typography and spacing using Tailwind's utility classes

### 2. Interactive UI Components
- Animated hero section with gradient effects
- Multi-step "How It Works" process visualization
- Testimonials with card hover effects
- Fully functional contact form with validation
- Animated button interactions

### 3. Dark/Light Mode Toggle
- System preference detection with manual override option
- Smooth transitions between modes
- Persistent theme selection using localStorage
- Carefully crafted color palette for both modes

### 4. Performance Optimizations
- Efficient animations using Framer Motion
- Lazy loading of off-screen content
- Optimized asset loading with eager loading for critical content
- Performant CSS with Tailwind's JIT compiler

### 5. Accessibility Features
- Semantic HTML structure
- ARIA-compliant interactive elements
- Keyboard navigation support
- Focus management for form elements
- Sufficient color contrast in both themes

### 6. SEO Enhancements
- Proper meta tags for search engines
- OpenGraph and Twitter card support
- Semantic heading structure
- Optimized images with descriptive alt text
- Structured sitemap

## Design Choices

### 1. Color Palette
- Primary: Indigo/Purple gradient for brand identity
- Secondary: White/Gray for content backgrounds
- Accent: Targeted uses of complementary colors for CTAs and highlights
- Dark mode variants with proper contrast considerations

### 2. Typography
- Inter font family for clean, modern readability
- Responsive font sizing using custom utility classes
- Proper hierarchy with font weights and sizes
- Optimized line heights for readability

### 3. Visual Elements
- Subtle gradients and shadows for depth
- Card-based design for content organization
- Strategic use of white space for readability
- Motion design that enhances rather than distracts

### 4. Interaction Design
- Meaningful hover and active states
- Subtle animations that guide user attention
- Form validation with clear error feedback
- Smooth scrolling navigation

## Technical Implementation

### Tech Stack
- React for component-based architecture
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- Context API for state management (theme)

### Architecture
- Component-based structure for reusability
- Context-based state management
- Responsive layout with mobile-first approach
- Dark/light mode theming system

### Best Practices
- Modern React patterns with hooks
- Responsive design principles
- Accessibility compliance
- Performance optimizations

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/softsell-website.git

# Navigate to the project directory
cd softsell-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

