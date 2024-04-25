import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import './assets/css/tailwind.css'

ReactDOM.createRoot(document.getElementById('enes')).render(
  
  
    <RouterProvider router={routes} />

)
