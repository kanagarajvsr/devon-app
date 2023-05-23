import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import App from './App.jsx'
import './index.css'

const queryClient = new QueryClient(); // react-query used for Asyncronous state management

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <QueryClientProvider client={queryClient}>
    <BrowserRouter> 
      <App /> {/* Main components of the file */}
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
