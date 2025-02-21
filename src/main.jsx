import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './App.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import AuthProvider from './providers/AuthProviders.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      </AuthProvider>
    </DarkModeProvider>
  </StrictMode>,
)
