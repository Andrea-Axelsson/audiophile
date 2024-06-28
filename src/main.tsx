import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../src/app/store.ts'

/* Render the React application to the DOM */
ReactDOM.createRoot(document.getElementById('root')!).render(
  /* Provide the Redux store to the application */
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)