# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Development server**: `npm run dev` (runs with Turbopack for faster development)
- **Build**: `npm run build`
- **Start production**: `npm start`
- **Lint**: `npm run lint`

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom configuration
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel deployment

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   ├── page/              # Page-specific components
│   │   ├── homePage/      # Home page components (Hero, Slider, InfoSection)
│   │   └── aboutPage/     # About page components
│   └── ui/                # Reusable UI components (shadcn/ui)
└── lib/
    └── utils.ts           # Utility functions (cn helper)
```

### Key Architecture Patterns

#### Component Organization
- **Layout components**: Shared across all pages (Header with navigation, Footer)
- **Page components**: Each major page has its own component directory
- **UI components**: Reusable components following shadcn/ui patterns

#### Styling Approach
- Uses Tailwind CSS with custom color extensions (green-lime, green-dark, etc.)
- Components include responsive design patterns with mobile-first approach
- Custom CSS-in-JS used sparingly in Header component for animations

#### State Management
- Uses React hooks (useState, useEffect) for local component state
- No global state management library currently implemented
- Client-side rendering patterns with "use client" directive where needed

#### Image Handling
- Uses Next.js Image component with optimization
- Images stored in `/public` directory with organized naming
- Implements priority loading for above-the-fold images
- Custom preloading logic in Hero component for smooth transitions

#### Navigation
- Header component handles both desktop and mobile navigation
- Implements smooth scrolling to page sections
- Active section detection with scroll spy functionality
- Mobile menu with overlay and click-outside handling

## Development Notes

### Font Configuration
- Uses Geist, Geist Mono, and Inter fonts from Google Fonts
- Font variables defined in root layout for consistent usage

### Path Aliases
- `@/` maps to `./src/` for clean imports
- UI components: `@/components/ui`
- Utils: `@/lib/utils`

### shadcn/ui Configuration
- Configured for "new-york" style
- Uses CSS variables for theming
- Components stored in `src/components/ui/`

### Performance Considerations
- Turbopack enabled for development builds
- Image optimization with Next.js Image component
- Lazy loading implemented for non-critical images
- Custom preloading strategy for hero image transitions