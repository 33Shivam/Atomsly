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

## Choices & tradeoffs
- Used SpaceX `/launches` endpoint for client-side-filtering and pagination using tanstack tables.
- Favorites persisted in `localStorage` (simple, no backend).
- Modal implemented as accessible dialog with focus trap.
