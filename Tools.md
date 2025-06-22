# AI Tools and Design Decisions

This project was developed using **Cursor** as the primary AI coding assistant.

I've been using Next.js lately and one of the goals for me was to refresh my knowledge on a few libraries: ChakraUI + Tanstack Query & Router in an SPA setup.

Cursor helped understand how to quickly set up these libraries, make them work together and help me quickly debug errors.

Also, it helped set up the UI to be responsive and very easy to set up with Chakra components.

## Libraries Used

- **React 19** - Latest React with improved TypeScript support
- **TanStack Router** - Type-safe routing with excellent TypeScript integration
- **TanStack Query** - Data fetching with automatic caching and background updates
- **Chakra UI** - Component library for rapid UI development and consistent styling
- **TypeScript** - Full type safety across components and API calls

## Key Design Decisions

**Caching Strategy**: Implemented TanStack Query with 10-minute stale time and 30-minute garbage collection time to prevent unnecessary API calls and improve user experience.

**Component Architecture**: Split functionality into reusable components (`LeagueCard`, `SearchBar`, `DropdownFilter`) with custom hooks for data fetching logic.

**Responsive Design**: Used Chakra UI's responsive grid system for mobile-first design that adapts across devices.
