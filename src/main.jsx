import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './Redux/storage';
import { clientQuery } from './config/queryclient';


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={clientQuery}>
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </QueryClientProvider>
)
