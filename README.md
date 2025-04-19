# Movie Addicts

A sophisticated React application for cinema enthusiasts to discover, curate, and engage with films across various genres and eras.

**Live Demo:** [movie-addicts.vercel.app](https://movie-addicts.vercel.app)

## Features

### Film Discovery & Curation
- Browse trending and popular films sourced from TMDB's extensive catalog
- Powerful search functionality with real-time results
- Comprehensive film details including synopsis, cast, crew, and technical specifications
- Personalized collections with custom categorization

### User Engagement
- Curated favorites collection for quick access to preferred content
- Custom list creation for organizing films by theme, director, era, or personal criteria
- Detailed review system with rating capabilities
- Add custom film entries for independent or obscure titles not available in mainstream databases

### Technical Highlights
- Seamless responsive interface adapting to all screen sizes
- Optimized performance with React's virtual DOM implementation
- Persistent data storage through JSON Server backend
- Clean architectural separation between UI, business logic, and data layers

## Technology Stack

- **Frontend Framework**: React 18.3
- **Routing**: React Router 7.1
- **State Management**: Context API with custom hooks
- **Data Persistence**: JSON Server
- **External API**: TMDB (The Movie Database)
- **Deployment**: Vercel

## Development Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/movie-addicts.git
cd movie-addicts
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables by creating a `.env` file:
```
VITE_MOVIE_DB_API_KEY=your_tmdb_api_key
```

4. Launch development environment
```bash
npm run dev:all
```

5. Access the application at `http://localhost:5173`

## Architecture Overview

The application follows a modular component-based architecture with clear separation of concerns:

```
src/
├── api/          # API integration and service layer
├── components/   # Reusable UI components
├── contexts/     # State management with Context API
├── pages/        # Page-level components
├── styles/       # Component and global styling
└── utils/        # Utility functions and helpers
```

## Key Implementations

- **Dynamic State Management**: Centralized application state with Context API, optimized with custom hooks for performance
- **Responsive Design**: Fluid layout adapting to various screen sizes without compromising functionality
- **API Integration**: Efficient data fetching with error handling and loading states
- **Component Composition**: Reusable components following SOLID principles
- **Performance Optimization**: Minimized re-renders and optimized asset loading

## Deployment

The application is deployed on Vercel's global CDN for optimal performance:

- **Production URL**: [movie-addicts.vercel.app](https://movie-addicts.vercel.app)
- **CI/CD**: Automatic deployment on pushes to the main branch

## License

MIT

---

*This project showcases modern frontend development practices within the context of an engaging movie discovery platform.*
