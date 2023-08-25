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
		path: '/ZdGuiomar/',
		element: <App />,
		children: [
			{
				path: '/ZdGuiomar/',
				element: <Home />,
			},
			{
				path: '/ZdGuiomar/details',
				element: <Details />,
			},
		],
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
