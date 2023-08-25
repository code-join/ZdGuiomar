import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// React Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Details from './routes/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/ZdG/',
    element: <App />,
    children: [
      {
        path: '/ZdG/',
        element: <Home />
      },
      {
        path: '/ZdG/details',
        element: <Details />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
