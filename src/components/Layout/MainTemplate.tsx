import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import Profile from '../Profile/Profile';
import SecMovies from '../SecMovies/SecMovies';
import SingleMovie from '../SingleMovie/SingleMovie'
const MainTemplate = () => {
	const [, setAuth] = useContext(AuthContext);
	useEffect(() => {
		const getLogin = () => {
			const myLogin = localStorage.getItem('myLogin');
			if (myLogin) {
				const statusLogin = myLogin === 'true' ? true : false;
				setAuth(statusLogin);
			}
		};
		getLogin();
	}, [setAuth]);

	return (
		<>
			
			<Header />
			<main>
				<Route exact path="/movie/:idMovie" component={SingleMovie} />
				<Route exact path="/profile" component={Profile} />
				<Route
					exact
					path="/populares"
					component={() => (
						<SecMovies 
                        title="Lo más popular"
                        apiURL="https://api.themoviedb.org/3/movie/top_rated?api_key=40934736fdf8735c5e2986d6be76139e&language=es-ES&page=1" />
					)}
				/>
				<Route
					exact
					path="/estrenos"
					component={() => (
						<SecMovies 
                        title="Estrenos"
                        apiURL="https://api.themoviedb.org/3/movie/upcoming?api_key=40934736fdf8735c5e2986d6be76139e&language=es-ES&page=1" />
					)}
				/>
				<Route exact path="/" component={Homepage} />
			</main>
		</>
	);
};

export default MainTemplate;
