import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, Register, Landing, Categories } from './page/index.ts';
import { requestWordListAction } from './utilities/action.ts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/hangman',
				element: <App />,
			},
			{
				path: '/categories',
				element: <Categories />,
				action: requestWordListAction,
			},
			{
				path: '/categories/:category',
				element: <Categories />,
				action: requestWordListAction,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
