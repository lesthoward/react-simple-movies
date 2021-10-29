import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainTemplate from './components/Layout/MainTemplate';
import { AuthProvider } from './context/AuthContext';
import { MoviesProvider } from './context/MoviesContext';
const App = () => {
	return (
		<>
			<AuthProvider>
				<MoviesProvider>
					<BrowserRouter>
						<Route path="/" component={MainTemplate} />
					</BrowserRouter>
				</MoviesProvider>
			</AuthProvider>
		</>
	);
};

export default App;
