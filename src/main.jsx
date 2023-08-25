// CSS
import './index.css'

// App
import App from './App.jsx'

// React e Router
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Routes (Pages)
import Home from './routes/Home.jsx';
import Gallery from './routes/Gallery.jsx';

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
				path: '/ZdGuiomar/fotos',
				element: <Gallery />
			},
		],
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
