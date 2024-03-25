import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/history',
				element: <h1>This is the test route</h1>,
			},
			{
				path: '/testing',
				element: <h1>This is the test route</h1>,
			},
		],
	},
	{
		path: 'test',
		element: <h1>This is the test route</h1>,
	},
	{
		path: 'history',
		element: <h1>This is the test route</h1>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
