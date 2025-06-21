import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'//used for routing
import {UserProvider} from './Hooks/UserContext.jsx'
import {UserProvider1} from './Hooks/UserContext1.jsx' // Importing UserProvider1 for wrapping the app and using the data anywhere in the app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <UserProvider1>
      <App />
      </UserProvider1>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
