import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {FavoritesProvider} from "./lib/FavoriteContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <FavoritesProvider>
          <App />
      </FavoritesProvider>
  </StrictMode>,
)
