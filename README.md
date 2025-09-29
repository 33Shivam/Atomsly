# Atmosly - SpaceX Mission Explorer (React)

Demo: https://your-vercel-url
Repo: https://github.com/your/repo

## Features
- List of SpaceX launches (SpaceX API v4)
- Search, Year filter, Successful-only toggle
- Launch detail modal with patch image and links
- Favorites (persisted in localStorage)
- Loading / error / empty states
- Responsive and accessible

## Tech
- React (Vite or Create React App)
- TypeScript
- React Testing Library + Jest

## Run locally
1. `git clone ...`
2. `yarn && yarn dev` or `npm install && npm run dev`
3. open `http://localhost:5173`

## Tests
`yarn test` or `npm test`

## Choices
- **UI Framework – ShadCN/UI**  
  Used for building accessible, modern, and consistent UI components quickly.  
  Tailwind integration ensures faster development with a clean design system.

- **Filtering – TanStack Table**  
  Leveraged for robust filtering/sorting features.  
  Enabled search, year filter, and success toggle with reactive updates.  
  Scales better than manual list filtering.

- **Favorites Persistence – LocalStorage + Set**  
  Favorites are stored in browser `localStorage` to persist across reloads.  
  Implemented with JavaScript `Set` for **O(1) lookups** and faster retrieval compared to arrays.  
  Keeps logic simple without needing a backend.
